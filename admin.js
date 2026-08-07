/* ═══ ADMIN ARCH'VERSE — admin.js ═══ */
(function () {
  'use strict';

  let supabase = null;

  function $(id) { return document.getElementById(id); }

  // ── À la connexion : vérifie si l'utilisateur est admin ──
  window.addEventListener('archverse:auth', async function (e) {
    supabase = e.detail.supabase;
    const user = e.detail.user;
    if (!supabase || !user || !user.id) return;
    try {
      const { data } = await supabase
        .from('profiles')
        .select('is_admin')
        .eq('id', user.id)
        .maybeSingle();
      if (data && data.is_admin) {
        const btn = $('adminBtn');
        if (btn) btn.style.display = 'inline-flex';
      }
    } catch (err) {}
  });

  // ── Ouvrir / fermer le panneau ──
  document.addEventListener('click', function (e) {
    if (e.target.closest('#adminBtn')) {
      $('adminModal').classList.add('active');
      chargerListeAdmin();
    }
    if (e.target.closest('#closeAdmin') || e.target.id === 'adminModal') {
      $('adminModal').classList.remove('active');
    }
  });

  // ── Phase par défaut selon la collection ──
  const selCollection = $('a-collection');
  const inpPhase = $('a-phase');
  if (selCollection) {
    selCollection.addEventListener('change', function () {
      if (!inpPhase.value || inpPhase.dataset.auto === '1') {
        inpPhase.value = selCollection.value === 'mcu' ? 'Phase 7' : 'Hors MCU';
        inpPhase.dataset.auto = '1';
      }
    });
  }

  // ── Formulaire : ajouter un film / série ──
  const form = $('adminForm');
  if (form) {
    form.addEventListener('submit', async function (ev) {
      ev.preventDefault();
      if (!supabase) { alert('Supabase pas encore prêt, réessaie.'); return; }

      const row = {
        title: $('a-title').value.trim(),
        year: parseInt($('a-year').value, 10) || new Date().getFullYear(),
        type: $('a-type').value,
        collection: selCollection.value,
        phase: inpPhase.value.trim() || (selCollection.value === 'mcu' ? 'Phase 7' : 'Hors MCU'),
        earth: $('a-earth').value.trim() || 'Terre',
        url: $('a-url').value.trim() || undefined,
        poster: $('a-poster').value.trim() || undefined,
        note: $('a-note').value.trim() || undefined
      };

      const { error } = await supabase.from('catalogue').insert([row]);
      if (error) {
        alert('Erreur : ' + error.message);
      } else {
        alert('✅ "' + row.title + '" ajouté au catalogue !');
        location.reload(); // recharge pour afficher le nouveau film
      }
    });
  }

  // ── Liste des éléments du catalogue + suppression ──
  async function chargerListeAdmin() {
    const box = $('adminList');
    if (!box || !supabase) return;
    box.innerHTML = '<p style="opacity:.6">Chargement…</p>';
    try {
      const { data, error } = await supabase
        .from('catalogue')
        .select('*')
        .order('id');
      if (error) throw error;
      if (!data || data.length === 0) {
        box.innerHTML = '<p style="opacity:.6">Aucun élément ajouté pour l\'instant.</p>';
        return;
      }
      box.innerHTML = '';
      data.forEach(function (l) {
        const div = document.createElement('div');
        div.className = 'admin-row';
        div.innerHTML =
          '<span>' + (l.title || '?') + ' <em>(' + (l.year || '') + ')</em> — ' +
          (l.collection === 'horsmcu' ? 'Hors MCU' : 'MCU') + '</span>' +
          '<button type="button" class="admin-del" data-id="' + l.id + '">🗑 Supprimer</button>';
        box.appendChild(div);
      });
    } catch (err) {
      box.innerHTML = '<p style="opacity:.6">Impossible de charger : ' + err.message + '</p>';
    }
  }

  // ── Suppression (avec confirmation) ──
  document.addEventListener('click', async function (e) {
    const btn = e.target.closest('.admin-del');
    if (!btn) return;
    if (!confirm('Supprimer définitivement cet élément ?')) return;
    const { error } = await supabase.from('catalogue').delete().eq('id', btn.dataset.id);
    if (error) {
      alert('Erreur : ' + error.message);
    } else {
      chargerListeAdmin();
      location.reload();
    }
  });
})();

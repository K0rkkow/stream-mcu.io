<?php
session_start();

$PASSWORD = "<Y]0`qt<Xa$3q{;6AGKE£3(18`"; // ⚠️ CHANGE CE MOT DE PASSE !

// Connexion
if (isset($_POST['login'])) {
    if ($_POST['password'] === $PASSWORD) {
        session_regenerate_id(true);
        $_SESSION['admin'] = true;
    } else {
        $erreur = "Mot de passe incorrect.";
    }
}

// Déconnexion
if (isset($_GET['logout'])) {
    session_destroy();
    header("Location: admin.php");
    exit;
}

$connecte = !empty($_SESSION['admin']);
?>
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Page développeur — Catalogue</title>
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: #0b0b12; color: #eee; font-family: Arial, sans-serif; padding: 20px; }
h1 { color: #e62429; margin-bottom: 20px; font-size: 22px; }
.btn {
  background: #e62429; color: #fff; border: none; padding: 10px 18px;
  border-radius: 6px; cursor: pointer; font-size: 15px; font-weight: bold;
}
.btn:hover { background: #ff3b40; }
.btn.gris { background: #333; }
.btn.gris:hover { background: #444; }
.row {
  display: flex; align-items: center; gap: 12px; background: #15151f;
  border: 1px solid #22222e; border-radius: 8px; padding: 10px; margin-bottom: 8px;
}
.row img { width: 40px; height: 60px; object-fit: cover; border-radius: 4px; }
.row .info { flex: 1; }
.del { background: none; border: 1px solid #e62429; color: #e62429; border-radius: 6px; padding: 6px 10px; cursor: pointer; }
.del:hover { background: #e62429; color: #fff; }
#liste { margin-top: 20px; }
h2 { margin-top: 24px; font-size: 16px; color: #aaa; }

/* Modal */
#modal { display: none; position: fixed; inset: 0; background: rgba(0,0,0,.75); z-index: 50; }
#modal.active { display: flex; align-items: center; justify-content: center; }
#modal .boite {
  background: #15151f; border: 1px solid #2a2a3a; border-radius: 12px;
  padding: 24px; width: min(540px, 92vw); max-height: 90vh; overflow: auto;
}
#modal h2 { color: #e62429; margin-bottom: 16px; font-size: 18px; margin-top: 0; }
label { display: block; margin: 10px 0 4px; font-size: 13px; color: #aaa; }
input, select, textarea {
  width: 100%; padding: 9px 10px; border-radius: 6px; border: 1px solid #333;
  background: #0b0b12; color: #eee; font-size: 14px;
}
.actions { display: flex; gap: 10px; margin-top: 18px; justify-content: flex-end; }
.form-login { max-width: 320px; margin: 80px auto; background: #15151f; padding: 24px; border-radius: 12px; }
.form-login h1 { text-align: center; }
input[type=password] { margin: 10px 0 14px; }
</style>
</head>
<body>

<?php if (!$connecte): ?>
  <form class="form-login" method="post">
    <h1>Page développeur</h1>
    <label>Mot de passe</label>
    <input type="password" name="password" required autofocus>
    <?php if (isset($erreur)) echo "<p style='color:#e62429;font-size:13px'>$erreur</p>"; ?>
    <button class="btn" style="width:100%" name="login" value="1">Connexion</button>
  </form>

<?php else: ?>
  <div style="display:flex;justify-content:space-between;align-items:center">
    <h1>Page développeur — Catalogue</h1>
    <a class="btn gris" href="admin.php?logout=1" style="text-decoration:none">Déconnexion</a>
  </div>

  <button class="btn" id="btnAjouter">Ajouter un film / une série</button>

  <h2>Éléments ajoutés</h2>
  <div id="liste"></div>

  <!-- Modal d'ajout -->
  <div id="modal">
    <div class="boite">
      <h2>Ajouter au catalogue</h2>

      <label>URL du film / de la série (heiwastream.fr...)</label>
      <input id="f_url" placeholder="https://heiwastream.fr/watch/movie/1726" oninput="detecterUrl()">
      <button class="btn gris" style="margin-top:8px;width:100%" onclick="autoFill()" type="button">Remplir automatiquement (TMDB)</button>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
        <div>
          <label>Type</label>
          <select id="f_type">
            <option value="movie">Film</option>
            <option value="series">Série</option>
          </select>
        </div>
        <div>
          <label>Collection</label>
          <select id="f_collection">
            <option value="mcu">MCU</option>
            <option value="horsmcu">Hors MCU</option>
          </select>
        </div>
      </div>

      <label>Titre</label>
      <input id="f_titre" placeholder="Ex : Iron Man">

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
        <div>
          <label>Année</label>
          <input id="f_annee" type="number" placeholder="2026">
        </div>
        <div>
          <label>Terre / univers</label>
          <input id="f_terre" list="terres" placeholder="Terre-616">
          <datalist id="terres">
            <option value="Terre-616"><option value="Terre-10005">
            <option value="Multivers"><option value="TVA / Hors temps">
            <option value="Gotham"><option value="Terre">
            <option value="Krypton / Terre"><option value="Atlantide">
            <option value="Themyscira">
          </datalist>
        </div>
      </div>

      <label>Phase / Catégorie</label>
      <select id="f_phase">
        <option>Phase 1</option><option>Phase 2</option><option>Phase 3</option>
        <option>Phase 4</option><option>Phase 5</option><option>Phase 6</option>
        <option>DC</option><option>Sony</option><option>Fox / X-Men</option>
        <option>Netflix</option><option>Amazon</option><option>Arrowverse</option>
        <option>Hors MCU</option>
      </select>

      <label>Poster (URL)</label>
      <input id="f_poster" placeholder="https://image.tmdb.org/t/p/w500/...">

      <div id="zoneSerie" style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
        <div>
          <label>Saison n°</label>
          <input id="f_saison" type="number" value="1" min="1">
        </div>
        <div>
          <label>Nombre d'épisodes</label>
          <input id="f_nbEp" type="number" value="8" min="1">
        </div>
      </div>

      <label>Note (optionnel)</label>
      <input id="f_note" placeholder="Ex : pas encore disponible">

      <div class="actions">
        <button class="btn gris" onclick="fermer()" type="button">Annuler</button>
        <button class="btn" onclick="ajouter()" type="button">Enregistrer</button>
      </div>
    </div>
  </div>

<script>
// ========== Liste des éléments ajoutés ==========
let ITEMS = [];

async function charger() {
  try {
    const r = await fetch('data.json');
    ITEMS = await r.json();
  } catch (e) { ITEMS = []; }
  afficherListe();
}

function afficherListe() {
  const list = document.getElementById('liste');
  list.innerHTML = ITEMS.length === 0
    ? '<p style="color:#666">Rien pour l\'instant — clique sur « Ajouter ».</p>'
    : '';
  ITEMS.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = 'row';
    div.innerHTML = `
      <img src="${item.poster || ''}" onerror="this.style.display='none'">
      <div class="info">
        <strong>${item.title}</strong> (${item.year}) —
        ${item.type === 'movie' ? 'Film' : 'Série'} —
        ${item.phase} — ${item.earth}
        ${item.note ? '<br><small style="color:#e6a700">' + item.note + '</small>' : ''}
      </div>
      <button class="del" onclick="supprimer(${idx})">Supprimer</button>`;
    list.appendChild(div);
  });
}

async function sauvegarder() {
  const r = await fetch('save.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items: ITEMS })
  });
  const res = await r.json().catch(() => ({}));
  if (!res.ok) alert('Erreur : ' + (res.error || 'impossible d\'enregistrer'));
  return res.ok !== false;
}

async function supprimer(idx) {
  if (!confirm('Supprimer « ' + ITEMS[idx].title + ' » ?')) return;
  ITEMS.splice(idx, 1);
  if (await sauvegarder()) afficherListe();
}

// ========== Modal ==========
document.getElementById('btnAjouter').onclick = () => document.getElementById('modal').classList.add('active');

function fermer() { document.getElementById('modal').classList.remove('active'); }

document.getElementById('modal').onclick = e => { if (e.target.id === 'modal') fermer(); };

// Afficher les champs "saison / épisodes" seulement pour les séries
function majType() {
  document.getElementById('zoneSerie').style.display =
    document.getElementById('f_type').value === 'series' ? 'grid' : 'none';
}
document.getElementById('f_type').onchange = majType;
majType();

// Si on choisit "Hors MCU", la catégorie par défaut devient "Hors MCU"
document.getElementById('f_collection').onchange = () => {
  if (document.getElementById('f_collection').value === 'horsmcu') {
    document.getElementById('f_phase').value = 'Hors MCU';
  }
};

// Détection automatique : film ou série, et n° de saison, depuis l'URL
function detecterUrl() {
  const url = document.getElementById('f_url').value.trim();
  const m = url.match(/watch\/(movie|tv)\/(\d+)(?:\/s(\d+)e)?/);
  if (!m) return;
  document.getElementById('f_type').value = m[1] === 'movie' ? 'movie' : 'series';
  if (m[3]) document.getElementById('f_saison').value = m[3];
  majType();
}

// Remplissage automatique via TMDB (clé gratuite : themoviedb.org → settings → API)
async function autoFill() {
  let key = localStorage.getItem('tmdb_key');
  if (!key) {
    key = prompt('Colle ta clé API TMDB (gratuite sur themoviedb.org → settings → API) :');
    if (!key) return;
    localStorage.setItem('tmdb_key', key);
  }
  const url = document.getElementById('f_url').value.trim();
  const m = url.match(/watch\/(movie|tv)\/(\d+)/);
  if (!m) { alert('Colle d\'abord une URL du type https://heiwastream.fr/watch/movie/1726'); return; }
  const type = m[1] === 'movie' ? 'movie' : 'tv';
  try {
    const r = await fetch('https://api.themoviedb.org/3/' + type + '/' + m[2] + '?api_key=' + key + '&language=fr-FR');
    const d = await r.json();
    if (d.success === false) { alert('Erreur TMDB : ' + (d.status_message || 'clé invalide')); return; }
    document.getElementById('f_titre').value = d.title || d.name || '';
    document.getElementById('f_annee').value = (d.release_date || d.first_air_date || '').slice(0, 4);
    if (d.poster_path) document.getElementById('f_poster').value = 'https://image.tmdb.org/t/p/w500' + d.poster_path;
    document.getElementById('f_type').value = type;
    if (type === 'tv') {
      const saison = parseInt(document.getElementById('f_saison').value) || 1;
      const sr = await fetch('https://api.themoviedb.org/3/tv/' + m[2] + '/season/' + saison + '?api_key=' + key + '&language=fr-FR');
      const sd = await sr.json();
      if (sd.episodes) document.getElementById('f_nbEp').value = sd.episodes.length;
    }
    majType();
  } catch (e) { alert('Impossible de contacter TMDB (clé valide ?)'); }
}

// ========== Ajout ==========
async function ajouter() {
  const url = document.getElementById('f_url').value.trim();
  const type = document.getElementById('f_type').value;
  const title = document.getElementById('f_titre').value.trim();
  const year = parseInt(document.getElementById('f_annee').value) || new Date().getFullYear();
  const earth = document.getElementById('f_terre').value.trim() || 'Terre';
  const phase = document.getElementById('f_phase').value;
  const collection = document.getElementById('f_collection').value;
  const poster = document.getElementById('f_poster').value.trim();
  const note = document.getElementById('f_note').value.trim();

  if (!url) { alert('Colle l\'URL du film / de la série.'); return; }
  if (!title) { alert('Indique le titre (ou utilise « Remplir automatiquement »).'); return; }

  const id = (url.match(/watch\/(?:movie|tv)\/(\d+)/) || [])[1];
  const item = { title, year: year, type, phase, earth, collection };
  if (poster) item.poster = poster;
  if (note) item.note = note;

  if (type === 'movie') {
    item.url = url;
  } else {
    const saison = parseInt(document.getElementById('f_saison').value) || 1;
    const nbEp = parseInt(document.getElementById('f_nbEp').value) || 8;
    item.episodes = Array.from({ length: nbEp }, (_, i) =>
      ['Ép. ' + (i + 1), 'https://heiwastream.fr/watch/tv/' + id + '/s' + String(saison).padStart(2, '0') + 'e' + String(i + 1).padStart(2, '0')]);
  }

  ITEMS.push(item);
  if (await sauvegarder()) {
    fermer();
    afficherListe();
    alert('« ' + title + ' » ajouté au catalogue !');
  }
}

charger();
</script>
<?php endif; ?>
</body>
</html>

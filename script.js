const MARVEL = [
  // ═══ PHASE 1 ═══
  { title: "Captain America: First Avenger", year: 1942, type: "movie", phase: "Phase 1", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/1771", poster: "https://i.ebayimg.com/images/g/hM4AAOSwcw1jO34E/s-l1200.jpg" },
  { title: "Agent Carter S1", year: 1946, type: "series", phase: "Phase 1", earth: "Terre-616",
    poster: "https://image.tmdb.org/t/p/w500/s9H1SB5lziAdz9prCD08S6zOK2V.jpg",
    episodes: Array.from({length:8}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/61550/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Agent Carter S2", year: 1947, type: "series", phase: "Phase 1", earth: "Terre-616",
    poster: "https://image.tmdb.org/t/p/w500/ivkTVyr1xMnkNP37CRCDggvXgnC.jpg",
    episodes: Array.from({length:10}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/61550/s02e${String(i+1).padStart(2,'0')}`]) },
  { title: "Captain Marvel", year: 1995, type: "movie", phase: "Phase 3", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/299537", poster: "https://image.tmdb.org/t/p/w500/aRJAoQ6mqPHAKXjP3CqNyLC8FAh.jpg" },
  { title: "Iron Man", year: 2010, type: "movie", phase: "Phase 1", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/1726", poster: "https://image.tmdb.org/t/p/w500/kNKUCNLu1lZDGAHOBEHxR6psYHx.jpg" },
  { title: "Iron Man 2", year: 2010, type: "movie", phase: "Phase 1", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/10138", poster: "https://image.tmdb.org/t/p/w500/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg" },
  { title: "The Incredible Hulk", year: 2010, type: "movie", phase: "Phase 1", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/1724", poster: "https://image.tmdb.org/t/p/w500/cImKVGUiEnwLsNUyoMA0a0na2y5.jpg" },
  { title: "Thor", year: 2011, type: "movie", phase: "Phase 1", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/10195", poster: "https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg" },
  { title: "The Avengers", year: 2012, type: "movie", phase: "Phase 1", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/24428", poster: "https://image.tmdb.org/t/p/w500/ylsAO88v2tF0iXRFojPa0UaAJf1.jpg" },

  // ═══ PHASE 2 ═══
  { title: "Iron Man 3", year: 2012, type: "movie", phase: "Phase 2", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/68721", poster: "https://image.tmdb.org/t/p/w500/sE71EBrRMfW0NKMHlXPO55Km88X.jpg" },
  { title: "Thor: The Dark World", year: 2013, type: "movie", phase: "Phase 2", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/76338", poster: "https://image.tmdb.org/t/p/w500/eAIGX0nlwlb5sMb4uDRGNFqMyG9.jpg" },
  { title: "Captain America: The Winter Soldier", year: 2014, type: "movie", phase: "Phase 2", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/100402", poster: "https://image.tmdb.org/t/p/w500/n3Xa8g1sWrUVUal6zk0OoC9ARo1.jpg" },
  { title: "Les Gardiens de la Galaxie", year: 2014, type: "movie", phase: "Phase 2", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/118340", poster: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg" },
  { title: "Les Gardiens de la Galaxie Vol. 2", year: 2014, type: "movie", phase: "Phase 2", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/283995", poster: "https://image.tmdb.org/t/p/w500/brgkPEPQJNGLuKRy8omRTcDfDuL.jpg" },
  { title: "Avengers: Age of Ultron", year: 2015, type: "movie", phase: "Phase 2", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/99861", poster: "https://image.tmdb.org/t/p/w500/A0tw88n1byyR2vodhJMlFPQGQgF.jpg" },
  { title: "Ant-Man", year: 2015, type: "movie", phase: "Phase 2", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/102899", poster: "https://image.tmdb.org/t/p/w500/hAH2Rt2WvfMBK2tZDLMNuUTUwxG.jpg" },

  // ═══ PHASE 3 ═══
  { title: "Captain America: Civil War", year: 2016, type: "movie", phase: "Phase 3", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/271110", poster: "https://image.tmdb.org/t/p/w500/i2nc9IAP1xRWoa3MgeR7ldsshkV.jpg" },
  { title: "Black Widow", year: 2016, type: "movie", phase: "Phase 3", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/497698", poster: "https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg" },
  { title: "Black Panther", year: 2016, type: "movie", phase: "Phase 3", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/284054", poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg" },
  { title: "Spider-Man: Homecoming", year: 2016, type: "movie", phase: "Phase 3", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/315635", poster: "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg" },
  { title: "Doctor Strange", year: 2016, type: "movie", phase: "Phase 3", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/284052", poster: "https://image.tmdb.org/t/p/w500/7wZ7mx7tY5SgflQKuJmQvwu3wGm.jpg" },
  { title: "Thor: Ragnarok", year: 2017, type: "movie", phase: "Phase 3", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/284053", poster: "https://image.tmdb.org/t/p/w500/mAA8RXkgF87jSWWMSf6hgLl73mk.jpg" },
  { title: "Ant-Man et la Guêpe", year: 2018, type: "movie", phase: "Phase 3", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/363088", poster: "https://image.tmdb.org/t/p/w500/r3Vapr4sdXOhHBThTNtfuijKe5V.jpg" },
  { title: "Avengers: Infinity War", year: 2018, type: "movie", phase: "Phase 3", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/299536", poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" },
  { title: "Avengers: Endgame", year: 2023, type: "movie", phase: "Phase 3", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/299534", poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },

  // ═══ PHASE 4 ═══
  { title: "Loki Saison 1", year: 2023, type: "series", phase: "Phase 4", earth: "TVA / Hors temps",
    poster: "https://image.tmdb.org/t/p/w500/x3tgUYJNx58xL5WhuV5sDnujKIh.jpg",
    episodes: Array.from({length:6}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/84958/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "WandaVision", year: 2023, type: "series", phase: "Phase 4", earth: "Terre-616",
    poster: "https://image.tmdb.org/t/p/w500/iOaE26zigx4GFBftUdRbD83Mcwe.jpg",
    episodes: Array.from({length:9}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/85271/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "The Falcon and the Winter Soldier", year: 2024, type: "series", phase: "Phase 4", earth: "Terre-616",
    poster: "https://image.tmdb.org/t/p/w500/6NrUwEWDxZI2XffOnw3nuibukmX.jpg",
    episodes: Array.from({length:6}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/88396/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Shang-Chi", year: 2024, type: "movie", phase: "Phase 4", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/566525", poster: "https://image.tmdb.org/t/p/w500/g54eUtuCTAOQaNlVpr7Kpr7sVoH.jpg" },
  { title: "What If...? Saison 1", year: 2024, type: "series", phase: "Phase 4", earth: "Multivers",
    poster: "https://image.tmdb.org/t/p/w500/Wkjg8AxkmnxO9Bph7J3eW9f3ix.jpg",
    episodes: Array.from({length:9}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/91363/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Eternals", year: 2024, type: "movie", phase: "Phase 4", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/524434", poster: "https://image.tmdb.org/t/p/w500/vV7TrS7PNRZJHCxNmiYN1SU7s1w.jpg" },
  { title: "Spider-Man: Far From Home", year: 2024, type: "movie", phase: "Phase 4", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/429617", poster: "https://image.tmdb.org/t/p/w500/9FkewgPxlMPjgKhFN7LaRJEqmCI.jpg" },
  { title: "Spider-Man: No Way Home", year: 2024, type: "movie", phase: "Phase 4", earth: "Terre-616 / Multivers",
    url: "https://heiwastream.fr/watch/movie/634649", poster: "https://image.tmdb.org/t/p/w500/jwfDFqzxBkXC5bERBZrCEfK9iii.jpg" },
  { title: "Hawkeye", year: 2024, type: "series", phase: "Phase 4", earth: "Terre-616",
    poster: "https://image.tmdb.org/t/p/w500/cybZ7FoeBoBJPieKvSp4wh2yCMR.jpg",
    episodes: Array.from({length:6}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/88329/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Doctor Strange 2", year: 2024, type: "movie", phase: "Phase 4", earth: "Terre-616 / Multivers",
    url: "https://heiwastream.fr/watch/movie/453395", poster: "https://image.tmdb.org/t/p/w500/arfzjn1tGvXWwkX7eaGVuXsc0mp.jpg" },
  { title: "Moon Knight", year: 2024, type: "series", phase: "Phase 4", earth: "Terre-616",
    poster: "https://image.tmdb.org/t/p/w500/xrkDlkL6u26DLeBw2Cao8pYtrYH.jpg",
    episodes: Array.from({length:6}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/92749/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Ms. Marvel", year: 2024, type: "series", phase: "Phase 4", earth: "Terre-616",
    poster: "https://image.tmdb.org/t/p/w500/3x1eRyuz2NOOSXODDcDl9EjGRQ.jpg",
    episodes: Array.from({length:6}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/92782/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Thor: Love and Thunder", year: 2024, type: "movie", phase: "Phase 4", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/616037", poster: "https://image.tmdb.org/t/p/w500/kSMarEm3ESOOr11dzsep2RZ1ClD.jpg" },
  { title: "She-Hulk", year: 2024, type: "series", phase: "Phase 4", earth: "Terre-616",
    poster: "https://image.tmdb.org/t/p/w500/poWy1hDzaIFv6UaYtFDNcNfiM2C.jpg",
    episodes: Array.from({length:9}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/92783/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Black Panther: Wakanda Forever", year: 2024, type: "movie", phase: "Phase 4", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/505642", poster: "https://image.tmdb.org/t/p/w500/rNTKgJdJ8tyfpiUug5ittECK8CS.jpg" },
  { title: "Werewolf by Night", year: 2024, type: "movie", phase: "Phase 4", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/894205", poster: "https://image.tmdb.org/t/p/w500/5p6Q5dsqgT7dknImjtoRvNx50k9.jpg" },
  { title: "Les Gardiens: Joyeuses Fêtes", year: 2024, type: "movie", phase: "Phase 4", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/774752", poster: "https://image.tmdb.org/t/p/w500/cF3E6CrCm3NUy5PDRBbGyXRChYb.jpg" },

  // ═══ PHASE 5 ═══
  { title: "Ant-Man 3: Quantumania", year: 2025, type: "movie", phase: "Phase 5", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/640146", poster: "https://image.tmdb.org/t/p/w500/2hq8EKF6kaUyOxB9KhmIb5JUxEe.jpg" },
  { title: "Secret Invasion", year: 2025, type: "series", phase: "Phase 5", earth: "Terre-616",
    poster: "https://image.tmdb.org/t/p/w500/AbqvJTbFEOmL8vHk54lVolqQg8Y.jpg",
    episodes: Array.from({length:6}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/114472/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Les Gardiens de la Galaxie Vol. 3", year: 2025, type: "movie", phase: "Phase 5", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/447365", poster: "https://image.tmdb.org/t/p/w500/dnyQnKSSqQ8aOEMiE5hYDNJO4dE.jpg" },
  { title: "Loki Saison 2", year: 2023, type: "series", phase: "Phase 5", earth: "TVA / Hors temps",
    poster: "https://image.tmdb.org/t/p/w500/tGdaskDMBdGonOnuvkrAP9sd0mt.jpg",
    episodes: Array.from({length:6}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/84958/s02e${String(i+1).padStart(2,'0')}`]) },
  { title: "What If...? Saison 2", year: 2024, type: "series", phase: "Phase 5", earth: "Multivers",
    poster: "https://image.tmdb.org/t/p/w500/5oYadd4vILTIYs7j3H9pgWIvbhI.jpg",
    episodes: Array.from({length:9}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/91363/s02e${String(i+1).padStart(2,'0')}`]) },
  { title: "Echo", year: 2025, type: "series", phase: "Phase 5", earth: "Terre-616",
    poster: "https://image.tmdb.org/t/p/w500/g7Y8pX0yndEpGAa0v4ZGpGuMrF0.jpg",
    episodes: Array.from({length:5}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/122226/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "The Marvels", year: 2025, type: "movie", phase: "Phase 5", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/609681", poster: "https://image.tmdb.org/t/p/w500/mqAQO6j5gkq6iwCXNbXpzf0RXBU.jpg" },
  { title: "Agatha All Along", year: 2025, type: "series", phase: "Phase 5", earth: "Terre-616",
    poster: "https://image.tmdb.org/t/p/w500/mGsxKwXUjojitRv2E9qMTbxbBRd.jpg",
    episodes: Array.from({length:9}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/138501/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Deadpool & Wolverine", year: 2024, type: "movie", phase: "Phase 5", earth: "Terre-10005 / 616",
    url: "https://heiwastream.fr/watch/movie/533535", poster: "https://image.tmdb.org/t/p/w500/7CtRdKd5hQPB2b1apKCqxxQUKSf.jpg" },
  { title: "Daredevil: Born Again S1", year: 2025, type: "series", phase: "Phase 5", earth: "Terre-616",
    poster: "https://image.tmdb.org/t/p/w500/9ERtLvFN1nFCabGaFkC6tiroglm.jpg",
    episodes: Array.from({length:9}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/202555/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Captain America: Brave New World", year: 2025, type: "movie", phase: "Phase 5", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/822119", poster: "https://image.tmdb.org/t/p/w500/wDRXmiAEJdhNIcuetM4016fOCx8.jpg" },
  { title: "Thunderbolts*", year: 2025, type: "movie", phase: "Phase 5", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/986056", poster: "https://image.tmdb.org/t/p/w500/zctISSBEZRgVQPG178HqRJMnc4x.jpg" },
  { title: "Daredevil: Born Again S2", year: 2026, type: "series", phase: "Phase 5", earth: "Terre-616",
    poster: "https://image.tmdb.org/t/p/w500/kNOOBUEKnivdnWsxbtKnG69VMwx.jpg",
    episodes: Array.from({length:8}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/202555/s02e${String(i+1).padStart(2,'0')}`]) },

  // ═══ PHASE 6 ═══
  { title: "The Fantastic Four: First Steps", year: 2025, type: "movie", phase: "Phase 6", earth: "À venir",
    url: "https://heiwastream.fr/watch/movie/617126", poster: "https://image.tmdb.org/t/p/w500/rNc4KARs6fVa4axzvuv3NfUiNy1.jpg" },
  { title: "Spider-Man: Brand New Day", year: 2026, type: "movie", phase: "Phase 6", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/969681", poster: "https://image.tmdb.org/t/p/w500/tV712n7bMaRuaKyltFl65HPNRiP.jpg" },
  { title: "Avengers: Doomsday", year: 2026, type: "movie", phase: "Phase 6", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/1003596", poster: "https://image.tmdb.org/t/p/w500/bph5UiAOKLLjla10YuCyKWfKYGG.jpg", note: "pas encore disponible" },
];

// ─── PLACEHOLDER FIABLE (remplace via.placeholder.com qui est mort) ───
function ph(title){
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='450'><rect width='100%' height='100%' fill='#0b0b12'/><text x='50%' y='47%' fill='#e62429' font-family='Arial, sans-serif' font-size='22' font-weight='bold' text-anchor='middle'>${title}</text></svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

// ─── RENDU ───
function render(filter = "all") {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  const filtered = filter === "all" ? MARVEL : MARVEL.filter(m => m.type === filter);

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => handleClick(item);

    const img = document.createElement("img");
    img.src = item.poster;
    img.alt = item.title;
    img.loading = "lazy";
    img.onerror = () => { img.onerror = null; img.src = ph(item.title); };
    card.appendChild(img);

    const overlay = document.createElement("div");
    overlay.className = "card-overlay";
    overlay.innerHTML = `
      <div class="card-type">${item.type === "movie" ? "Film" : "Série"}</div>
      <div class="card-phase">${item.phase}</div>
      <div class="card-earth">${item.earth}</div>
      <div class="card-title">${item.title} (${item.year})</div>
      ${item.note ? `<div class="card-note">${item.note}</div>` : ""}
    `;
    card.appendChild(overlay);
    grid.appendChild(card);
  });
}

function handleClick(item) {
  if (item.type === "movie") {
    if (!item.url) {
      alert("Ce film n'est pas encore disponible.");
      return;
    }
    window.open(item.url, "_blank");
  } else {
    openModal(item);
  }
}

function openModal(item) {
  document.getElementById("modalTitle").textContent = `${item.title} — ${item.phase} — ${item.earth}`;
  const list = document.getElementById("episodesList");
  list.innerHTML = "";

  item.episodes.forEach(ep => {
    const btn = document.createElement("button");
    btn.className = "episode-btn";
    btn.textContent = ep[0];
    btn.onclick = () => window.open(ep[1], "_blank");
    list.appendChild(btn);
  });

  document.getElementById("modal").classList.add("active");
}

document.getElementById("closeModal").onclick = () => {
  document.getElementById("modal").classList.remove("active");
};

document.getElementById("modal").onclick = (e) => {
  if (e.target.id === "modal") {
    document.getElementById("modal").classList.remove("active");
  }
};

// Filtres
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    render(btn.dataset.filter);
  };
});

// Init
render();

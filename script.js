const MARVEL = [
  // ═══ PHASE 1 ═══
  { title: "Agent Carter S1", year: 1946, type: "series", phase: "Phase 1", earth: "Terre-616",
    poster: "https://image.tmdb.org/t/p/w500/vElAbFDFXDG9ehuFyAeE6bnAd4U.jpg",
    episodes: Array.from({length:8}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/61550/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Agent Carter S2", year: 1947, type: "series", phase: "Phase 1", earth: "Terre-616",
    poster: "https://image.tmdb.org/t/p/w500/4WY2QhfGjVrsGNpdPghYAWitCHT.jpg",
    episodes: Array.from({length:10}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/61550/s02e${String(i+1).padStart(2,'0')}`]) },
  { title: "Captain America: First Avenger", year: 1942, type: "movie", phase: "Phase 1", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/1771", poster: "https://i.ebayimg.com/images/g/hM4AAOSwcw1jO34E/s-l1200.jpg" },
  { title: "Captain Marvel", year: 1995, type: "movie", phase: "Phase 3", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/299537", poster: "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg" },
  { title: "Iron Man", year: 2010, type: "movie", phase: "Phase 1", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/1726", poster: "https://image.tmdb.org/t/p/w500/78lP1UrC4Q7vRysCra6zGm8UxwH.jpg" },
  { title: "Iron Man 2", year: 2010, type: "movie", phase: "Phase 1", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/10138", poster: "https://image.tmdb.org/t/p/w500/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg" },
  { title: "The Incredible Hulk", year: 2010, type: "movie", phase: "Phase 1", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/1724", poster: "https://image.tmdb.org/t/p/w500/xtWf4BgRFTqznSb4WVRVYRbpPBR.jpg" },
  { title: "Thor", year: 2011, type: "movie", phase: "Phase 1", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/10195", poster: "https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg" },
  { title: "The Avengers", year: 2012, type: "movie", phase: "Phase 1", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/24428", poster: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg" },

  // ═══ PHASE 2 ═══
  { title: "Iron Man 3", year: 2012, type: "movie", phase: "Phase 2", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/68721", poster: "https://image.tmdb.org/t/p/w500/qhPtAc1TKbMPqN0XH8l5tk4JOs1.jpg" },
  { title: "Thor: The Dark World", year: 2013, type: "movie", phase: "Phase 2", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/76338", poster: "https://image.tmdb.org/t/p/w500/bnXetFeM1uCm7ln2yO3aAJLXvwR.jpg" },
  { title: "Captain America: The Winter Soldier", year: 2014, type: "movie", phase: "Phase 2", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/100402", poster: "https://image.tmdb.org/t/p/w500/tVFRpFw3xTedgPGqxW0POI8aCxO.jpg" },
  { title: "Les Gardiens de la Galaxie", year: 2014, type: "movie", phase: "Phase 2", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/118340", poster: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg" },
  { title: "Les Gardiens de la Galaxie Vol. 2", year: 2014, type: "movie", phase: "Phase 2", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/283995", poster: "https://image.tmdb.org/t/p/w500/aJn9Xees0J8vnQOUculK9KG3V1j.jpg" },
  { title: "Avengers: Age of Ultron", year: 2015, type: "movie", phase: "Phase 2", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/99861", poster: "https://image.tmdb.org/t/p/w500/4ssDuvEDkSWeiK2jLc9ULC8WvA7.jpg" },
  { title: "Ant-Man", year: 2015, type: "movie", phase: "Phase 2", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/102899", poster: "https://image.tmdb.org/t/p/w500/D6e8RJf2qUstnfXslq4PULqFN9.jpg" },

  // ═══ PHASE 3 ═══
  { title: "Captain America: Civil War", year: 2016, type: "movie", phase: "Phase 3", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/271110", poster: "https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKU1k2UaH8R.jpg" },
  { title: "Black Widow", year: 2016, type: "movie", phase: "Phase 3", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/497698", poster: "https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg" },
  { title: "Black Panther", year: 2016, type: "movie", phase: "Phase 3", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/284054", poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg" },
  { title: "Spider-Man: Homecoming", year: 2016, type: "movie", phase: "Phase 3", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/315635", poster: "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg" },
  { title: "Doctor Strange", year: 2016, type: "movie", phase: "Phase 3", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/284052", poster: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjIn9DpNpDmU1.jpg" },
  { title: "Thor: Ragnarok", year: 2017, type: "movie", phase: "Phase 3", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/284053", poster: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpBX2PV4QH1N3.jpg" },
  { title: "Ant-Man et la Guêpe", year: 2018, type: "movie", phase: "Phase 3", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/363088", poster: "https://image.tmdb.org/t/p/w500/ein1jYc7OTLV5OjOy6ZmQp22hQC.jpg" },
  { title: "Avengers: Infinity War", year: 2018, type: "movie", phase: "Phase 3", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/299536", poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" },
  { title: "Avengers: Endgame", year: 2023, type: "movie", phase: "Phase 3", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/299534", poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },

  // ═══ PHASE 4 ═══
  { title: "WandaVision", year: 2023, type: "series", phase: "Phase 4", earth: "Terre-616",
    poster: "https://image.tmdb.org/t/p/w500/glE2PZMgAtXaZ5C1CqBqQ3jTnWl.jpg",
    episodes: Array.from({length:9}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/85271/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "The Falcon and the Winter Soldier", year: 2024, type: "series", phase: "Phase 4", earth: "Terre-616",
    poster: "https://image.tmdb.org/t/p/w500/6kbAMLteGO8yyewYau6bJ683sw7.jpg",
    episodes: Array.from({length:6}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/88396/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Shang-Chi", year: 2024, type: "movie", phase: "Phase 4", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/566525", poster: "https://image.tmdb.org/t/p/w500/xYn1gLB6FfkrcJAOevYTuFDsU3D.jpg" },
  { title: "Loki Saison 1", year: 2023, type: "series", phase: "Phase 4", earth: "TVA / Hors temps",
    poster: "https://image.tmdb.org/t/p/w500/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg",
    episodes: Array.from({length:6}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/84958/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Spider-Man: Far From Home", year: 2024, type: "movie", phase: "Phase 4", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/429617", poster: "https://image.tmdb.org/t/p/w500/4q2NNj4S5dG2RLFgnCpGSllvx0g.jpg" },
  { title: "What If...? Saison 1", year: 2024, type: "series", phase: "Phase 4", earth: "Multivers",
    poster: "https://image.tmdb.org/t/p/w500/lDz2Nks5HYP8H4WCR0aSZxmrOiS.jpg",
    episodes: Array.from({length:9}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/91363/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Eternals", year: 2024, type: "movie", phase: "Phase 4", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/524434", poster: "https://image.tmdb.org/t/p/w500/lFByFSLV5WDJEv3K7ne5cwKbGiG.jpg" },
  { title: "Spider-Man: No Way Home", year: 2024, type: "movie", phase: "Phase 4", earth: "Terre-616 / Multivers",
    url: "https://heiwastream.fr/watch/movie/634649", poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLnz.jpg" },
  { title: "Hawkeye", year: 2024, type: "series", phase: "Phase 4", earth: "Terre-616",
    poster: "https://image.tmdb.org/t/p/w500/511BJMihUpomLwrHq5doHBbjISv.jpg",
    episodes: Array.from({length:6}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/88329/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Doctor Strange 2", year: 2024, type: "movie", phase: "Phase 4", earth: "Terre-616 / Multivers",
    url: "https://heiwastream.fr/watch/movie/453395", poster: "https://image.tmdb.org/t/p/w500/wRnbWt44nKjsFPrqSmwYki5vZtF.jpg" },
  { title: "Moon Knight", year: 2024, type: "series", phase: "Phase 4", earth: "Terre-616",
    poster: "https://image.tmdb.org/t/p/w500/x6FsYvt33846IQnDSFxla9j0RX8.jpg",
    episodes: Array.from({length:6}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/92749/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Ms. Marvel", year: 2024, type: "series", phase: "Phase 4", earth: "Terre-616",
    poster: "https://image.tmdb.org/t/p/w500/ekUpATJ2uAM5RKO2wb4vQISA6wG.jpg",
    episodes: Array.from({length:6}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/92782/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Thor: Love and Thunder", year: 2024, type: "movie", phase: "Phase 4", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/616037", poster: "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg" },
  { title: "She-Hulk", year: 2024, type: "series", phase: "Phase 4", earth: "Terre-616",
    poster: "https://image.tmdb.org/t/p/w500/hJgBq1fmDMXMnJefcpVQ5IDD4jD.jpg",
    episodes: Array.from({length:9}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/92783/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Black Panther: Wakanda Forever", year: 2024, type: "movie", phase: "Phase 4", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/505642", poster: "https://image.tmdb.org/t/p/w500/svbYmtwQoCT6B3UoYFQkdc5aFud.jpg" },
  { title: "Werewolf by Night", year: 2024, type: "movie", phase: "Phase 4", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/894205", poster: "https://image.tmdb.org/t/p/w500/7WEPLoR4jAkOyUOAu26wOeLzCwM.jpg" },
  { title: "Les Gardiens: Joyeuses Fêtes", year: 2024, type: "movie", phase: "Phase 4", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/774752", poster: "https://image.tmdb.org/t/p/w500/hOVQw6iQFTBiLk6tlLCrtsj6Wzj.jpg" },

  // ═══ PHASE 5 ═══
  { title: "Ant-Man 3: Quantumania", year: 2025, type: "movie", phase: "Phase 5", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/640146", poster: "https://image.tmdb.org/t/p/w500/ngl2FKBlU2a8B0nlSYx9sZBvBSw.jpg" },
  { title: "Secret Invasion", year: 2025, type: "series", phase: "Phase 5", earth: "Terre-616",
    poster: "https://image.tmdb.org/t/p/w500/2j1FziYPHhFzKqNqCBn9U7KjARu.jpg",
    episodes: Array.from({length:6}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/114472/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Les Gardiens de la Galaxie Vol. 3", year: 2025, type: "movie", phase: "Phase 5", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/447365", poster: "https://image.tmdb.org/t/p/w500/5aWuG6N6tBY1mLVmQ4b4WTDBF8G.jpg" },
  { title: "Loki Saison 2", year: 2023, type: "series", phase: "Phase 5", earth: "TVA / Hors temps",
    poster: "https://image.tmdb.org/t/p/w500/q5vQqOYnVBF7qBZTZoRsa7BQ5Nl.jpg",
    episodes: Array.from({length:6}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/84958/s02e${String(i+1).padStart(2,'0')}`]) },
  { title: "What If...? Saison 2", year: 2024, type: "series", phase: "Phase 5", earth: "Multivers",
    poster: "https://image.tmdb.org/t/p/w500/4pFk8xEtHpDRv6A7Y78ldxYOmVz.jpg",
    episodes: Array.from({length:9}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/91363/s02e${String(i+1).padStart(2,'0')}`]) },
  { title: "Echo", year: 2025, type: "series", phase: "Phase 5", earth: "Terre-616",
    poster: "https://image.tmdb.org/t/p/w500/wC77S1MmKSGYLuebVZ1VEOgCJIz.jpg",
    episodes: Array.from({length:5}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/122226/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "The Marvels", year: 2025, type: "movie", phase: "Phase 5", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/609681", poster: "https://image.tmdb.org/t/p/w500/Ag3D9qXjhJ2xkr7iPi9K0We2HhD.jpg" },
  { title: "Agatha All Along", year: 2025, type: "series", phase: "Phase 5", earth: "Terre-616",
    poster: "https://image.tmdb.org/t/p/w500/3z20ffSwTbEfEKt5gfmx0Rm3ZDR.jpg",
    episodes: Array.from({length:9}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/138501/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Deadpool & Wolverine", year: 2024, type: "movie", phase: "Phase 5", earth: "Terre-10005 / 616",
    url: "https://heiwastream.fr/watch/movie/533535", poster: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg" },
  { title: "Daredevil: Born Again", year: 2025, type: "series", phase: "Phase 5", earth: "Terre-616",
    poster: "https://image.tmdb.org/t/p/w500/cbOOHuurtiG7XluczaWr0y9SO1q.jpg",
    episodes: Array.from({length:9}, (_,i) => [`Ép. ${i+1}`, `https://heiwastream.fr/watch/tv/202555/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Captain America: Brave New World", year: 2025, type: "movie", phase: "Phase 5", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/822119", poster: "https://image.tmdb.org/t/p/w500/pzLgMUBXSPwlLmSMgDEgkaCr5N1.jpg" },
  { title: "Thunderbolts*", year: 2025, type: "movie", phase: "Phase 5", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/986056", poster: "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg" },

  // ═══ PHASE 6 ═══
  { title: "The Fantastic Four: First Steps", year: 2025, type: "movie", phase: "Phase 6", earth: "À venir",
    url: "https://heiwastream.fr/watch/movie/617126", poster: "https://image.tmdb.org/t/p/w500/h7Dp7QGLk5O9r8LnKoB2NzQmk5.jpg" },
  { title: "Spider-Man: Brand New Day", year: 2026, type: "movie", phase: "Phase 6", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/969681", poster: "https://sm.ign.com/ign_fr/image/n/new-spider/new-spider-man-brand-new-day-posters-released_hnq6.jpg", note: "qualité pas encore optimale" },
  { title: "Avengers: Doomsday", year: 2026, type: "movie", phase: "Phase 6", earth: "Terre-616",
    url: "https://heiwastream.fr/watch/movie/1003596", poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", note: "pas encore disponible" },
];

// ─── RENDU ───
function render(filter = "all") {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  const filtered = filter === "all" ? MARVEL : MARVEL.filter(m => m.type === filter);

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => handleClick(item);

    card.innerHTML = `
      <img src="${item.poster}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/300x450/111/e62429?text=${encodeURIComponent(item.title)}'">
      <div class="card-overlay">
        <div class="card-type">${item.type === "movie" ? "Film" : "Série"}</div>
        <div class="card-phase">${item.phase}</div>
        <div class="card-earth">${item.earth}</div>
        <div class="card-title">${item.title} (${item.year})</div>
        ${item.note ? `<div class="card-note">${item.note}</div>` : ""}
      </div>
    `;
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

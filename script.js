const MARVEL = [
  { title: "Iron Man", year: 2008, type: "movie", url: "https://heiwastream.fr/watch/movie/1726", poster: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COAsal4RyPQ.jpg" },
  { title: "L'Incroyable Hulk", year: 2008, type: "movie", url: "https://heiwastream.fr/watch/movie/1724", poster: "https://image.tmdb.org/t/p/w500/gKzYx79y0AQTLM9s0vYk5w1w1g.jpg" },
  { title: "Iron Man 2", year: 2010, type: "movie", url: "https://heiwastream.fr/watch/movie/10138", poster: "https://image.tmdb.org/t/p/w500/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg" },
  { title: "Thor", year: 2011, type: "movie", url: "https://heiwastream.fr/watch/movie/10195", poster: "https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg" },
  { title: "Captain America: First Avenger", year: 2011, type: "movie", url: "https://heiwastream.fr/watch/movie/1771", poster: "https://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpOjqDZX1S.jpg" },
  { title: "Avengers", year: 2012, type: "movie", url: "https://heiwastream.fr/watch/movie/24428", poster: "https://image.tmdb.org/t/p/w500/RYMX2wcKceNhds7az3t43yQ0q.jpg" },
  { title: "Iron Man 3", year: 2013, type: "movie", url: "https://heiwastream.fr/watch/movie/68721", poster: "https://image.tmdb.org/t/p/w500/1Ilv6ryH7ySdO7mBSHEqOgY3p.jpg" },
  { title: "Thor: Le Monde des ténèbres", year: 2013, type: "movie", url: "https://heiwastream.fr/watch/movie/76338", poster: "https://image.tmdb.org/t/p/w500/wp6OxE4poJ734RYl5X5Q7sB6m6.jpg" },
  { title: "Captain America: Le Soldat de l'hiver", year: 2014, type: "movie", url: "https://heiwastream.fr/watch/movie/100402", poster: "https://image.tmdb.org/t/p/w500/tVFRpFcl5KtK7AYqA4wWAU9HwF6.jpg" },
  { title: "Les Gardiens de la Galaxie", year: 2014, type: "movie", url: "https://heiwastream.fr/watch/movie/118340", poster: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg" },
  { title: "Avengers : L'Ère d'Ultron", year: 2015, type: "movie", url: "https://heiwastream.fr/watch/movie/99861", poster: "https://image.tmdb.org/t/p/w500/4ssDuvEDmH5h9p5p3p5p5p5p5p5.jpg" },
  { title: "Ant-Man", year: 2015, type: "movie", url: "https://heiwastream.fr/watch/movie/102899", poster: "https://image.tmdb.org/t/p/w500/rQRnRYA2iFbkByjQw4O8p1Y6p5.jpg" },
  { title: "Captain America: Civil War", year: 2016, type: "movie", url: "https://heiwastream.fr/watch/movie/271110", poster: "https://image.tmdb.org/t/p/w500/rAI1x2R1p4p5p5p5p5p5p5p5p5.jpg" },
  { title: "Doctor Strange", year: 2016, type: "movie", url: "https://heiwastream.fr/watch/movie/284052", poster: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDyyCb7C2k8v1s.jpg" },
  { title: "Les Gardiens de la Galaxie Vol. 2", year: 2017, type: "movie", url: "https://heiwastream.fr/watch/movie/283995", poster: "https://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9axM4qJZm6s.jpg" },
  { title: "Spider-Man: Homecoming", year: 2017, type: "movie", url: "https://heiwastream.fr/watch/movie/315635", poster: "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg" },
  { title: "Thor: Ragnarok", year: 2017, type: "movie", url: "https://heiwastream.fr/watch/movie/284053", poster: "https://image.tmdb.org/t/p/w500/rzKwC6p5uQJ5p5p5p5p5p5p5p5.jpg" },
  { title: "Black Panther", year: 2018, type: "movie", url: "https://heiwastream.fr/watch/movie/284054", poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg" },
  { title: "Avengers: Infinity War", year: 2018, type: "movie", url: "https://heiwastream.fr/watch/movie/299536", poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" },
  { title: "Ant-Man et la Guêpe", year: 2018, type: "movie", url: "https://heiwastream.fr/watch/movie/363088", poster: "https://image.tmdb.org/t/p/w500/eSKr5Fl1MV0V6o5p5p5p5p5p5p5.jpg" },
  { title: "Captain Marvel", year: 2019, type: "movie", url: "https://heiwastream.fr/watch/movie/299537", poster: "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsFeT7R4p5.jpg" },
  { title: "Avengers: Endgame", year: 2019, type: "movie", url: "https://heiwastream.fr/watch/movie/299534", poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
  { title: "Spider-Man: Far From Home", year: 2019, type: "movie", url: "https://heiwastream.fr/watch/movie/429617", poster: "https://image.tmdb.org/t/p/w500/4q2NNj4S5dE5p5p5p5p5p5p5p5.jpg" },

  // Séries
  { title: "WandaVision", year: 2021, type: "series", poster: "https://image.tmdb.org/t/p/w500/fA0tquQjl9p5p5p5p5p5p5p5p5.jpg",
    episodes: Array.from({length:9}, (_,i) => [`Épisode ${i+1}`, `https://heiwastream.fr/watch/tv/85271/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Falcon et le Soldat de l'hiver", year: 2021, type: "series", poster: "https://image.tmdb.org/t/p/w500/6kbAMLteGO8yyewYau6bJ829fw4.jpg",
    episodes: Array.from({length:6}, (_,i) => [`Épisode ${i+1}`, `https://heiwastream.fr/watch/tv/88396/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Loki Saison 1", year: 2021, type: "series", poster: "https://image.tmdb.org/t/p/w500/kEl2t3OhXc3Zb9FMuZNXFo3PTUf.jpg",
    episodes: Array.from({length:6}, (_,i) => [`Épisode ${i+1}`, `https://heiwastream.fr/watch/tv/84958/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Black Widow", year: 2021, type: "movie", url: "https://heiwastream.fr/watch/movie/497698", poster: "https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg" },
  { title: "What If...? S1", year: 2021, type: "series", poster: "https://image.tmdb.org/t/p/w500/lztz5XBMGJtsxXb9p5p5p5p5p5.jpg",
    episodes: Array.from({length:9}, (_,i) => [`Épisode ${i+1}`, `https://heiwastream.fr/watch/tv/91363/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Shang-Chi", year: 2021, type: "movie", url: "https://heiwastream.fr/watch/movie/566525", poster: "https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiJJr5p5p5.jpg" },
  { title: "Eternals", year: 2021, type: "movie", url: "https://heiwastream.fr/watch/movie/524434", poster: "https://image.tmdb.org/t/p/w500/6AdXwFNnljVKP5p5p5p5p5p5p5.jpg" },
  { title: "Spider-Man: No Way Home", year: 2021, type: "movie", url: "https://heiwastream.fr/watch/movie/634649", poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6h2p5p5.jpg" },
  { title: "Hawkeye", year: 2021, type: "series", poster: "https://image.tmdb.org/t/p/w500/6L8u0qw5p5p5p5p5p5p5p5p5p5.jpg",
    episodes: Array.from({length:6}, (_,i) => [`Épisode ${i+1}`, `https://heiwastream.fr/watch/tv/88329/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Moon Knight", year: 2022, type: "series", poster: "https://image.tmdb.org/t/p/w500/x6FsYvt33846IQnDSFxla9j0RX8.jpg",
    episodes: Array.from({length:6}, (_,i) => [`Épisode ${i+1}`, `https://heiwastream.fr/watch/tv/92749/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Doctor Strange 2", year: 2022, type: "movie", url: "https://heiwastream.fr/watch/movie/453395", poster: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmWrPHXSqtY5p5p5p5.jpg" },
  { title: "Ms. Marvel", year: 2022, type: "series", poster: "https://image.tmdb.org/t/p/w500/3Rfvhy1Nl6sSGJwyjb0QiZz5p5.jpg",
    episodes: Array.from({length:6}, (_,i) => [`Épisode ${i+1}`, `https://heiwastream.fr/watch/tv/92782/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Thor: Love and Thunder", year: 2022, type: "movie", url: "https://heiwastream.fr/watch/movie/616037", poster: "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg" },
  { title: "She-Hulk", year: 2022, type: "series", poster: "https://image.tmdb.org/t/p/w500/5p5p5p5p5p5p5p5p5p5p5p5p5.jpg",
    episodes: Array.from({length:9}, (_,i) => [`Épisode ${i+1}`, `https://heiwastream.fr/watch/tv/92783/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Werewolf by Night", year: 2022, type: "movie", url: "https://heiwastream.fr/watch/movie/894205", poster: "https://image.tmdb.org/t/p/w500/jVinp5p5p5p5p5p5p5p5p5p5p5.jpg" },
  { title: "Black Panther: Wakanda Forever", year: 2022, type: "movie", url: "https://heiwastream.fr/watch/movie/505642", poster: "https://image.tmdb.org/t/p/w500/sv1xJUlaQM8oR5p5p5p5p5p5p5.jpg" },
  { title: "Ant-Man et la Guêpe: Quantumania", year: 2023, type: "movie", url: "https://heiwastream.fr/watch/movie/640146", poster: "https://image.tmdb.org/t/p/w500/qnqGbB5p5p5p5p5p5p5p5p5p5.jpg" },
  { title: "Les Gardiens de la Galaxie Vol. 3", year: 2023, type: "movie", url: "https://heiwastream.fr/watch/movie/447365", poster: "https://image.tmdb.org/t/p/w500/5YZbUmjbMa3Clfj5p5p5p5p5p5.jpg" },
  { title: "Secret Invasion", year: 2023, type: "series", poster: "https://image.tmdb.org/t/p/w500/fA0tquQjl9p5p5p5p5p5p5p5p5.jpg",
    episodes: Array.from({length:6}, (_,i) => [`Épisode ${i+1}`, `https://heiwastream.fr/watch/tv/114472/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Loki Saison 2", year: 2023, type: "series", poster: "https://image.tmdb.org/t/p/w500/kEl2t3OhXc3Zb9FMuZNXFo3PTUf.jpg",
    episodes: Array.from({length:6}, (_,i) => [`Épisode ${i+1}`, `https://heiwastream.fr/watch/tv/84958/s02e${String(i+1).padStart(2,'0')}`]) },
  { title: "The Marvels", year: 2023, type: "movie", url: "https://heiwastream.fr/watch/movie/609681", poster: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmWrPHXSqtY5p5p5p5.jpg" },
  { title: "What If...? S2", year: 2023, type: "series", poster: "https://image.tmdb.org/t/p/w500/lztz5XBMGJtsxXb9p5p5p5p5p5.jpg",
    episodes: Array.from({length:9}, (_,i) => [`Épisode ${i+1}`, `https://heiwastream.fr/watch/tv/91363/s02e${String(i+1).padStart(2,'0')}`]) },
  { title: "Echo", year: 2024, type: "series", poster: "https://image.tmdb.org/t/p/w500/3Rfvhy1Nl6sSGJwyjb0QiZz5p5.jpg",
    episodes: Array.from({length:5}, (_,i) => [`Épisode ${i+1}`, `https://heiwastream.fr/watch/tv/122226/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Deadpool & Wolverine", year: 2024, type: "movie", url: "https://heiwastream.fr/watch/movie/533535", poster: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg" },
  { title: "Captain America: Brave New World", year: 2025, type: "movie", url: "https://heiwastream.fr/watch/movie/822119", poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6h2p5p5.jpg" },
  { title: "Thunderbolts*", year: 2025, type: "movie", url: "https://heiwastream.fr/watch/movie/986056", poster: "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg" },
  { title: "The Fantastic Four: First Steps", year: 2025, type: "movie", url: "https://heiwastream.fr/watch/movie/617126", poster: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmWrPHXSqtY5p5p5p5.jpg" },
  { title: "Spider-Man: Brand New Day", year: 2026, type: "movie", url: "https://heiwastream.fr/watch/movie/969681", poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6h2p5p5.jpg", note: "qualité pas encore optimale" },
  { title: "Avengers: Doomsday", year: 2026, type: "movie", url: null, poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", note: "pas encore disponible" },
];

// Rendu des cartes
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
  document.getElementById("modalTitle").textContent = item.title;
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
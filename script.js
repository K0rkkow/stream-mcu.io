const MARVEL = [
  { title: "Iron Man", year: 2008, type: "movie", url: "https://heiwastream.fr/watch/movie/1726", poster: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg" },
  { title: "L'Incroyable Hulk", year: 2008, type: "movie", url: "https://heiwastream.fr/watch/movie/1724", poster: "https://fr.web.img2.acsta.net/medias/nmedia/18/65/69/21/18949753.jpg" },
  { title: "Iron Man 2", year: 2010, type: "movie", url: "https://heiwastream.fr/watch/movie/10138", poster: "https://image.tmdb.org/t/p/w500/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg" },
  { title: "Thor", year: 2011, type: "movie", url: "https://heiwastream.fr/watch/movie/10195", poster: "https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg" },
  { title: "Captain America: First Avenger", year: 2011, type: "movie", url: "https://heiwastream.fr/watch/movie/1771", poster: "https://i.ebayimg.com/images/g/hM4AAOSwcw1jO34E/s-l1200.jpg" },
  { title: "Avengers", year: 2012, type: "movie", url: "https://heiwastream.fr/watch/movie/24428", poster: "https://fr.web.img3.acsta.net/medias/nmedia/18/85/31/58/20042068.jpg" },
  { title: "Iron Man 3", year: 2013, type: "movie", url: "https://heiwastream.fr/watch/movie/68721", poster: "https://fr.web.img5.acsta.net/medias/nmedia/18/91/08/37/20508296.jpg" },
  { title: "Thor: Le Monde des ténèbres", year: 2013, type: "movie", url: "https://heiwastream.fr/watch/movie/76338", poster: "https://static.wikia.nocookie.net/marvelstudios/images/4/40/Thor_affiche_def.jpg/revision/latest?cb=20151124091816&path-prefix=fr" },
  { title: "Captain America: Le Soldat de l'hiver", year: 2014, type: "movie", url: "https://heiwastream.fr/watch/movie/100402", poster: "https://fr.web.img6.acsta.net/pictures/14/01/31/17/06/486036.jpg" },
  { title: "Les Gardiens de la Galaxie", year: 2014, type: "movie", url: "https://heiwastream.fr/watch/movie/118340", poster: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg" },
  { title: "Avengers : L'Ère d'Ultron", year: 2015, type: "movie", url: "https://heiwastream.fr/watch/movie/99861", poster: "https://fr.web.img4.acsta.net/pictures/15/02/24/18/29/161927.jpg" },
  { title: "Ant-Man", year: 2015, type: "movie", url: "https://heiwastream.fr/watch/movie/102899", poster: "https://fr.web.img4.acsta.net/pictures/15/05/06/16/05/305731.jpg" },
  { title: "Captain America: Civil War", year: 2016, type: "movie", url: "https://heiwastream.fr/watch/movie/271110", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_7GbUKW1Z21_YyZXdNIf4KuLDc-y_tW3ChWAoLTaL_A&s=10" },
  { title: "Doctor Strange", year: 2016, type: "movie", url: "https://heiwastream.fr/watch/movie/284052", poster: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Doctor_Strange_%282016_film%29_poster.jpg/250px-Doctor_Strange_%282016_film%29_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" },
  { title: "Les Gardiens de la Galaxie Vol. 2", year: 2017, type: "movie", url: "https://heiwastream.fr/watch/movie/283995", poster: "https://fr.web.img6.acsta.net/c_310_420/pictures/17/03/01/11/10/438835.jpg" },
  { title: "Spider-Man: Homecoming", year: 2017, type: "movie", url: "https://heiwastream.fr/watch/movie/315635", poster: "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg" },
  { title: "Thor: Ragnarok", year: 2017, type: "movie", url: "https://heiwastream.fr/watch/movie/284053", poster: "https://pictures.abebooks.com/isbn/9781785866371-fr.jpg" },
  { title: "Black Panther", year: 2018, type: "movie", url: "https://heiwastream.fr/watch/movie/284054", poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg" },
  { title: "Avengers: Infinity War", year: 2018, type: "movie", url: "https://heiwastream.fr/watch/movie/299536", poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" },
  { title: "Ant-Man et la Guêpe", year: 2018, type: "movie", url: "https://heiwastream.fr/watch/movie/363088", poster: "https://fr.web.img6.acsta.net/pictures/23/01/10/11/56/4907182.jpg" },
  { title: "Captain Marvel", year: 2019, type: "movie", url: "https://heiwastream.fr/watch/movie/299537", poster: "https://i.ebayimg.com/images/g/gVEAAOSws~dcWLVI/s-l1200.jpg" },
  { title: "Avengers: Endgame", year: 2019, type: "movie", url: "https://heiwastream.fr/watch/movie/299534", poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
  { title: "Spider-Man: Far From Home", year: 2019, type: "movie", url: "https://heiwastream.fr/watch/movie/429617", poster: "https://m.media-amazon.com/images/I/91MtLQaRoqL.jpg" },

  // Séries
  { title: "WandaVision", year: 2021, type: "series", poster: "https://www.chroniquedisney.fr/imgDisneyPlus/wandavisionS1/2021-wandavisionS1-00.jpg",
    episodes: Array.from({length:9}, (_,i) => [`Épisode ${i+1}`, `https://heiwastream.fr/watch/tv/85271/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Falcon et le Soldat de l'hiver", year: 2021, type: "series", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNAA65ICHTJw7J0XBYruL24y7bYLIey0NyWbYEgpX0jmjNGQbChIYRu6A&s=10",
    episodes: Array.from({length:6}, (_,i) => [`Épisode ${i+1}`, `https://heiwastream.fr/watch/tv/88396/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Loki Saison 1", year: 2021, type: "series", poster: "https://static.wikia.nocookie.net/marvelstudios/images/6/6f/FD222C89-65F7-40F2-8A9B-AE8966E3BD95.jpeg/revision/latest?cb=20210512161408&path-prefix=fr",
    episodes: Array.from({length:6}, (_,i) => [`Épisode ${i+1}`, `https://heiwastream.fr/watch/tv/84958/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Black Widow", year: 2021, type: "movie", url: "https://heiwastream.fr/watch/movie/497698", poster: "https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg" },
  { title: "What If...? S1", year: 2021, type: "series", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFlNMOgfFbQ4Wg0Xo8XHbdKkV0H2rlUiZ2GAst5oRJww&s=10",
    episodes: Array.from({length:9}, (_,i) => [`Épisode ${i+1}`, `https://heiwastream.fr/watch/tv/91363/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Shang-Chi", year: 2021, type: "movie", url: "https://heiwastream.fr/watch/movie/566525", poster: "https://m.media-amazon.com/images/M/MV5BZmY5MDcyNzAtYzg3MC00MGNlLTg3OGItNmRjYThkZGVlNzAyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { title: "Eternals", year: 2021, type: "movie", url: "https://heiwastream.fr/watch/movie/524434", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQILKmTHv5mR3hoWIzVsM7cxfRhGi_oBnkvAHAySj_Fx6r0DTPKk2qaNME1&s=10" },
  { title: "Spider-Man: No Way Home", year: 2021, type: "movie", url: "https://heiwastream.fr/watch/movie/634649", poster: "https://fr.web.img4.acsta.net/pictures/21/11/16/10/01/4860598.jpg" },
  { title: "Hawkeye", year: 2021, type: "series", poster: "https://m.media-amazon.com/images/I/91-Xo+JO52L._UF1000,1000_QL80_.jpg",
    episodes: Array.from({length:6}, (_,i) => [`Épisode ${i+1}`, `https://heiwastream.fr/watch/tv/88329/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Moon Knight", year: 2022, type: "series", poster: "https://image.tmdb.org/t/p/w500/x6FsYvt33846IQnDSFxla9j0RX8.jpg",
    episodes: Array.from({length:6}, (_,i) => [`Épisode ${i+1}`, `https://heiwastream.fr/watch/tv/92749/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Doctor Strange 2", year: 2022, type: "movie", url: "https://heiwastream.fr/watch/movie/453395", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBjIQAeTh-JW6DSyjSrVWaAxFwEVoo5Fm2bVUV-WYxGDAqmlm2jNOoTw&s=10" },
  { title: "Ms. Marvel", year: 2022, type: "series", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzkU60_TJvD8e_VB0jXNEObe1mAiOTx6_wgGoTLIrB9vKdqYKDk3tV_y0&s=10",
    episodes: Array.from({length:6}, (_,i) => [`Épisode ${i+1}`, `https://heiwastream.fr/watch/tv/92782/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Thor: Love and Thunder", year: 2022, type: "movie", url: "https://heiwastream.fr/watch/movie/616037", poster: "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg" },
  { title: "She-Hulk", year: 2022, type: "series", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFe_p9-ZvXT6gdD5dCyFnWibIex4tIMDacEN1ysBndxB37DLwJDzQItVi&s=10",
    episodes: Array.from({length:9}, (_,i) => [`Épisode ${i+1}`, `https://heiwastream.fr/watch/tv/92783/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Werewolf by Night", year: 2022, type: "movie", url: "https://heiwastream.fr/watch/movie/894205", poster: "https://forum.sanctuary.fr/uploads/default/original/4X/2/5/1/2513ffebe1b8b22f26c923c8821f931e4e9afca5.jpeg" },
  { title: "Black Panther: Wakanda Forever", year: 2022, type: "movie", url: "https://heiwastream.fr/watch/movie/505642", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicvSxpeR2h3ofK_U110YrcemSJthOaBfiek7bvjywjA&s=10" },
  { title: "Ant-Man et la Guêpe: Quantumania", year: 2023, type: "movie", url: "https://heiwastream.fr/watch/movie/640146", poster: "https://www.ecranlarge.com/content/uploads/2023/01/ant-man-et-la-guepe-quantumania-affiche-1463050.jpg" },
  { title: "Les Gardiens de la Galaxie Vol. 3", year: 2023, type: "movie", url: "https://heiwastream.fr/watch/movie/447365", poster: "https://fr.web.img3.acsta.net/c_310_420/pictures/23/02/13/11/43/2783447.jpg" },
  { title: "Secret Invasion", year: 2023, type: "series", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO0-R_FN6pfZhLmamrFDdK31n2D_WFqQ21giaS05mrMghn8uIkh28aTDk&s=10",
    episodes: Array.from({length:6}, (_,i) => [`Épisode ${i+1}`, `https://heiwastream.fr/watch/tv/114472/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Loki Saison 2", year: 2023, type: "series", poster: "https://static.wikia.nocookie.net/marvelstudios/images/e/e4/IM_2888.jpeg/revision/latest?cb=20230731154940&path-prefix=fr",
    episodes: Array.from({length:6}, (_,i) => [`Épisode ${i+1}`, `https://heiwastream.fr/watch/tv/84958/s02e${String(i+1).padStart(2,'0')}`]) },
  { title: "The Marvels", year: 2023, type: "movie", url: "https://heiwastream.fr/watch/movie/609681", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7ZecYhlqz7CL24WQDqn9_vmGnfeIVLBFOy7DSsoa7y393TJNJ4kezdU&s=10" },
  { title: "What If...? S2", year: 2023, type: "series", poster: "https://fr.web.img2.acsta.net/pictures/23/12/18/14/06/4976826.jpg",
    episodes: Array.from({length:9}, (_,i) => [`Épisode ${i+1}`, `https://heiwastream.fr/watch/tv/91363/s02e${String(i+1).padStart(2,'0')}`]) },
  { title: "Echo", year: 2024, type: "series", poster: "https://m.media-amazon.com/images/M/MV5BOGFiYzI1ZDctM2U1Zi00ZWI5LWFiMmQtNGU0NTU5MTg3OWM3XkEyXkFqcGc@._V1_.jpg",
    episodes: Array.from({length:5}, (_,i) => [`Épisode ${i+1}`, `https://heiwastream.fr/watch/tv/122226/s01e${String(i+1).padStart(2,'0')}`]) },
  { title: "Deadpool & Wolverine", year: 2024, type: "movie", url: "https://heiwastream.fr/watch/movie/533535", poster: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg" },
  { title: "Captain America: Brave New World", year: 2025, type: "movie", url: "https://heiwastream.fr/watch/movie/822119", poster: "https://m.media-amazon.com/images/I/81EHzokTAGL._AC_UF1000,1000_QL80_.jpg" },
  { title: "Thunderbolts*", year: 2025, type: "movie", url: "https://heiwastream.fr/watch/movie/986056", poster: "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg" },
  { title: "The Fantastic Four: First Steps", year: 2025, type: "movie", url: "https://heiwastream.fr/watch/movie/617126", poster: "https://fr.web.img4.acsta.net/img/ab/6d/ab6d20991bee70ec660039d1199c8bca.jpg" },
  { title: "Spider-Man: Brand New Day", year: 2026, type: "movie", url: "https://heiwastream.fr/watch/movie/969681", poster: "https://sm.ign.com/ign_fr/image/n/new-spider/new-spider-man-brand-new-day-posters-released_hnq6.jpg", note: "qualité pas encore optimale" },
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
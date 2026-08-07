/* ═════════════════════════════════════════════════════════
   ARCH'VERSE — script.js (catalogue + recherche + rendu)
   ═════════════════════════════════════════════════════════ */

// ─── GÉNÉRATEUR D'ÉPISODES ───
function eps(nb, idTv, saison) {
  return Array.from({ length: nb }, (_, i) => [
    `Ép. ${i + 1}`,
    `https://heiwastream.fr/watch/tv/${idTv}/s${String(saison).padStart(2, "0")}e${String(i + 1).padStart(2, "0")}`
  ]);
}

// ─── DONNÉES : MCU (ordre chronologique) ───
const MARVEL = [
  { title: "Captain America: First Avenger", year: 1942, type: "movie", phase: "Phase 1", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/1771", poster: "https://i.ebayimg.com/images/g/hM4AAOSwcw1jO34E/s-l1200.jpg" },
  { title: "Agent Carter S1", year: 1946, type: "series", phase: "Phase 1", earth: "Pas néssecaire pour MCU", poster: "https://image.tmdb.org/t/p/w500/s9H1SB5lziAdz9prCD08S6zOK2V.jpg", episodes: eps(8, 61550, 1) },
  { title: "Agent Carter S2", year: 1947, type: "series", phase: "Phase 1", earth: "Pas néssecaire pour MCU", poster: "https://image.tmdb.org/t/p/w500/ivkTVyr1xMnkNP37CRCDggvXgnC.jpg", episodes: eps(10, 61550, 2) },
  { title: "Captain Marvel", year: 1995, type: "movie", phase: "Phase 1", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/299537", poster: "https://image.tmdb.org/t/p/w500/aRJAoQ6mqPHAKXjP3CqNyLC8FAh.jpg" },
  { title: "Iron Man", year: 2010, type: "movie", phase: "Phase 1", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/1726", poster: "https://image.tmdb.org/t/p/w500/kNKUCNLu1lZDGAHOBEHxR6psYHx.jpg" },
  { title: "Iron Man 2", year: 2010, type: "movie", phase: "Phase 1", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/10138", poster: "https://image.tmdb.org/t/p/w500/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg" },
  { title: "The Incredible Hulk", year: 2010, type: "movie", phase: "Phase 1", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/1724", poster: "https://image.tmdb.org/t/p/w500/cImKVGUiEnwLsNUyoMA0a0na2y5.jpg" },
  { title: "Thor", year: 2011, type: "movie", phase: "Phase 1", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/10195", poster: "https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg" },
  { title: "The Avengers", year: 2012, type: "movie", phase: "Phase 1", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/24428", poster: "https://image.tmdb.org/t/p/w500/ylsAO88v2tF0iXRFojPa0UaAJf1.jpg" },
  { title: "Iron Man 3", year: 2012, type: "movie", phase: "Phase 2", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/68721", poster: "https://image.tmdb.org/t/p/w500/sE71EBrRMfW0NKMHlXPO55Km88X.jpg" },
  { title: "Thor: The Dark World", year: 2013, type: "movie", phase: "Phase 2", earth: "Pas néssecaire pour MCU", url: "https://heiwastream.fr/watch/movie/76338", poster: "https://image.tmdb.org/t/p/w500/eAIGX0nlwlb5sMb4uDRGNFqMyG9.jpg" },
  { title: "Captain America: The Winter Soldier", year: 2014, type: "movie", phase: "Phase 2", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/100402", poster: "https://image.tmdb.org/t/p/w500/n3Xa8g1sWrUVUal6zk0OoC9ARo1.jpg" },
  { title: "Les Gardiens de la Galaxie", year: 2014, type: "movie", phase: "Phase 2", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/118340", poster: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg" },
  { title: "Les Gardiens de la Galaxie Vol. 2", year: 2014, type: "movie", phase: "Phase 2", earth: "Pas néssecaire pour MCU", url: "https://heiwastream.fr/watch/movie/283995", poster: "https://image.tmdb.org/t/p/w500/brgkPEPQJNGLuKRy8omRTcDfDuL.jpg" },
  { title: "Avengers: Age of Ultron", year: 2015, type: "movie", phase: "Phase 2", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/99861", poster: "https://image.tmdb.org/t/p/w500/A0tw88n1byyR2vodhJMlFPQGQgF.jpg" },
  { title: "Ant-Man", year: 2015, type: "movie", phase: "Phase 2", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/102899", poster: "https://image.tmdb.org/t/p/w500/hAH2Rt2WvfMBK2tZDLMNuUTUwxG.jpg" },
  { title: "Captain America: Civil War", year: 2016, type: "movie", phase: "Phase 3", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/271110", poster: "https://image.tmdb.org/t/p/w500/i2nc9IAP1xRWoa3MgeR7ldsshkV.jpg" },
  { title: "Black Widow", year: 2016, type: "movie", phase: "Phase 3", earth: "Pas néssecaire pour MCU", url: "https://heiwastream.fr/watch/movie/497698", poster: "https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg" },
  { title: "Black Panther", year: 2016, type: "movie", phase: "Phase 3", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/284054", poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg" },
  { title: "Spider-Man: Homecoming", year: 2016, type: "movie", phase: "Phase 3", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/315635", poster: "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg" },
  { title: "Doctor Strange", year: 2016, type: "movie", phase: "Phase 3", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/284052", poster: "https://image.tmdb.org/t/p/w500/7wZ7mx7tY5SgflQKuJmQvwu3wGm.jpg" },
  { title: "Thor: Ragnarok", year: 2017, type: "movie", phase: "Phase 3", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/284053", poster: "https://image.tmdb.org/t/p/w500/mAA8RXkgF87jSWWMSf6hgLl73mk.jpg" },
  { title: "Ant-Man et la Guêpe", year: 2018, type: "movie", phase: "Phase 3", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/363088", poster: "https://image.tmdb.org/t/p/w500/r3Vapr4sdXOhHBThTNtfuijKe5V.jpg" },
  { title: "Avengers: Infinity War", year: 2018, type: "movie", phase: "Phase 3", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/299536", poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" },
  { title: "Avengers: Endgame", year: 2023, type: "movie", phase: "Phase 3", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/299534", poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
  { title: "Loki Saison 1", year: 2023, type: "series", phase: "Phase 4", earth: "TVA / Hors temps", poster: "https://image.tmdb.org/t/p/w500/x3tgUYJNx58xL5WhuV5sDnujKIh.jpg", episodes: eps(6, 84958, 1) },
  { title: "WandaVision", year: 2023, type: "series", phase: "Phase 4", earth: "Terre-616", poster: "https://image.tmdb.org/t/p/w500/iOaE26zigx4GFBftUdRbD83Mcwe.jpg", episodes: eps(9, 85271, 1) },
  { title: "The Falcon and the Winter Soldier", year: 2024, type: "series", phase: "Phase 4", earth: "Terre-616", poster: "https://image.tmdb.org/t/p/w500/6NrUwEWDxZI2XffOnw3nuibukmX.jpg", episodes: eps(6, 88396, 1) },
  { title: "Shang-Chi", year: 2024, type: "movie", phase: "Phase 4", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/566525", poster: "https://image.tmdb.org/t/p/w500/g54eUtuCTAOQaNlVpr7Kpr7sVoH.jpg" },
  { title: "What If...? Saison 1", year: 2024, type: "series", phase: "Phase 4", earth: "Multivers", poster: "https://image.tmdb.org/t/p/w500/Wkjg8AxkmnxO9Bph7J3eW9f3ix.jpg", episodes: eps(9, 91363, 1) },
  { title: "Eternals", year: 2024, type: "movie", phase: "Phase 4", earth: "Pas néssecaire pour MCU", url: "https://heiwastream.fr/watch/movie/524434", poster: "https://image.tmdb.org/t/p/w500/vV7TrS7PNRZJHCxNmiYN1SU7s1w.jpg" },
  { title: "Spider-Man: Far From Home", year: 2024, type: "movie", phase: "Phase 4", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/429617", poster: "https://image.tmdb.org/t/p/w500/9FkewgPxlMPjgKhFN7LaRJEqmCI.jpg" },
  { title: "Spider-Man: No Way Home", year: 2024, type: "movie", phase: "Phase 4", earth: "Terre-616 / Multivers", url: "https://heiwastream.fr/watch/movie/634649", poster: "https://image.tmdb.org/t/p/w500/jwfDFqzxBkXC5bERBZrCEfK9iii.jpg" },
  { title: "Hawkeye", year: 2024, type: "series", phase: "Phase 4", earth: "Terre-616", poster: "https://image.tmdb.org/t/p/w500/cybZ7FoeBoBJPieKvSp4wh2yCMR.jpg", episodes: eps(6, 88329, 1) },
  { title: "Doctor Strange 2", year: 2024, type: "movie", phase: "Phase 4", earth: "Terre-616 / Multivers", url: "https://heiwastream.fr/watch/movie/453395", poster: "https://image.tmdb.org/t/p/w500/arfzjn1tGvXWwkX7eaGVuXsc0mp.jpg" },
  { title: "Moon Knight", year: 2024, type: "series", phase: "Phase 4", earth: "Pas néssecaire pour MCU", poster: "https://image.tmdb.org/t/p/w500/xrkDlkL6u26DLeBw2Cao8pYtrYH.jpg", episodes: eps(6, 92749, 1) },
  { title: "Ms. Marvel", year: 2024, type: "series", phase: "Phase 4", earth: "Pas néssecaire pour MCU", poster: "https://image.tmdb.org/t/p/w500/3x1eRyuz2NOOSXODDcDl9EjGRQ.jpg", episodes: eps(6, 92782, 1) },
  { title: "Thor: Love and Thunder", year: 2024, type: "movie", phase: "Phase 4", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/616037", poster: "https://image.tmdb.org/t/p/w500/kSMarEm3ESOOr11dzsep2RZ1ClD.jpg" },
  { title: "She-Hulk", year: 2024, type: "series", phase: "Phase 4", earth: "Pas néssecaire pour MCU", poster: "https://image.tmdb.org/t/p/w500/poWy1hDzaIFv6UaYtFDNcNfiM2C.jpg", episodes: eps(9, 92783, 1) },
  { title: "Black Panther: Wakanda Forever", year: 2024, type: "movie", phase: "Phase 4", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/505642", poster: "https://image.tmdb.org/t/p/w500/rNTKgJdJ8tyfpiUug5ittECK8CS.jpg" },
  { title: "Werewolf by Night", year: 2024, type: "movie", phase: "Phase 4", earth: "Pas néssecaire pour MCU", url: "https://heiwastream.fr/watch/movie/894205", poster: "https://image.tmdb.org/t/p/w500/5p6Q5dsqgT7dknImjtoRvNx50k9.jpg" },
  { title: "Les Gardiens: Joyeuses Fêtes", year: 2024, type: "movie", phase: "Phase 4", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/774752", poster: "https://image.tmdb.org/t/p/w500/cF3E6CrCm3NUy5PDRBbGyXRChYb.jpg" },
  { title: "Ant-Man 3: Quantumania", year: 2025, type: "movie", phase: "Phase 5", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/640146", poster: "https://image.tmdb.org/t/p/w500/2hq8EKF6kaUyOxB9KhmIb5JUxEe.jpg" },
  { title: "Secret Invasion", year: 2025, type: "series", phase: "Phase 5", earth: "Pas néssecaire pour MCU", poster: "https://image.tmdb.org/t/p/w500/AbqvJTbFEOmL8vHk54lVolqQg8Y.jpg", episodes: eps(6, 114472, 1) },
  { title: "Les Gardiens de la Galaxie Vol. 3", year: 2025, type: "movie", phase: "Phase 5", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/447365", poster: "https://image.tmdb.org/t/p/w500/dnyQnKSSqQ8aOEMiE5hYDNJO4dE.jpg" },
  { title: "Loki Saison 2", year: 2023, type: "series", phase: "Phase 5", earth: "TVA / Hors temps", poster: "https://image.tmdb.org/t/p/w500/tGdaskDMBdGonOnuvkrAP9sd0mt.jpg", episodes: eps(6, 84958, 2) },
  { title: "What If...? Saison 2", year: 2024, type: "series", phase: "Phase 5", earth: "Multivers", poster: "https://image.tmdb.org/t/p/w500/5oYadd4vILTIYs7j3H9pgWIvbhI.jpg", episodes: eps(9, 91363, 2) },
  { title: "Echo", year: 2025, type: "series", phase: "Phase 5", earth: "Terre-616", poster: "https://image.tmdb.org/t/p/w500/g7Y8pX0yndEpGAa0v4ZGpGuMrF0.jpg", episodes: eps(5, 122226, 1) },
  { title: "The Marvels", year: 2025, type: "movie", phase: "Phase 5", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/609681", poster: "https://image.tmdb.org/t/p/w500/mqAQO6j5gkq6iwCXNbXpzf0RXBU.jpg" },
  { title: "Agatha All Along", year: 2025, type: "series", phase: "Phase 5", earth: "Terre-616", poster: "https://image.tmdb.org/t/p/w500/mGsxKwXUjojitRv2E9qMTbxbBRd.jpg", episodes: eps(9, 138501, 1) },
  { title: "Deadpool & Wolverine", year: 2024, type: "movie", phase: "Phase 5", earth: "Terre-10005 / 616", url: "https://heiwastream.fr/watch/movie/533535", poster: "https://image.tmdb.org/t/p/w500/7CtRdKd5hQPB2b1apKCqxxQUKSf.jpg" },
  { title: "Daredevil: Born Again S1", year: 2025, type: "series", phase: "Phase 5", earth: "Terre-616", poster: "https://image.tmdb.org/t/p/w500/9ERtLvFN1nFCabGaFkC6tiroglm.jpg", episodes: eps(9, 202555, 1) },
  { title: "Captain America: Brave New World", year: 2025, type: "movie", phase: "Phase 5", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/822119", poster: "https://image.tmdb.org/t/p/w500/wDRXmiAEJdhNIcuetM4016fOCx8.jpg" },
  { title: "Thunderbolts*", year: 2025, type: "movie", phase: "Phase 5", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/986056", poster: "https://image.tmdb.org/t/p/w500/zctISSBEZRgVQPG178HqRJMnc4x.jpg" },
  { title: "Daredevil: Born Again S2", year: 2026, type: "series", phase: "Phase 5", earth: "Terre-616", poster: "https://image.tmdb.org/t/p/w500/kNOOBUEKnivdnWsxbtKnG69VMwx.jpg", episodes: eps(8, 202555, 2) },
  { title: "The Fantastic Four: First Steps", year: 2025, type: "movie", phase: "Phase 6", earth: "À venir", url: "https://heiwastream.fr/watch/movie/617126", poster: "https://image.tmdb.org/t/p/w500/rNc4KARs6fVa4axzvuv3NfUiNy1.jpg" },
  { title: "Spider-Man: Brand New Day", year: 2026, type: "movie", phase: "Phase 6", earth: "Terre-616", url: "https://ancorflix.lol/watch/movie/969681", poster: "https://image.tmdb.org/t/p/w500/tV712n7bMaRuaKyltFl65HPNRiP.jpg" },
  { title: "Avengers: Doomsday", year: 2026, type: "movie", phase: "Phase 6", earth: "Terre-616", url: "https://heiwastream.fr/watch/movie/1003596", poster: "https://image.tmdb.org/t/p/w500/bph5UiAOKLLjla10YuCyKWfKYGG.jpg", note: "pas encore disponible" }
];

// ─── DONNÉES : HORS MCU ───
const P_BOYS  = "https://image.tmdb.org/t/p/w500/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg";
const P_BB    = "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg";
const P_GOT   = "https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg";
const P_ST    = "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg";
const P_WIT   = "https://image.tmdb.org/t/p/w500/rhErSlk0M236rNFertVAZa9lz9S.jpg";
const P_PEAK  = "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg";
const P_SQ    = "https://image.tmdb.org/t/p/w500/heV89pC6pv5fz1plikfyQxYuE4L.jpg";
const P_TLOU  = "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg";

const HORS_MCU = [
  // ── Films DC ──
  { title: "Batman Begins", year: 2005, type: "movie", phase: "DC", earth: "Gotham", url: "https://heiwastream.fr/watch/movie/272", poster: "https://static.wikia.nocookie.net/batman/images/9/9b/Batman_Begins-413277928-large.jpg/revision/latest?cb=20260106145937" },
  { title: "The Dark Knight", year: 2008, type: "movie", phase: "DC", earth: "Gotham", url: "https://heiwastream.fr/watch/movie/155", poster: "https://i.ebayimg.com/images/g/pAEAAOSwnJph0HO~/s-l1600.webp" },
  { title: "The Dark Knight Rises", year: 2012, type: "movie", phase: "DC", earth: "Gotham", url: "https://heiwastream.fr/watch/movie/49026", poster: "https://m.media-amazon.com/images/I/91HM6470jLL.jpg" },
  { title: "Man of Steel", year: 2013, type: "movie", phase: "DC", earth: "Krypton / Terre", url: "https://heiwastream.fr/watch/movie/49521", poster: "https://fr.web.img6.acsta.net/c_310_420/pictures/210/081/21008110_20130524125237634.jpg" },
  { title: "Batman v Superman", year: 2016, type: "movie", phase: "DC", earth: "Terre", url: "https://heiwastream.fr/watch/movie/209112", poster: "https://fr.web.img6.acsta.net/c_310_420/pictures/16/02/03/11/17/130929.jpg" },
  { title: "Wonder Woman", year: 2017, type: "movie", phase: "DC", earth: "Themyscira", url: "https://heiwastream.fr/watch/movie/297762", poster: "https://i.ebayimg.com/images/g/SZcAAOSwWo1kTXSu/s-l1200.jpg" },
  { title: "Aquaman", year: 2018, type: "movie", phase: "DC", earth: "Atlantide", url: "https://heiwastream.fr/watch/movie/297802", poster: "https://fr.web.img5.acsta.net/c_310_420/pictures/18/12/13/12/12/2738771.jpg" },
  { title: "Joker", year: 2019, type: "movie", phase: "DC", earth: "Gotham", url: "https://heiwastream.fr/watch/movie/475557", poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
  { title: "Zack Snyder's Justice League", year: 2021, type: "movie", phase: "DC", earth: "Terre", url: "https://heiwastream.fr/watch/movie/791373", poster: "https://upload.wikimedia.org/wikipedia/en/6/60/Zack_Snyder%27s_Justice_League.png" },
  { title: "The Suicide Squad", year: 2021, type: "movie", phase: "DC", earth: "Terre", url: "https://heiwastream.fr/watch/movie/436969", poster: "https://upload.wikimedia.org/wikipedia/en/0/06/The_Suicide_Squad_%28film%29_poster.jpg" },
  { title: "The Batman", year: 2022, type: "movie", phase: "DC", earth: "Gotham", url: "https://heiwastream.fr/watch/movie/414906", poster: "https://image.tmdb.org/t/p/w500/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg" },
  // ── Marvel hors MCU (Sony / Fox) ──
  { title: "Logan", year: 2017, type: "movie", phase: "Fox / X-Men", earth: "2029", url: "https://heiwastream.fr/watch/movie/263115", poster: "https://upload.wikimedia.org/wikipedia/en/3/37/Logan_2017_poster.jpg" },
  { title: "Venom", year: 2018, type: "movie", phase: "Sony", earth: "San Francisco", url: "https://heiwastream.fr/watch/movie/335983", poster: "https://upload.wikimedia.org/wikipedia/en/1/10/Venom_%282018_film%29_poster.png" },
  { title: "Spider-Man: Into the Spider-Verse", year: 2018, type: "movie", phase: "Sony", earth: "Spider-Verse", url: "https://heiwastream.fr/watch/movie/324857", poster: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg" },
  { title: "Venom: Let There Be Carnage", year: 2021, type: "movie", phase: "Sony", earth: "San Francisco", url: "https://heiwastream.fr/watch/movie/580489", poster: "https://upload.wikimedia.org/wikipedia/en/a/a7/Venom_Let_There_Be_Carnage_poster.jpg" },
  // ── Autres films ──
  { title: "The Godfather", year: 1972, type: "movie", phase: "Hors MCU", earth: "Terre", url: "https://heiwastream.fr/watch/movie/238", poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg" },
  { title: "Titanic", year: 1997, type: "movie", phase: "Hors MCU", earth: "Terre", url: "https://heiwastream.fr/watch/movie/597", poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg" },
  { title: "Gladiator", year: 2000, type: "movie", phase: "Hors MCU", earth: "Terre", url: "https://heiwastream.fr/watch/movie/98", poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg" },
  { title: "Avatar", year: 2009, type: "movie", phase: "Hors MCU", earth: "Terre", url: "https://heiwastream.fr/watch/movie/19995", poster: "https://image.tmdb.org/t/p/w500/7N8L80OaG8EBTDdRBjGqT8PBzCM.jpg" },
  { title: "Inception", year: 2010, type: "movie", phase: "Hors MCU", earth: "Terre", url: "https://heiwastream.fr/watch/movie/27205", poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg" },
  { title: "Interstellar", year: 2014, type: "movie", phase: "Hors MCU", earth: "Terre", url: "https://heiwastream.fr/watch/movie/157336", poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
  { title: "Dune", year: 2021, type: "movie", phase: "Hors MCU", earth: "Terre", url: "https://heiwastream.fr/watch/movie/438631", poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg" },
  { title: "Oppenheimer", year: 2023, type: "movie", phase: "Hors MCU", earth: "Terre", url: "https://heiwastream.fr/watch/movie/872585", poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" },
  // ── Séries ──
  { title: "Daredevil S1", year: 2015, type: "series", phase: "Netflix", earth: "Hell's Kitchen", poster: "https://upload.wikimedia.org/wikipedia/en/1/1b/Daredevil_season_1_poster.jpg", episodes: eps(13, 61889, 1) },
  { title: "The Punisher S1", year: 2017, type: "series", phase: "Netflix", earth: "NYC", poster: "https://upload.wikimedia.org/wikipedia/en/2/21/The_Punisher_season_1_poster.jpg", episodes: eps(13, 67170, 1) },
  { title: "The Flash S1", year: 2014, type: "series", phase: "Arrowverse", earth: "Terre-1", poster: "https://upload.wikimedia.org/wikipedia/en/7/73/The_Flash_season_1.jpg", episodes: eps(23, 60735, 1) },
  { title: "Gotham S1", year: 2014, type: "series", phase: "DC / Fox", earth: "Gotham", poster: "https://upload.wikimedia.org/wikipedia/en/a/ab/Gotham_%28season_1%29.jpg", episodes: eps(22, 60708, 1) },
  { title: "The Boys S1", year: 2019, type: "series", phase: "Amazon", earth: "Hors MCU", poster: P_BOYS, episodes: eps(8, 76479, 1) },
  { title: "The Boys S2", year: 2020, type: "series", phase: "Amazon", earth: "Hors MCU", poster: P_BOYS, episodes: eps(8, 76479, 2) },
  { title: "The Boys S3", year: 2022, type: "series", phase: "Amazon", earth: "Hors MCU", poster: P_BOYS, episodes: eps(8, 76479, 3) },
  { title: "The Boys S4", year: 2024, type: "series", phase: "Amazon", earth: "Hors MCU", poster: P_BOYS, episodes: eps(8, 76479, 4) },
  { title: "The Boys S5", year: 2026, type: "series", phase: "Amazon", earth: "Hors MCU", poster: P_BOYS, episodes: eps(8, 76479, 5) },
  { title: "Invincible S1", year: 2021, type: "series", phase: "Amazon", earth: "Hors MCU", poster: "https://upload.wikimedia.org/wikipedia/en/3/34/Invincible_Season_1.jpg", episodes: eps(8, 95557, 1) },
  { title: "Peacemaker S1", year: 2022, type: "series", phase: "DC / HBO", earth: "Hors MCU", poster: "https://upload.wikimedia.org/wikipedia/en/f/fe/Peacemaker_season_1_poster.jpg", episodes: eps(8, 134597, 1) },
  { title: "Breaking Bad S1", year: 2008, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_BB, episodes: eps(7, 1396, 1) },
  { title: "Breaking Bad S2", year: 2009, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_BB, episodes: eps(13, 1396, 2) },
  { title: "Breaking Bad S3", year: 2010, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_BB, episodes: eps(13, 1396, 3) },
  { title: "Breaking Bad S4", year: 2011, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_BB, episodes: eps(13, 1396, 4) },
  { title: "Breaking Bad S5", year: 2013, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_BB, episodes: eps(16, 1396, 5) },
  { title: "Game of Thrones S1", year: 2011, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_GOT, episodes: eps(10, 1399, 1) },
  { title: "Game of Thrones S2", year: 2012, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_GOT, episodes: eps(10, 1399, 2) },
  { title: "Game of Thrones S3", year: 2013, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_GOT, episodes: eps(10, 1399, 3) },
  { title: "Game of Thrones S4", year: 2014, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_GOT, episodes: eps(10, 1399, 4) },
  { title: "Game of Thrones S5", year: 2015, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_GOT, episodes: eps(10, 1399, 5) },
  { title: "Game of Thrones S6", year: 2016, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_GOT, episodes: eps(10, 1399, 6) },
  { title: "Game of Thrones S7", year: 2017, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_GOT, episodes: eps(7, 1399, 7) },
  { title: "Game of Thrones S8", year: 2019, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_GOT, episodes: eps(6, 1399, 8) },
  { title: "Stranger Things S1", year: 2016, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_ST, episodes: eps(8, 66732, 1) },
  { title: "Stranger Things S2", year: 2017, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_ST, episodes: eps(9, 66732, 2) },
  { title: "Stranger Things S3", year: 2019, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_ST, episodes: eps(8, 66732, 3) },
  { title: "Stranger Things S4", year: 2022, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_ST, episodes: eps(9, 66732, 4) },
  { title: "Stranger Things S5", year: 2025, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_ST, episodes: eps(8, 66732, 5) },
  { title: "The Witcher S1", year: 2019, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_WIT, episodes: eps(8, 71912, 1) },
  { title: "The Witcher S2", year: 2021, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_WIT, episodes: eps(8, 71912, 2) },
  { title: "The Witcher S3", year: 2023, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_WIT, episodes: eps(8, 71912, 3) },
  { title: "The Witcher S4", year: 2025, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_WIT, episodes: eps(8, 71912, 4) },
  { title: "Peaky Blinders S1", year: 2013, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_PEAK, episodes: eps(6, 60574, 1) },
  { title: "Peaky Blinders S2", year: 2014, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_PEAK, episodes: eps(6, 60574, 2) },
  { title: "Peaky Blinders S3", year: 2016, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_PEAK, episodes: eps(6, 60574, 3) },
  { title: "Peaky Blinders S4", year: 2017, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_PEAK, episodes: eps(6, 60574, 4) },
  { title: "Peaky Blinders S5", year: 2019, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_PEAK, episodes: eps(6, 60574, 5) },
  { title: "Peaky Blinders S6", year: 2022, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_PEAK, episodes: eps(6, 60574, 6) },
  { title: "Squid Game S1", year: 2021, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_SQ, episodes: eps(9, 93405, 1) },
  { title: "Squid Game S2", year: 2024, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_SQ, episodes: eps(7, 93405, 2) },
  { title: "Squid Game S3", year: 2025, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_SQ, episodes: eps(6, 93405, 3) },
  { title: "The Last of Us S1", year: 2023, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_TLOU, episodes: eps(9, 100088, 1) },
  { title: "The Last of Us S2", year: 2025, type: "series", phase: "Hors MCU", earth: "Terre", poster: P_TLOU, episodes: eps(7, 100088, 2) }
];

// ─── PLACEHOLDER FIABLE ───
function ph(title) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='450'><rect width='100%' height='100%' fill='#0b0b12'/><text x='50%' y='47%' fill='#e62429' font-family='Arial, sans-serif' font-size='22' font-weight='bold' text-anchor='middle'>${title}</text></svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

// ─── DONNÉES SUPABASE (page développeur) ───
let EXTRA = [];
let filtreActif = "mcu";
let recherche = "";

const SUPABASE_URL = 'https://fdycxfjaljuuaqdwmcuu.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_M0moUWVLW2HHW70XfcCJbg_JeFvy4Kr';

fetch(SUPABASE_URL + '/rest/v1/catalogue?select=*&order=id.asc', {
  headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': 'Bearer ' + SUPABASE_ANON_KEY }
})
.then(r => r.json())
.then(rows => {
  if (Array.isArray(rows)) {
    EXTRA = rows.map(l => ({
      title: l.title, year: l.year, type: l.type || 'movie', phase: l.phase || 'Hors MCU',
      earth: l.earth || 'Terre', collection: l.collection || 'mcu',
      url: l.url || undefined, poster: l.poster || undefined, note: l.note || undefined,
      episodes: l.episodes || undefined
    }));
  }
  render(filtreActif);
})
.catch(() => render(filtreActif));

// ─── RENDU (recherche intégrée : ne filtre QUE la section active) ───
function render(filter = filtreActif) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  const base = filter === "horsmcu" ? HORS_MCU : MARVEL;
  const liste = [...base, ...EXTRA.filter(i => (i.collection || "mcu") === filter)];

  const q = recherche;
  const resultats = q
    ? liste.filter(item => `${item.title} ${item.phase} ${item.earth}`.toLowerCase().includes(q))
    : liste;

  if (resultats.length === 0) {
    const p = document.createElement("p");
    p.className = "no-results";
    p.textContent = "Aucun résultat pour « " + recherche + " » dans " +
      (filter === "horsmcu" ? "Hors MCU" : "MCU") + ".";
    grid.appendChild(p);
    return;
  }

  if (filter === "horsmcu") {
    resultats.forEach(item => creerCarte(item, grid));
    return;
  }

  const parPhase = new Map();
  resultats.forEach(item => {
    if (!parPhase.has(item.phase)) parPhase.set(item.phase, []);
    parPhase.get(item.phase).push(item);
  });
  parPhase.forEach((items, phase) => {
    const h = document.createElement("h3");
    h.className = "phase-title";
    h.textContent = phase;
    grid.appendChild(h);
    items.forEach(item => creerCarte(item, grid));
  });
}

function creerCarte(item, grid) {
  const card = document.createElement("div");
  card.className = "card";
  card.onclick = () => handleClick(item);
  const img = document.createElement("img");
  img.src = item.poster || ph(item.title);
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
}

function handleClick(item) {
  if (item.type === "movie") {
    if (!item.url) { alert("Ce film n'est pas encore disponible."); return; }
    window.open(item.url, "_blank");
  } else {
    openModal(item);
  }
}

function openModal(item) {
  document.getElementById("modalTitle").textContent = `${item.title} — ${item.phase} — ${item.earth}`;
  const list = document.getElementById("episodesList");
  list.innerHTML = "";
  (item.episodes || []).forEach(ep => {
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
  if (e.target.id === "modal") document.getElementById("modal").classList.remove("active");
};

// ─── FILTRES MCU / HORS MCU ───
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    filtreActif = btn.dataset.filter;
    render(filtreActif);
  };
});

// ─── BARRE DE RECHERCHE ───
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("input", function () {
    recherche = this.value.toLowerCase().trim();
    render(filtreActif);
  });
}

// ─── INIT ───
render("mcu");

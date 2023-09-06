const pelis = [
  {
    nombre: "SPIDER-MAN",
    estreno: "2023",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
  },
  {
    nombre: "SAUSAGE PARTY",
    estreno: "2016",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMjE1M2RlODItYmM4My00MjRkLTgwY2YtNmU0ZWQ1ZGE0OWM3XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg",
  },
  {
    nombre: "ARMY OF THE DEAD",
    estreno: "2021",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BNGY0NzgzYzctYWQwMC00MzM2LThjNGMtZjFjMWUyNzg0ZmM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
  },
  {
    nombre: "GODZILLA VS KONG",
    estreno: "2021",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMzk2ZmYxNTUtODlhMi00NzE2LTkwMTctYjg0ODQ1ZjkyNzJmXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
  },
  {
    nombre: "LEGO THE MOVIE",
    estreno: "2014",
    imagen:
      "https://play-lh.googleusercontent.com/xGKXq6-8zBbidgE_HoHFKwbReYn57muH_4MfhSNqcqnL8QueOXEVDhKd5HZMsBYQPHqweyvj0bBxDqUbpWc",
  },
  {
    nombre: "BACK TO THE FUTURE 3",
    estreno: "1990",
    imagen:
      "https://images.justwatch.com/poster/305790389/s718/regreso-al-futuro-iii.jpg",
  },
  {
    nombre: "CATCH ME IF YOU CAN",
    estreno: "2002",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BNDQ1YmNmNDctMTZiZS00OGU3LWIyN2YtMWIwMmVhNDQ0MjY5XkEyXkFqcGdeQXVyMjQ0NzE0MQ@@._V1_.jpg",
  },
  {
    nombre: "HARDCORE HENRY",
    estreno: "2015",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BNjIzNTcwMDc3Nl5BMl5BanBnXkFtZTgwNzU5NTY5NzE@._V1_FMjpg_UX1000_.jpg",
  },
];
function balado() {
  const list = document.getElementById("peliculas");
  pelis.map((item) => {
    const imagen = document.createElement("img");
    const estreno = document.createElement("p");
    const nombre = document.createElement("h3");
    const listelement = document.createElement("li");

    nombre.textContent = item.nombre;
    imagen.src = item.imagen;
    estreno.textContent = `Fecha de estreno ${item.estreno}`;

    listelement.appendChild(nombre);
    listelement.appendChild(imagen);
    listelement.appendChild(estreno);
    list.appendChild(listelement);
  });
}

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let palos = ["♠", "♥", "♣", "♦"];
  let valores = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let palosRandom = palos[Math.floor(Math.random() * palos.length)];
  let valoresRandom = valores[Math.floor(Math.random() * valores.length)];

  let iconoArriba = document.querySelector("#iconoArriba");
  let iconoAbajo = document.querySelector("#iconoAbajo");
  let valor = document.querySelector("#valor");

  iconoArriba.textContent = palosRandom;
  iconoAbajo.textContent = palosRandom;
  valor.textContent = valoresRandom;

  if (palosRandom === "♥" || palosRandom === "♦") {
    iconoArriba.style.color = "red";
    iconoAbajo.style.color = "red";
  } else {
    iconoArriba.style.color = "black";
    iconoAbajo.style.color = "black";
  }
};

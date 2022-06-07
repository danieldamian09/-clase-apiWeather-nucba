import {api} from "./api/api.js";
// import { datos } from "./data/datos.js";

const search = document.querySelector(".logo__search");
const close = document.querySelector(".search__close");
const containerForm = document.querySelector(".form");
const form = document.querySelector(".search__form");
const message = document.querySelector(".search__message");

window.addEventListener("load", () => {
	let city = document.querySelector("#city").value;
	let country = document.querySelector("#country").value;
  api(city = "Buenos Aires", country = "AR");
});

search.addEventListener("click", () => {
	containerForm.style.display = "block";
});

close.addEventListener("click", () => {
	containerForm.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
	let city = document.querySelector("#city").value;
  let country = document.querySelector("#country").value;
  
  // Validaciones
  if (city === "" || country === "") {
    message.style.display = "block";
    setTimeout(() => {
      message.style.display = "none";
    }, 3000);
    return;
  }


	// TODO: consultar API
	api(city, country);
	containerForm.style.display = "none";
	// limpiar inputs
	document.querySelector("#city").value = "";
	document.querySelector("#country").value = "";
});


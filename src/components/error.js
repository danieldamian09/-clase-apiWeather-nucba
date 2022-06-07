const city = document.querySelector(".results__city");
const temperature = document.querySelector("#current");
const date = document.querySelector(".results__date");
const min = document.querySelector("#min");
const max = document.querySelector("#max");
const humidity = document.querySelector("#humidity");
const feels = document.querySelector("#feels");

export const errorMessage = (message) => {
  city.textContent = message;
  city.classList.add("error");
  setTimeout(() => {
    // Limpiar contenido
    city.textContent = "";
    city.classList.remove("error");
    temperature.textContent = "";
    date.textContent = "";
    min.textContent = "";
    max.textContent = "";
    humidity.textContent = "";
    feels.textContent = "";
  }, 2000);
}
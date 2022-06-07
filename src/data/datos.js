import { formatearFecha } from './fecha.js';

const city = document.querySelector(".results__city");
const temperature = document.querySelector("#current");
const date = document.querySelector(".results__date");
const min = document.querySelector("#min");
const max = document.querySelector("#max");
const humidity = document.querySelector("#humidity");
const feels = document.querySelector("#feels");


const fechaFormarto = new Date();
const kelvin = 273.15;


export const datos = (name, main) => {
  city.textContent = `${name}`;
  temperature.textContent = `${parseInt(main.temp - kelvin)}`;
  date.textContent = formatearFecha(fechaFormarto);
  min.textContent = `${parseInt(main.temp_min - kelvin)}`;
  max.textContent = `${parseInt(main.temp_max - kelvin)}`;
  humidity.textContent = `${main.humidity}`;
  feels.textContent = `${parseInt(main.feels_like - kelvin)}`;
}
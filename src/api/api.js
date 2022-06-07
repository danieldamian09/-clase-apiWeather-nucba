import { datos } from '../data/datos.js';


export const api =  async(city= "Buenos Airea", country = "AR") => {
  const apiKEY = 'b463dc96882da7c4efdc8dc95527b092'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKEY}`;
  
  try {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    const { name, main } = resultado;
    datos(name, main);

  } catch (error) {
    console.log(error);
  }
}
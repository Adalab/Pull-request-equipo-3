"use st


//traer el boton - query selector
//traer ul - query selector
//add event listener sobre boton
//trarme el parrafo
// escuchar evento sobre el ul




const inception = 'Origen';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';


const buttonStart = document.querySelector('.js_start');
const filmsList = document.querySelector('.js_listFilms');
const paragraphResult = document.querySelector('.js_paragraphResult');

buttonStart.addEventListener(`click`, (event)=>{
    filmsList.innerHTML = `
    <li>${inception}</li>
    <li>${theButterFlyEffect}</li>
    <li>${eternalSunshineOfTheSM}</li>`
})

filmsList.addEventListener(`click`, (event)=>{
    paragraphResult.innerHTML = `La pelicula que vamos a ver es ` + event.target.innerHTML;

})
import React from 'react';
import './About.css';
import img from '../../img/perfil-app.jfif';
import Logo from '../../img/logo_clima.png';

function About(){
    return(
    <div className='tarjeta'>
        <h2>Weather App <img src={Logo} width="60" height="60"></img></h2>
            <p> <strong>Wheather App </strong> es una SPA (Single Page Application) sobre el clima que consume una API externa de openweathermap.org y actualiza los datos en tiempo real, nos permite obtener información meteorología de cada país y/o ciudad del mundo.<br></br> <strong>Desarrollada con Javascript, ReactJs y CSS vanilla.</strong></p>
        <div className='orden'>
            <h6 className='nombre'>By Mariano Bozzoletti</h6>
            <img className='imggg' src={img} width="150" height="150"></img>
        </div>
    </div>
    )
}

export default About;
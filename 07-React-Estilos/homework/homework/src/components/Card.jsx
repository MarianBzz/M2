import React from 'react';
import s from './Card.module.css'

export default function Card(props) {
  // acá va tu código
 return (
 <div className={s.fondo}>
    <div>
      <div>
        <h4 className={s.city}>{props.name}</h4>
        <button className={s.boton} onClick={props.onClose}>X</button>
      </div>
      <div className={s.tempTotal}>
       <div className={`${s.min} ${s.temp}`}>
         <p className={s.min}> <strong>Min</strong> </p>
          <p className={s.temp}>{props.min} </p>
        </div>
        <div className={`${s.max} ${s.temp}`}>
          <p className={s.max}> <strong>Max</strong> </p>
          <p className={s.temp}>{props.max}</p>
        </div>
      </div>
    </div>
    <div >
      <img src = {`http://openweathermap.org/img/wn/${props.img}@2x.png`}  alt = {"img"} />
    </div>
 </div>)
};
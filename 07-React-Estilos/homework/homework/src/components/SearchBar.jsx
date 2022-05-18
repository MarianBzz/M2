import React from 'react';
import s from './Card.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <input type="text" placeholder = 'Ciudad...'/>
      <button className={s.boton2} onClick={props.onSearch}>Agregar</button>
    </div>
  )
};
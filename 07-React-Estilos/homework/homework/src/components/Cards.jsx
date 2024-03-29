import React from 'react';
import Card from './Card';
import s from './Card.module.css'


export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  if(!props.cities){
    return <h1>No hay ciudades</h1>
  }
  return (
    <div className= {s.contenedor}>
      {
        props.cities.map(city =>(
          <Card
          key={city.id}
          max={city.main.temp_max}
          min={city.main.temp_min}
          name={city.name}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
          />
        ))
      }
    </div>
  )
};
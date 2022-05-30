import React from "react";
import './Ciudad.css';

export default function Ciudad({city, img}) {
    var tempProm = city.temp - 269;
    return (
        <div className="ciudad">
                <div className="container">
                    <h2 className="cityname">{city.name}</h2>
                    <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+city.img+"@2x.png"}  width="80" height="80" alt="sadasd" />
                    <div className="info">
                        <div><strong>Temperatura: </strong>{Math.floor(tempProm)} °C</div>
                        <div><strong>Clima: </strong>{city.weather}</div>
                        <div><strong>Viento: </strong>{city.wind} km/h</div>
                        <div><strong>Nubosidad: </strong>{city.clouds} %</div>
                        <div><strong>Latitud:</strong> {city.latitud}º</div>
                        <div><strong>Longitud: </strong>{city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
}
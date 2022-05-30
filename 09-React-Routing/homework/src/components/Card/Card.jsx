import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

export default function Card ({min, max, name, img, onClose, id}) {
  var tempMin = min - 268;
  var tempMax = max - 268;
    return (
      <div className="card">
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
        </div>
        <div className="card-body">
          <Link to = {`/ciudad/${id}`} style={{ textDecoration: 'none' }}> 
            <h3 className="card-title">{name}</h3>
          </Link>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p><strong>Min</strong></p>
              <p>{tempMin}°C</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p><strong>Max</strong></p>
              <p>{tempMax}°C</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"}  width="80" height="80" alt="sadasd" />
            </div>
          </div>
        </div>
      </div>
    );
};

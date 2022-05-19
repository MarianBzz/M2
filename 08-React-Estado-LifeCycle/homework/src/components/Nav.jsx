import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className='barranav'>
      <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="Logo Henry" />
         Henry - Weather App
      </a>
      <SearchBar onSearch={onSearch} />
      </nav>
    </div>

  );
};


export default Nav;

import Logo from '../../img/logo_clima.png'
import SearchBar from '../SearchBarr/SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';
import { About }  from '../About/About.jsx';


function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to='/'>
        <span className="navbar-brand">
          <img id="logoClima" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="Logo Clima" />
         Weather App
        </span>
      <SearchBar
        onSearch={onSearch}
      />
      </Link>
      <Link to='/about'>
        <span>About</span>
      </Link>
    </nav>
  );
};

export default Nav;

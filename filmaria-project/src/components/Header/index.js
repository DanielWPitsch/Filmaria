import { Link } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <div>
      <header>
        <Link className='logo' to='/'>Prime Flix</Link>
        <Link className='favoritos' to='/favoritos'> Meus filmes </Link>
      </header>
    </div>
  );
}

export default Header;
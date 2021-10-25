import './styles.css';

import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation();

  return (
    <header className="headerContainer">
    <div className="headerContent">
    <Link id="iconHeader"  to="/"> <img src="/newLogo.png" alt="gn-vendas"/></ Link>
        <nav>
            <Link className={location.pathname ==="/"?'active':''} to="/">Home</Link>
            <Link className={location.pathname ==="/products"?'active':''} to="/products">Produtos</Link>
            <Link className={location.pathname ==="/register"?'active':''} to="/register">Cadastrar produtos</Link>
        </nav>
    </div>
</header>
  );
}

export default Header;

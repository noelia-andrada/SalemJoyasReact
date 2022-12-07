import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'


function NavBar () {
    return (
        <div className="divMenu">
            <ul className="menu">
                <NavLink to="/categoria/aros">
                 <li><a href="#">Aros</a></li>
                </NavLink>
                <NavLink to="/categoria/collares">
                  <li><a href="#">Collares</a></li>
                </NavLink>
                <NavLink to="/categoria/anillos">
                  <li><a href="#">Anillos</a></li>
                </NavLink>
                <NavLink to="/categoria/dijes">
                    <li><a href="#">Dijes</a></li>
                </NavLink>
			</ul>
            <CartWidget/>
            
        </div>
    )
}

export default NavBar;
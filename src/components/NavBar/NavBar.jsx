import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'



function NavBar () {
    return (
        <div className="divMenu">
            <div className="menu">
                <NavLink className="menuItem" to="/categoria/aros">Aros</NavLink>
                <NavLink className="menuItem" to="/categoria/collares">Collares</NavLink>
                <NavLink className="menuItem" to="/categoria/anillos">Anillos</NavLink>
                <NavLink className="menuItem" to="/categoria/dijes">Dijes</NavLink>
			</div>
            <CartWidget/>
            
        </div>
    )
}

export default NavBar;
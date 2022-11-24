import './NavBar.css'
import CartWidget from "../CardWidget/CartWidget"

function NavBar () {
    return (
        <div className="divMenu">
            <ul className="menu">
				<li><a href="#">inicio</a></li>
				<li><a href="#">joyeria</a></li>
				<li><a href="#">preguntas frecuentes</a></li>
				<li><a href="#">contacto</a></li>
			</ul>
            <CartWidget/>
        </div>
    )
}

export default NavBar;
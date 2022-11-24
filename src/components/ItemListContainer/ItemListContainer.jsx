import NavBar from "../NavBar/NavBar";
import TituloPrincipal from "../Titulo/Titulo";

function ItemListContainer ({greeting}) {
    const greetingStyle = {fontSize: "200%"}
    return (
        <div>
            <span style={greetingStyle}>{greeting}</span>
            <TituloPrincipal/>
            <NavBar/>
        </div>
    )
}

export default ItemListContainer;
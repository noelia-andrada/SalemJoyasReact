import ItemCard from "../ItemCard/ItemCard";
import ItemCount from "../ItemCount/ItemCount";

function ItemListContainer ({greeting}) {
    const greetingStyle = {fontSize: "200%"}
    return (
        <div>
            <span style={greetingStyle}>{greeting}</span>
            <ItemCard/>
            <ItemCount/>
        </div>
    )
}

export default ItemListContainer;
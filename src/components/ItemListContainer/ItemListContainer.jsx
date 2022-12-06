import ItemCard from "../ItemCard/ItemCard";

function ItemListContainer ({greeting}) {
    const greetingStyle = {fontSize: "200%"}
    return (
        <div>
            <span style={greetingStyle}>{greeting}</span>
            <ItemCard/>
        </div>
    )
}

export default ItemListContainer;
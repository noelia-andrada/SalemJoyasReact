import './CartWidget.css'

function CartWidget () {
    return (
        <div>
            <img src="data:image/png;base64,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"
            alt="Carrito - Salem Joyas" title="Carrito - Salem Joyas" height={40}/>
            <span >{3}</span>
        </div>
    )
}

export default CartWidget;
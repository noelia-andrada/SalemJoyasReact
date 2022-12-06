import { useState } from "react";

function ItemCount() {
    const [count, setCount] = useState (0)
    
    const sumar = () => {
        if(count < 50) {
            setCount (count + 1)
        }
    }
    
    const restar = () => {
        if(count > 0) {
            setCount (count - 1)
        }
    }

    return (
        <section className="d-inline-block">
          <button onClick = {restar}>-</button>
          <span>{count}</span>
          <button onClick = {sumar}>+</button>
        </section>
    )
}

export default ItemCount;
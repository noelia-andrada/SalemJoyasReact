import { useState } from "react";

function ItemCount() {
    const [count, setCount] = useState (0)
    
    const sumar = () => {
        if(count < 50) {
            setCount (count + 1)
        }
    }
    
    const restar = () => {
        if(count > 1) {
            setCount (count - 1)
        }
    }

    return (
        <section>
          <button onClick = {restar}>-</button>
          <p>{count}</p>
          <button onClick = {sumar}>+</button>
        </section>
    )
}

export default ItemCount;
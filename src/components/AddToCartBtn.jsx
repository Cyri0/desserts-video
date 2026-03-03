import { useState } from "react"
import cartImage from "../../public/images/icon-add-to-cart.svg"
import incrementIcon from "../../public/images/icon-increment-quantity.svg"
import decrementIcon from "../../public/images/icon-decrement-quantity.svg"

const AddToCartBtn = () => {
    const [quantity, setQuantity] = useState(0)

    const increase = () => {
        setQuantity(prev => prev + 1) // az előző állapothoz képest növeld meg eggyel
    }

    const decrease = () => {
         setQuantity(prev => prev - 1)
    }

    return (
        <> {/* fragment */}
            {quantity > 0 ? 
                <div className="addToCartBtn increasedAddToCart">
                    <button onClick={decrease}>
                        <img src={decrementIcon} alt="Decrease" />
                    </button>
                    {quantity}
                    <button onClick={increase}>
                        <img src={incrementIcon} alt="Increase" />
                    </button>
                </div> :
                <div className="addToCartBtn" onClick={increase}>
                    <img src={cartImage} alt="Cartlogo" />Add to Cart
                </div>
            }
            
            
        </>
  )
}

export default AddToCartBtn
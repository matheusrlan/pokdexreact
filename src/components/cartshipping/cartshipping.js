import { useState } from 'react';
import './cartshipping.css'

function CartShipping({pokemonInfo}){

    const[total, setTotal] = useState(0)
    const [prices, setPrices] = useState([])

    // setTotal(pokemonInfo.map(pokemon => (
    //     pokemon.prince
    // )))
        console.log(total)

    return (
        <div className="cart-container">

            <h1>Carrinho</h1>

            
                {pokemonInfo.map(pokemon => (

                    <div className="cart-item">
                    <p>{pokemon.name}</p>
                    <p>{pokemon.price}</p>
                    </div>   
                ))}
            
            <div className="cart-total">
                <p>total</p>
                <p>{total},00</p>
            </div>

        </div>
    )
}
export default CartShipping;
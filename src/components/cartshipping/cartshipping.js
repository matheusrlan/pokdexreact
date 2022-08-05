import { useEffect, useState } from 'react';
import './cartshipping.css'

function CartShipping({pokemonInfo}){

    const [total, setTotal] = useState(0)
    const [isToggled, setIsToggled] = useState(false)

    useEffect(() => {
        setTotal(pokemonInfo.length * 10)
    })

    // function finalizado(e) {
    //     e.preventDefault()
    //     console.log("Testando")
    // }
    
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

            <button  disabled={total === 0 ? true : false} onClick={() => setIsToggled(!isToggled)} >Finalizar Compra</button>
                    {isToggled && <div className='compra-realizada'>
                        <p>Obrigado pela compra</p>
                        </div>
                    }
        </div>
    )
}
export default CartShipping;
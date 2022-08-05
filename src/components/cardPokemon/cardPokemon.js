import './cardPokemon.css'

const CardPokemon = ({ pokemon, loading, handleBuy }) => {
    //    console.log(pokemon);
    return (
        <div className='pokemon-grid'>
            {
                loading ? <h1>Loading...</h1> :
                    pokemon.map((item) => {
                        return (
                            <>
                                <div className="pokemon-card" >
                                    <div className="pokemon-image-container">
                                        <img alt={item.name} src={item.sprites.front_default} className="pokemon-image" />
                                    </div>
                                    <div className="card-body">
                                        <div className="card-top">
                                            <h3> {item.name}</h3>
                                            <div>ID:{item.id}</div>
                                        </div>

                                        <div className="card-bottom">
                                            <div className="pokemon-type">
                                                {item.types.map((type, index) => {
                                                    return (
                                                        <div key={index} className="pokemon-type-text">{type.type.name}</div>
                                                    )
                                                })}
                                            </div>
                                            <div><button onClick={() => handleBuy(item.name, 10.00)}>comprar</button></div>
                                        </div>
                                    </div>
                                </div>
                            </>
                       )
                }   )
            }

        </div>
    )
}
export default CardPokemon;
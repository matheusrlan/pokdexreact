import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Pokeinfo from "../pokeInfo/pokeinfo";
import CardPokemon from "../cardPokemon/cardPokemon";
import './pokedex.css'

const Pokedex=({handleBuy})=>{
    
    const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl]=useState();
    const [pokeDex,setPokeDex]=useState();

    // console.log("SetePOKEDATAAAAAA",pokeData)
    
    const pokeAll=async()=>{
        setLoading(true)
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
        // console.log("res.data.results", res.data.results)
    }
    
    const getPokemon=async(res)=>{
        res.map(async(item)=>{
            // console.log("ITEM", item.url)
            const result=await axios.get(item.url)
            //   console.log("POKEDATAAA", result.data)
            setPokeData(state => {
                state=[...state, result.data]
                state.sort((a,b)=>a.id>b.id?1:-1)
                // console.log("STATEEEETETTETTETS",state)
                return state;
            })
        })   
    }   

    
    useEffect(()=>{
        pokeAll();
    },[url])
    
    return(
        <>
            <div className="container">
                <div className="left-content">
                    <CardPokemon handleBuy={handleBuy} pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)} />
                    
                    <div className="pagination-container">
                        {  prevUrl && <button onClick={()=>{
                            setPokeData([])
                            setUrl(prevUrl) 
                        }}>Previous</button>}

                        { nextUrl && <button onClick={()=>{
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Next</button>}

                    </div>
                </div>
                <div className="right-content">
                   <Pokeinfo data={pokeDex}/>
                </div>
            </div>
        </>
    )
}
export default Pokedex;
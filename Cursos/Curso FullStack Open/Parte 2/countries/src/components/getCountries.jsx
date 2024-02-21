
import React, {useEffect } from 'react'
import axios from 'axios'

import Country from './getCountry'

const dbUrlAll = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAllData = () => {
    return axios.get(`${dbUrlAll}`).
    then(response => response.data)
}

const Countries = (props) => {

    useEffect(() => {
        getAllData().
        then(data => {
            props.setCountries(data)
        })
    }, []) 

    if (!props.countries){
        return null
    }

    const nameOfCountries = props.countries != null ?
        props.countries.map(country => country.name.common) 
        : null

    const searchCountries = nameOfCountries.length > 1 ? 
        nameOfCountries.filter(name => new RegExp(`^${props.search}`, 'i').test(name))
        : nameOfCountries

    if (searchCountries.length > 10) {
        return <p> Mas de 10 coincidencias, sea un poco mas especifico </p>
    } 
    
    else if (searchCountries.length > 1) {
        return (
            <div>
                <ul>
                    {searchCountries.map((country, i) => 
                    <div key={i}>
                        <li>
                            {country} 
                            <button onClick={()=>{<Country firstCountry={searchCountries[i]} searchCountry={props.searchCountry} setSearchCountry={props.setSearhCountry}/>}}>Search</button>
                        </li>
                    </div>
                    )}
                </ul>
            </div>  
        )
    } 
    
    else if (searchCountries.length == 1) {
        const firstCountry = searchCountries && searchCountries.length > 0 ? searchCountries[0] : null;
        return <Country firstCountry={firstCountry} searchCountry={props.searchCountry} setSearchCountry={props.setSearhCountry}/>;
    } 
    
    else if (searchCountries.length == 0){
        return <p>No se encontraron coincidencias</p>
    }
}

export default Countries
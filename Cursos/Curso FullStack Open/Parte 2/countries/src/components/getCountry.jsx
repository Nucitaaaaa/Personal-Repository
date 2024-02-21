
import React, {useEffect} from 'react'
import axios from 'axios'

const dbUrl = 'https://studies.cs.helsinki.fi/restcountries/api/name'

const getData = (countryName) => {
    return axios.get(`${dbUrl}/${countryName}`).
    then(response => response.data)
}

const Country = (props) => {
    const countryName = props.firstCountry

    useEffect(() => {
        getData(countryName).
            then(data => {
                props.setSearchCountry(data)
            })
    }, [])

    if (!props.searchCountry){
        return null
    }

    return (
            <div>
                <h1>{props.searchCountry.name.common}</h1>
                <p>Capital: {props.searchCountry.capital}</p>
                <p>Area: {props.searchCountry.area} km²</p>

                <br />

                <h3>Languages:</h3>
                <ul>
                    {Object.values(props.searchCountry.languages).map((language, i) => <li key={i}>{language}</li>)}
                </ul>
                <img src={props.searchCountry.flags.svg} alt="" width={300}/>
            </div>
    )
}

export default Country

import { useState } from 'react'
import  Countries from './components/getCountries'

function App() {

  const [countries, setCountries]= useState(null)
  const [searchCountry, setSearchCountry] = useState(null)
  const [search, setSearch] = useState('')

  const searchInput = (event) => setSearch(event.target.value)

  return (
    <div>
      <form action="">
        Find countries: <input type="search" onChange={searchInput}/>
      </form>
      <Countries countries={countries} setCountries={setCountries} search={search} searchCountry={searchCountry} setSearhCountry={setSearchCountry}/>
    </div>
  )
}

export default App

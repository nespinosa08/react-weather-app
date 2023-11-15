import { useState } from "react"
import { MenuBar } from "./components/MenuBar"
import { PlaceList } from "./components/PlaceList"
import { SearchBar } from "./components/SearchBar"
import { WeatherBar } from "./components/WeatherBar"

export const WeatherApp = () => {

const [filterText, setfilterText] = useState('')



  return (
    <>
    <h2>WeatherApp</h2>
    <SearchBar 
    filterText={filterText}
    setfilterText= {setfilterText}
    /> 
    <br></br>
    <PlaceList filterText={filterText}  />
    <br></br>
    <MenuBar />
    <br></br>
    <WeatherBar />
    
    </>
  )
}

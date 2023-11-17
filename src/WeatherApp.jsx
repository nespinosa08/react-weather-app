import { useState } from "react"
import { MenuBar } from "./components/MenuBar"
import { PlaceList } from "./components/PlaceList"
import { SearchBar } from "./components/SearchBar"
import { WeatherBar } from "./components/WeatherBar"

export const WeatherApp = () => {

const [filterText, setfilterText] = useState('')

const [places, setPlaces] = useState([]); //lista de lugares que arroja la busqueda
const [placeId, setPlaceId] = useState(''); //Id de lugar seleccionado de la lista

const handleClick = ()=>{
  setfilterText('');
  setPlaceId('')
}
  return (
    <>
    <h2>WeatherApp</h2>
    <br></br>
    { (!placeId) &&
      <SearchBar 
      filterText={filterText}
      setfilterText= {setfilterText}
      /> 
    }
    <br></br>
    <PlaceList 
    filterText={filterText}
    places={places}
    placeId={placeId}
    setPlaces={setPlaces}
    setPlaceId={setPlaceId} />

    { (placeId) &&
      <button onClick={ handleClick }>Agregar otra busqueda</button>
    }

      <WeatherBar 
    places={places}
    placeId={placeId}/>
    <MenuBar />
    
    </>
  )
}

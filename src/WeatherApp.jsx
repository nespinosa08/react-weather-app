import { useState } from "react"
import { MenuBar } from "./components/MenuBar"
import { PlaceList } from "./components/PlaceList"
import { SearchBar } from "./components/SearchBar"
import { WeatherBar } from "./components/WeatherBar"
import { unitSystem } from "../public/unitsystem"

export const WeatherApp = () => {

const [filterText, setfilterText] = useState('')

const [places, setPlaces] = useState([]); //lista de lugares que arroja la busqueda
const [placeId, setPlaceId] = useState(''); //Id de lugar seleccionado de la lista
const [units, setUnits] = useState('metric') // variable para establecer el sistema de unidades

// TODO: historial de lugares visitados en cache,
// TODO: Agregar tema oscuro y claro.
// TODO: Maquetar los elementos

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
    placeId={placeId}
    units={units}
    unitSystem = {unitSystem} />

    <MenuBar
    units={units}
    setUnits={setUnits} />
    
    </>
  )
}

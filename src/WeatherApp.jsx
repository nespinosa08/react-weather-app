import { useState } from "react"
import { PlaceList } from "./components/PlaceList"
import { SearchBar } from "./components/SearchBar"
import { WeatherBar } from "./components/WeatherBar"
import { unitSystem } from "../public/unitsystem"
import { ThemeContext } from "./context/ThemeContext"
import { SettingsBar } from "./components/SettingsBar"
import { HistoryBar } from "./components/HistoryBar"

export const WeatherApp = () => {

const [filterText, setfilterText] = useState('')

const [places, setPlaces] = useState([]); //lista de lugares que arroja la busqueda
const [placeId, setPlaceId] = useState(''); //Id de lugar seleccionado de la lista
const [units, setUnits] = useState('metric') // variable para establecer el sistema de unidades


const initHistory = JSON.parse( localStorage.getItem('history') ) || []; // Valor inicial del estado historyPlace, extraido del localStorage O valor inicial de un arreglo vacio
const [historyPlaces, setHistoryPlaces] = useState(initHistory); // lista de lugares consultados


const [theme, setTheme] = useState(false); // claro: true, Oscuro: false

// TODO: Maquetar los elementos

const handleClick = ()=>{
  setfilterText('');
  setPlaceId('')
}

const handleClickTheme = ()=>{
  setTheme(!theme)
}

  return (
    <>

    <h2>WeatherApp</h2>

    <button onClick={ handleClickTheme }>Modo {(theme)? 'Oscuro': 'Claro'} </button>

    <br></br>

    <ThemeContext.Provider value={theme} >

    { (!placeId) &&
      <SearchBar 
      filterText={filterText}
      setfilterText= {setfilterText}
      theme= {theme}
      /> 
    }
    <PlaceList 
    filterText={filterText}
    places={places}
    placeId={placeId}
    setPlaces={setPlaces}
    setPlaceId={setPlaceId}
    historyPlaces={historyPlaces}
    setHistoryPlaces={setHistoryPlaces}
     />

    { (placeId) &&
      <button onClick={ handleClick }>Agregar otra busqueda</button>
    }

    <WeatherBar 
    places={places}
    placeId={placeId}
    units={units}
    unitSystem = {unitSystem} />

    <HistoryBar 
    historyPlaces={historyPlaces}
    />

    <SettingsBar
    units={units}
    setUnits={setUnits} />

    </ThemeContext.Provider>

    </>
  )
}

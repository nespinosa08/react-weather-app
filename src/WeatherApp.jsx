import { useState } from "react"
import { PlaceList } from "./components/PlaceList"
import { SearchBar } from "./components/SearchBar"
import { WeatherBar } from "./components/WeatherBar"
import { unitSystem } from "../public/unitsystem"
import { ThemeContext } from "./context/ThemeContext"
import { SettingsBar } from "./components/SettingsBar"
import { HistoryBar } from "./components/HistoryBar"
import { PrintBar } from "./components/printBar"
import { DocPdf } from "./components/DocPdf"
import { PDFViewer } from "@react-pdf/renderer"

// TODO: IMPRIMIR REPORTE DE TIEMPO EN PDF
// TODO: MAQUETAR LA APLICACION

export const WeatherApp = () => {

const [filterText, setfilterText] = useState('')

const [places, setPlaces] = useState([]); //Lista de lugares que arroja la busqueda
const [placeId, setPlaceId] = useState(''); //Id de lugar seleccionado de la lista
const [units, setUnits] = useState('metric') //Variable para establecer el sistema de unidades


const initHistory = JSON.parse( localStorage.getItem('history') ) || []; //Valor inicial del estado historyPlace, extraido del localStorage ó valor inicial de un arreglo vacio
const [historyPlaces, setHistoryPlaces] = useState(initHistory); //Lista de lugares consultados
const [viewPdf, setViewPdf] = useState(false); // para mostrar doc pdf


const [theme, setTheme] = useState(false); //Temas => claro: true, Oscuro: false


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


    {(placeId) &&
      <>
      
      <WeatherBar 
      places={places}
      placeId={placeId}
      units={units}
      unitSystem = {unitSystem} 
      />

      <button 
      onClick= { ()=> setViewPdf(!viewPdf) }>
        {(!viewPdf)? 'Ver PDF': 'Ocultar PDF'}
      </button>
      {(viewPdf) &&
        <PDFViewer style={{width:'40%', height:'100vh'}}>
            
          <DocPdf 
            places={places}
            placeId={placeId}
            units={units}
            unitSystem = {unitSystem}
          />

        </PDFViewer>
      }

      {/* <PrintBar
      /> */}
      </>
 
    
    }


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

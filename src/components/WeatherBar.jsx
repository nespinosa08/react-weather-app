import { useEffect, useState } from "react"
import { getConditions } from "../helpers/getConditions"

export const WeatherBar = ({places, placeId}) => {

  const selectPlace = places.find(place=>place.id === placeId)

  const [weatherConditions, setWeatherConditions] = useState([]);

  useEffect(() => {
    let active = true;

    if (selectPlace){

      const fetchData = async ()=>{
        const resp = await getConditions(selectPlace);
        if (active){
          setWeatherConditions( resp );
        }
      }
      fetchData();
    
      return () => {
        active = false;
      }
    }

  }, [selectPlace])

  const {    
    deg,
    description,
    feels_like,
    humidity,
    icon,
    id,
    main,
    pressure,
    speed,
    temp,
    temp_max,
    temp_min,
    visibility
                } = weatherConditions;

  return (
    <>
    {(selectPlace) && 

      <> 
        <h3>Condiciones del Tiempo</h3>
        <div>Lugar: <strong>{selectPlace.name}</strong></div>

        <br></br>
        
        <div>Condiciones del tiempo: <strong>{`${description} $`} </strong></div>
        <div>Temp.: <strong>{`${temp} $`} </strong></div>
        <div>Sensación Térmica: <strong>{`${feels_like} $`} </strong></div>
        <div>Temp. min.: <strong>{`${temp_min} $`} </strong></div>
        <div>Temp. max.: <strong>{`${temp_max} $`} </strong></div>
        <div>Presion Atmosferica: <strong>{`${pressure} $`} </strong></div>
        <div>Humedad Relativa: <strong>{`${humidity} $`} </strong></div>
        <div>Velocidad del viento: <strong>{`${speed} $`} </strong></div>
      </>    
    }   
    </>
  )
}

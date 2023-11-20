import { useEffect, useState } from "react"
import { getConditions } from "../helpers/getConditions"

export const WeatherBar = ({places, placeId, units, unitSystem}) => {

  const selectPlace = places.find(place=>place.id === placeId)

  const [weatherConditions, setWeatherConditions] = useState([]);

  useEffect(() => {
    let active = true;

    if (selectPlace){

      const fetchData = async ()=>{
        const resp = await getConditions(selectPlace, units);
        if (active){
          setWeatherConditions( resp );
        }
      }
      fetchData();
    
      return () => {
        active = false;
      }
    }

  }, [selectPlace, units])

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
    visibility,
    // 1h
                } = weatherConditions;

  return (
    <>
    {(selectPlace) && 

      <> 
        <h4>Condiciones Climaticas</h4>
        
        <div>Lugar: <strong>{selectPlace.name}</strong></div>

        
        <div>Condición del tiempo:
          <strong>{` ${description.toUpperCase()}`} </strong>
          <img 
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={main}
          ></img>
        </div>


        <div>Temp.: <strong>{`${temp} ${unitSystem[units].temp}`} </strong></div>
        <div>Sensación Térmica: <strong>{`${feels_like} ${unitSystem[units].feels_like}`} </strong></div>
        <div>Temp. min.: <strong>{`${temp_min} ${unitSystem[units].temp_min}`} </strong></div>
        <div>Temp. max.: <strong>{`${temp_max} ${unitSystem[units].temp_max}`} </strong></div>
        <div>Presion Atmosferica: <strong>{`${pressure} ${unitSystem[units].pressure}`} </strong></div>
        <div>Humedad Relativa: <strong>{`${humidity} ${unitSystem[units].humidity}`} </strong></div>
        <div>Velocidad del viento: <strong>{`${speed} ${unitSystem[units].speed}`} </strong></div>
      </>    
    }   
    </>
  )
}

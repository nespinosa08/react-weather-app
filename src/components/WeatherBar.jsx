import { useContext, useEffect, useState } from "react"
import { getConditions } from "../helpers/getConditions"
import { ThemeContext } from "../context/ThemeContext";

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

  const {lon, lat, name} = selectPlace
  const url = `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/pin-s-l+000(${lon},${lat})/${lon},${lat},4/300x200?access_token=pk.eyJ1IjoibmVzcGlub3NhMDgiLCJhIjoiY2xuNWJlNmF1MDYwczJscGhreDJvdWwwbCJ9.gPkE4r_xmw26ya3FyQSyOg`


  // establecer el tema
  const theme = useContext(ThemeContext);
  const className = (theme)? 'light': 'dark'

  return (
    <>
    {(selectPlace) && 

      <> 
      <section
      className={className}
      >

        <h4>Condiciones Climaticas</h4>
        
        <div>Lugar: <strong>{name}</strong></div>

        
        <div>Condición del tiempo:
          <strong>{` ${description}`} </strong>
          <img 
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={main}
          />
        </div>


        <div>Temp.: <strong>{`${temp} ${unitSystem[units].temp}`} </strong></div>
        <div>Sensación Térmica: <strong>{`${feels_like} ${unitSystem[units].feels_like}`} </strong></div>
        <div>Temp. min.: <strong>{`${temp_min} ${unitSystem[units].temp_min}`} </strong></div>
        <div>Temp. max.: <strong>{`${temp_max} ${unitSystem[units].temp_max}`} </strong></div>
        <div>Presion Atmosferica: <strong>{`${pressure} ${unitSystem[units].pressure}`} </strong></div>
        <div>Humedad Relativa: <strong>{`${humidity} ${unitSystem[units].humidity}`} </strong></div>
        <div>Velocidad del viento: <strong>{`${speed} ${unitSystem[units].speed}`} </strong></div>
        <br />
       
        <div>Mapa</div>
        <img 
        src={url}
        alt="map"
        />

      </section>
      </>    
    }   
    </>
  )
}

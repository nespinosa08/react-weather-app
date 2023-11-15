import { Location } from "./Location"
import { WeatherConditions } from "./WeatherConditions"

export const WeatherBar = () => {
  return (
    <>
    <h3>Condiciones del Tiempo</h3>
    <Location
    //  loc = {loc}
     />
    <br></br>
    <WeatherConditions 
    // conditions={conditions}
    />
 
    
    </>
  )
}

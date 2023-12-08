

import { useContext, useEffect, useState } from "react"
import { getConditions } from "../helpers/getConditions"
import { ThemeContext } from "../context/ThemeContext";
import { Document, Image, Page, Text, View } from "@react-pdf/renderer"


export const DocPdf = ({places, placeId, units, unitSystem}) => {

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
    <Document>
        <Page size="A4">
  
    {(selectPlace) && 

      <> 
      <View
      className={className}
      style={{
        margin: 30,
        padding: 20,
        width: 500
      }}
      >

        <Text>Condiciones Climaticas</Text>
        
        <View> <Text>Lugar:{name}</Text></View>

        
        <View>
          <Text>Condición del tiempo:{` ${description}`} </Text>
          <Image 
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={main}
          style={{ width:100, display:"flex"}}
          />
        </View>


        <View><Text>Temp.:{ `${temp} ${unitSystem[units].temp}`} </Text></View>
        <View> <Text>Sensación Térmica:{`${feels_like} ${unitSystem[units].feels_like}`} </Text></View>
        <View> <Text>Temp. min.:{`${temp_min} ${unitSystem[units].temp_min}`} </Text></View>
        <View> <Text>Temp. max.:{`${temp_max} ${unitSystem[units].temp_max}`} </Text></View>
        <View> <Text>Presion Atmosferica:{`${pressure} ${unitSystem[units].pressure}`} </Text></View>
        <View> <Text>Humedad Relativa:{`${humidity} ${unitSystem[units].humidity}`} </Text></View>
        <View> <Text>Velocidad del viento:{`${speed} ${unitSystem[units].speed}`} </Text></View>
        {/* <br /> */}
       
        <Text>Mapa</Text>
        <Image
        src={url}
        alt="map"
        style={{ width:400, display:"flex", marginTop: 10}}

        />

      </View>
      </>    
    }   

        </Page>
    </Document>
    </>
  )
}

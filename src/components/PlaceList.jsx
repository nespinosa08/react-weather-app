import { useEffect, useState } from "react"
import { getPlaces } from "../helpers/getPlaces"

export const PlaceList =  ({filterText}) => {

const [places, setPlaces] = useState([]); //lista de lugares que arroja la busqueda
const [placeId, setPlaceId] = useState(''); //Id de lugar seleccionado de la lista

useEffect(()=>{
  let active = true;
  const fetchData = async ()=>{
    const resp = await getPlaces(filterText);
    if (active){
      setPlaces( resp );
    }
  }
  fetchData();

  return ()=>{
    active=false;
  };
}, [filterText]);

// console.log('places', places);



const listItem = places.map(place=>
  <div 
  key={place.id}
  onClick={()=>setPlaceId(place.id)}
  >
    {place.name}
  </div>
  ) ;

  console.log(placeId);

  const selectPlace = places.find(place=>place.id === placeId)

  console.log(selectPlace)

            
  return (
    <>
    <div>PlaceList</div>
    <ul>{listItem}</ul>
    { (selectPlace) && <div>Lugar Seleccionado: {selectPlace.name}</div> }
    </>
  )
}

import { useEffect } from "react"
import { getPlaces } from "../helpers/getPlaces"

export const PlaceList =  ({filterText, places, placeId, setPlaces, setPlaceId}) => {

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

const listItem = places.map(place=>
  <a 
  key={place.id}
  onClick={()=>setPlaceId(place.id)}
  >
    {place.name}
  </a>
  );
            
  return (
    <>
    { ((!placeId) && (filterText)) && 

      <>
      <div>Lista de opciones:</div>
      <ul>{listItem}</ul>
      </> 
    }
    </>
  )
}

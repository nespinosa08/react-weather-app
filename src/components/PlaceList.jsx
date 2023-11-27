import { useContext, useEffect } from "react"
import { getPlaces } from "../helpers/getPlaces"
import { ThemeContext } from "../context/ThemeContext";

export const PlaceList =  ({filterText, places, placeId, setPlaces, setPlaceId, historyPlaces, setHistoryPlaces}) => {

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

  const handleClick= (placeId)=>{
    setPlaceId(placeId);

    const selectPlace = places.find(place=> place.id === placeId);
    setHistoryPlaces(
      [selectPlace,
      ...historyPlaces]
    )
  }
    
  const listItem = places.map(place=>
    <a 
    href="#"
    key={place.id}
    onClick={()=>handleClick(place.id)}
    >
    {place.name}
  </a>
  );
    
  const theme = useContext(ThemeContext);
  const className = (theme)? 'light': 'dark'

  return (
    <>
    { ((!placeId) && (filterText)) && 

      <>
      <section
      className={className}      
      >

      <div>Lista de opciones:</div>
      <ul>{listItem}</ul>
        
      </section>
      </> 
    }
    </>
  )
}

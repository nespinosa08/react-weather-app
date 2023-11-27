import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../context/ThemeContext"

export const HistoryBar = ({historyPlaces}) => {
  const [onShow, setOnShow] = useState(false);
  
  const theme = useContext(ThemeContext);
  const className = (theme)? 'light': 'dark'

  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(historyPlaces))
  
  }, [historyPlaces])
  
  if ( historyPlaces.length===0 ) return
  
  const listItem = historyPlaces.map((place, i)=>{
    // mostrar solo 5 primeros elementos siempre (hasta i=4 )
    if (i>4) return
      
    return(
      <a 
      href='#'
      key={place.id}
      >
        {place.name}
      </a>
    )  
  });
  

  return (
    <>
      <button onClick={()=>setOnShow(!onShow)} >Historial</button>
        {(onShow)&&
        <>
          <section
          className={className}>
              <ul>
                {listItem}
              </ul>
            </section>
        </>
      }
    </>
  )
}

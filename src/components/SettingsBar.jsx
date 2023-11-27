import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";


export const SettingsBar = ({units, setUnits}) => {
  const [onShow, setOnShow] = useState(false)

  const theme = useContext(ThemeContext);
  const className = (theme)? 'light': 'dark'

  return (
    <>
      <button onClick={()=>setOnShow(!onShow)}>Configuración</button>
      { (onShow) &&

        <>
          <section
          className={className}
          >

            <label>Sistema de unidades
              <select 
              value = {units}
              onChange = {e => setUnits(e.target.value)}
              >
                <option value="standard">standard</option>
                <option value="metric">metric</option>
                <option value="imperial">imperial</option>
              </select>
            </label>
      
          </section>
        </>
      }    
    </>
  )
}



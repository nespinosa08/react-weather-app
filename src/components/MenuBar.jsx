import { FavoritesBar } from "./FavoritesBar"
import { SettingsBar } from "./SettingsBar"


export const MenuBar = ({units, setUnits}) => {
  return (
    <>
    <h3>Menú</h3>
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

    {/* <SettingsBar />
    <FavoritesBar /> */}
    </>
  )
}

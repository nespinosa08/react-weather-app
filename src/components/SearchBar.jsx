import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const SearchBar = ({filterText, setfilterText}) => {

  const theme = useContext(ThemeContext);
  const className = (theme)? 'light': 'dark'

  const handleSubmit = (e)=>{
    e.preventDefault();
  }

  return (
    <>
    <section 
    className={className}
    >

    <h4>Indique localidad</h4>

    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder="Buscar"
        value={filterText}
        onChange={(e)=>setfilterText(e.target.value)} />
    </form>

    </section>
    
    </>
  )
}

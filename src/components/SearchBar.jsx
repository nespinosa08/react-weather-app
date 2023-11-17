
export const SearchBar = ({filterText, setfilterText}) => {

  const handleSubmit = (e)=>{
    e.preventDefault();
  }

  return (
    <>
    <h3>Indique localidad</h3>

    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder="Buscar"
        value={filterText}
        onChange={(e)=>setfilterText(e.target.value)} />
    </form>
    
    </>
  )
}

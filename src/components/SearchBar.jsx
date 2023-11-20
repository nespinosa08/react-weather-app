
export const SearchBar = ({filterText, setfilterText}) => {

  const handleSubmit = (e)=>{
    e.preventDefault();
  }

  return (
    <>
    <h4>Indique localidad</h4>

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

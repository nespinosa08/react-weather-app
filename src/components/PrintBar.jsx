import jsPDF from "jspdf"

export const PrintBar = () => {
    const handleClick = ()=>{
    const doc = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        // format: [4, 2]
    })
    doc.text("hello chatico", 10, 10);
    doc.save("firstDoc.pdf")
        // Generar doc PDF
    }

  return (
<button onClick={handleClick}>Imprimir</button>
  )
}

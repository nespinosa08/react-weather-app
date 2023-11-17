
// indicar termino de busqueda
// USANDO MAPBOX
// Buscar lugares que coinciden con el termino de busqueda
// Seleccionar el lugar requerido (Obtener lat y lng)
// USANDO OPENWEATHER
// Obtener condiciones climaticas con lat y lng


export const getPlaces = async(term) => {
 try{
    const baseUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
    const query = {
        limit:      5,
        proximity:  'ip',
        language:   'es',
        token:      'pk.eyJ1IjoibmVzcGlub3NhMDgiLCJhIjoiY2xuNWJlNmF1MDYwczJscGhreDJvdWwwbCJ9.gPkE4r_xmw26ya3FyQSyOg'
    }
    const {limit, proximity, language, token} = query;

    const url = `${baseUrl}${term}.json?limit=${limit}&proximity=${proximity}&language=${language}&access_token=${token} `;

    const resp = await fetch(url);
    const data = await resp.json()
// arreglo de lugares que coinciden con el term
    const places = data.features.map(place=>({
        id:   place.id,
        name: place.place_name_es,
        lon:  place.center[0],
        lat:  place.center[1]
    }))

    return places

 }catch (err) {
    throw new Error('Término de busqueda no concide con ningun lugar de la BD')
 }
}

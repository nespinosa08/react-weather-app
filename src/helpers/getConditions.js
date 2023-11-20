
export const getConditions = async(place, uni) => {
    
    try{
        const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'
    const query = {
        lat:      place.lat,
        lon:  place.lon,
        language:   'es',
        // en, es, fr, de
        units: uni,
        // standard, metric, imperial
        token:      'f87c2df3a4816cee39b0791913f62e8f'
    }
    const {lat, lon, language, units, token} = query;

    const url = `${baseUrl}lat=${lat}&lon=${lon}&appid=${token}&units=${units}&lang=${language}`;

    const resp = await fetch(url);
    const data = await resp.json()
// objeto con condiciones climaticas del lugar
// No se requiere map. Solo retornar el objeto data.main ( y si es requerido adicinar otros elementos de la data)

    const conditions= { 
        ...data.main,
        ...data.weather[0],
        ...data.wind,
        ...data.rain,
        visibility:data.visibility,
      }
    return conditions

    } catch (err){
        throw new Error('Condiciones climáticas no disponibles')
    }
}


export const getConditions = async(loc) => {
    
    try{
        const url = '';
        const resp = await fetch(url);
        const data = await resp.json();
    
        const conditions = {
            temp: '',
            rain: '',
            wind: ''
        }
        return  conditions;

    } catch (err){
        throw new Error('Condiciones climáticas no disponibles')
    }
}

import { API_HOST } from "../utils/costants";

export async function getPokemonsApi(endpointUrl) {
    try {
        const url =API_HOST+'/pokemon?limit=20&offset=0';
        //console.log("here: "+url);
        //console.log("endpointurl: "+ endpointUrl);
        const response = await fetch(endpointUrl || url);
        const result = await response.json();
        return result;

    } catch (error) {
        throw error;
    }
}

export async function getPokemonDetailsByUrlApi(url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function getPokemonDetailsApi(id){
    try {
        const url = `${API_HOST}/pokemon/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        //console.log(error);
    }
}
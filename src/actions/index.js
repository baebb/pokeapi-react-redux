import axios from 'axios';
import { GET_POKEMANS } from './types';

const ROOT_URL = 'http://pokeapi.co/api/v2/';

export function getPokemans(page) {
    const offset = 20*(page-1);
    const url = `${ROOT_URL}pokemon/?offset=${offset}`
    const request = axios.get(url);

    return {
        type: GET_POKEMANS,
        payload: request
    }
}

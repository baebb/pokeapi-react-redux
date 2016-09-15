import { GET_POKEMANS } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case GET_POKEMANS:
            return action.payload.data.results;
    }
    return state;
}
import { combineReducers } from 'redux';
import PokemansReducer from './pokemans_reducer';

const rootReducer = combineReducers({
  pokemans: PokemansReducer
});

export default rootReducer;

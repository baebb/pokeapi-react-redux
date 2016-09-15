import { expect } from '../test_helper';
import {GET_POKEMANS} from '../../src/actions/types';
import PokemansReducer from '../../src/reducers/pokemans_reducer';

describe('Pokemans reducer', () => {
    it('handles action with unknown type', () => {
        const action = { type: 'GET_REKT', payload: { data: { results: { test: "fake data" }}}};
        expect(PokemansReducer([], action)).to.eql([]);
    })

    it('handle action of GET_POKEMANS', () => {
        const action = { type: 'GET_POKEMANS', payload: { data: { results: { test: "fake data" }}}};
        expect(PokemansReducer([], action)).to.eql({ test: "fake data" });
    })
})
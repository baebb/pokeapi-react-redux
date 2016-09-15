import {expect} from '../test_helper';
//types
import {GET_POKEMANS} from '../../src/actions/types';
//action functions
import {getPokemans} from '../../src/actions/index';

describe('Actions', () => {
    describe('Get page of Pokemon', () => {
        let action;
        const testPageId = 3;

        it('has the correct type', () => {
            action = getPokemans(testPageId);
            expect(action.type).to.equal(GET_POKEMANS);
        })

        it('gets the correct page of pokemon', (done) => {
            action = getPokemans(testPageId);
                action.payload.then((result) => {
                    expect(result.data.next.slice(-2)).to.equal('60');
                    done();
                })
                .catch((error) => {
                    console.log(error);
                    done(error);
                })

        })

        it('handles unknown page', (done) => {
            action = getPokemans(2234234);
            action.payload.then((result) => {
                expect(result.data.results).to.be.empty;
                done()
            })
                .catch((error) => {
                    console.log(error);
                    done(error);
                })
        })
    })
})
import React from 'react';
import {connect} from 'react-redux';
import {getPokemans} from '../../src/actions/index';


class Home extends React.Component {
    render() {
        return (
            <div>
                <ul></ul>
                <p>Sup Ross</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        pokemans: state.pokemans
    }
}

export default connect(mapStateToProps, {getPokemans})(Home);
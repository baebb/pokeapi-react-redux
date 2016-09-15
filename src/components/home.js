import React from 'react';
import {connect} from 'react-redux';
import {getPokemans} from '../../src/actions/index';
import {Link} from 'react-router';

class Home extends React.Component {
    componentWillMount() {
        this.props.getPokemans(this.props.params.page);
    }

    renderPokeman(pokeman) {
        console.log(pokeman.name);
        return (
            <div className="list-group-item" key={pokeman.name}>{pokeman.name}</div>
        )
    }

    render() {
        console.log(this.props.pokemans);
        const {pokemans} = this.props;

        if (!pokemans) {
            return (
                <div className="row">
                    <p>Loading...</p>
                </div>
            )
        }

        return (
            <div className="row">
                <div className="col-xs-12 col-md-4 offset-md-4 text-xs-center">
                    <h1 className="display-4">Pokemans!</h1>
                    <ul className="list-group">
                        {this.props.pokemans.map(this.renderPokeman)}
                    </ul>
                    <div className="row btnRow">
                        <div className="col-xs-6 text-xs-left">

                        </div>
                        <div className="col-xs-6 text-xs-right">

                        </div>
                    </div>
                </div>
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
import React from 'react';
import {connect} from 'react-redux';
import {getPokemans} from '../../src/actions/index';
import {Link} from 'react-router';

let loaded;

class Home extends React.Component {
    componentWillMount() {
        this.props.getPokemans(this.props.params.page);
    }

    componentWillReceiveProps(props) {
        if (Number(this.props.params.page) !== Number(props.params.page)) {
            props.getPokemans(props.params.page);
            loaded = false;
        } else {
            loaded = true;
        }
    }

    renderPokeman(pokeman) {
        return (
            <div className="list-group-item" key={pokeman.name}>{pokeman.name}</div>
        )
    }

    render() {
        const {pokemans} = this.props;
        const {page} = this.props.params;

        return (
            <div className="row">
                <div className="col-xs-12 col-md-4 offset-md-4 text-xs-center">
                    <h1 className="display-4">Pokemans!</h1>
                    <div className="row btnRow">
                        <div className="col-xs-6 text-xs-left">
                            <Link
                                to={"/pokeman/" + (Number(page) - 1)}
                                disabled={page === '1'}
                                className={page === '1' ? "btn btn-danger disabled" : "btn btn-danger"}
                            >Back
                            </Link>
                        </div>
                        <div className="col-xs-6 text-xs-right">
                            <Link
                                to={"/pokeman/" + (Number(page) + 1)}
                                disabled={page === '41'}
                                className={page === '41' ? "btn btn-primary disabled" : "btn btn-primary"}
                            >Next
                            </Link>
                        </div>
                    </div>
                    <ul className="list-group">
                        {loaded ? pokemans.map(this.renderPokeman) : <div>Loading...</div> }
                    </ul>
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
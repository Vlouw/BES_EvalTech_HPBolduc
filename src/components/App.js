import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Search from './Search';
import ToadShort from './ToadShort';
import Map from './Map'
import sampleToads from '../sample-toad';


class App extends React.Component {
    // Set state
    state = {
        toads: {}
    };

    // Validate propTypes
    static propTypes = {
    
    }

    // Used for dev to load info from file
    loadSampleToads = () => {
        this.setState({toads: sampleToads});
    }

    // Forced function in React
    render() {
        // Return what we want to show on the APP page
        return (
            <React.Fragment>
                <Header/>
                <Search/>
                <div className='div-bot'>
                    <div className='toad-inventory'>
                        <h2>Toad Inventory</h2>
                        <button onClick={this.loadSampleToads}>Load Sample Toads</button>
                        <ul className="toads">
                            {Object.keys(this.state.toads).map(key => <ToadShort key={key} index={key} details={this.state.toads[key]}></ToadShort>)}
                        </ul>
                    </div>
                    <Map toads={this.state.toads} zoomLevel={17}/>
                </div>
            </React.Fragment>
        )
    }
}

export default App;
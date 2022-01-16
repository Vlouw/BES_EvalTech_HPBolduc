import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Search from './Search';
import ToadShort from './ToadShort';
import ToadFull from './ToadFull';
import Map from './Map'
import sampleToads from '../sample-toad';
import base from "../base";


class App extends React.Component {
    // Set state
    state = {
        toads: {},
        toggleFull: false,
        keyFull: null
    };

    // Validate propTypes
    static propTypes = {
    
    }

    // On page load - sync with firebase
    componentDidMount() {
        this.ref = base.syncState(`/toads`, {
            context: this,
            state: 'toads'
        });
    }

    // On page unload - unlink firebase
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    // Used for dev to load info from file
    loadSampleToads = () => {
        this.setState({toads: sampleToads});
    }

    // Add New Toad
    addToad = toad => {
        const toads = {...this.state.toads};
        toads[`toad${Date.now()}`] = toad;
        this.setState({ toads });
        currentTarget.reset();
    };
    
    // Update Toad by copying the full state to prevent modification errors / memory leak
    updateToad = (key, updatedToad) => {
        const toads = { ...this.state.toads};
        toads[key] = updatedToad;
        this.setState({toads});
    }

    // Update Toad by copying the full state to prevent modification errors / memory leak
    deleteToad = key => {
        this.setState({ toggleFull: !this.state.toggleFull });
        const toads = { ...this.state.toads};
        
        // Delete when not sync'ed with Firebase
        // delete toads[key];

        // Delete when sync'ed with Firebase
        toads[key] = null;
        this.setState({toads});
    }

    // Show/Hide full description
    toggleFull = (key) => {
        if (this.state.keyFull == key || this.state.keyFull == null) {
            this.setState({ toggleFull: !this.state.toggleFull })            
        }
        this.setState({ keyFull: key })
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
                        <button onClick={this.loadSampleToads}>Load Sample Toads (Dev Button)</button>
                        <ul className="toad-inventory-ul">
                            {Object.keys(this.state.toads).map(key => <ToadShort 
                                                                            key={key} 
                                                                            index={key} 
                                                                            toad={this.state.toads[key]} 
                                                                            toggleFull={this.toggleFull}
                                                                        />)}
                        </ul>
                    </div>
                    {this.state.toggleFull && 
                        <ToadFull 
                            key={this.state.keyFull} 
                            index={this.state.keyFull} 
                            toad={this.state.toads[this.state.keyFull]}
                            toggleFull={this.toggleFull}
                            updateToad={this.updateToad}
                            deleteToad={this.deleteToad}
                            />} 
                    <Map 
                        toads={this.state.toads} 
                        zoomLevel={17}
                        toggleFull={this.toggleFull}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default App;
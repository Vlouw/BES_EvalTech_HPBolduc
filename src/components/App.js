import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Search from './Search';
import Inventory from './Inventory';
import ToadFull from './ToadFull';
import ToadNew from './ToadNew';
import Map from './Map'
import sampleToads from '../sample-toad';
import base from "../base";


class App extends React.Component {
    // Set state
    state = {
        toads: {},
        toggleFull: false,
        toggleNew: false,
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

    // Add Toad
    addToad = toad => {
        const toads = {...this.state.toads};
        toads[`toad${Date.now()}`] = toad;
        this.setState({ toads });
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
        this.setState({ toggleNew: false })
        
        if (this.state.keyFull == key || this.state.keyFull == null || this.state.toggleNew) {
            this.setState({ toggleFull: !this.state.toggleFull })            
        }
        this.setState({ toggleNew: false })
        this.setState({ keyFull: key })
    }
    
    // Show/Hide Create New Toad
    toggleNew = () => {
        this.setState({ toggleFull: false })
        this.setState({ toggleNew: !this.state.toggleNew })          
    }

    // Forced function in React
    render() {
        // Return what we want to show on the APP page
        return (
            <React.Fragment>
                <Header/>
                <Search/>
                <div className='div-bot'>
                    <Inventory
                        toads={this.state.toads}
                        toggleFull={this.toggleFull}
                        loadSampleToads={this.loadSampleToads}
                        toggleNew={this.toggleNew}
                    />                    
                    {this.state.toggleFull &&
                        <ToadFull 
                            key={this.state.keyFull} 
                            index={this.state.keyFull} 
                            toad={this.state.toads[this.state.keyFull]}
                            toggleFull={this.toggleFull}
                            updateToad={this.updateToad}
                            deleteToad={this.deleteToad}
                            />}                            
                    {this.state.toggleNew &&
                        <ToadNew
                            addToad={this.addToad}
                            toggleNew={this.toggleNew}
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
import React from 'react';
import Header from './Header';
import Search from './Search';
import Inventory from './Inventory';
import ToadFull from './ToadFull';
import ToadNew from './ToadNew';
import ToadEdit from './ToadEdit';
import Map from './Map';
import sampleToads from '../sample-toad';
import base from "../base";

class App extends React.Component {
    // Set state
    state = {
        toads: {},
        toggleFull: false,
        toggleNew: false,
        toggleEdit: false,
        keyFull: null,
        search: {},
        filteredToads: {}
    };

    // On page load - sync with firebase
    componentDidMount() {
        this.ref = base.syncState(`/toads`, {
            context: this,
            state: 'toads'
        });

        // Set TimeOut or else the code is read to fast for the data to transfer
        setTimeout(() => {
            this.setState({filteredToads: this.state.toads});
            }, 1000);
    };

    // On page unload - unlink firebase
    componentWillUnmount() {
        base.removeBinding(this.ref);
    };

    // Used for dev to load info from file
    loadSampleToads = () => {
        this.setState({toads: sampleToads});
    };

    // Add Toad
    addToad = toad => {
        const toadkey = `toad${Date.now()}`;
        
        const toads = {...this.state.toads};
        toads[toadkey] = toad;
        this.setState({ toads });

        const filteredToads = {...this.state.filteredToads};
        filteredToads[toadkey] = toad;
        this.setState({ filteredToads });
    };
    
    // Update Toad by copying the full state to prevent modification errors / memory leak
    updateToad = (key, updateToad) => {
        const toads = { ...this.state.toads};
        toads[key] = updateToad;
        this.setState({toads});

        const filteredToads = { ...this.state.filteredToads};
        filteredToads[key] = updateToad;
        this.setState({filteredToads});
    };

    // Update Toad by copying the full state to prevent modification errors / memory leak
    deleteToad = key => {
        this.setState({ toggleFull: !this.state.toggleFull });
        const toads = { ...this.state.toads};
        toads[key] = null;
        this.setState({toads});

        const filteredToads = { ...this.state.filteredToads};
        delete filteredToads[key];
        this.setState({filteredToads});   
    };

    // Show/Hide full description
    toggleFull = (key) => {
        this.setState({ toggleNew: false });
        this.setState({ toggleEdit: false });
        
        if (this.state.keyFull == key || this.state.keyFull == null) {
            this.setState({ toggleFull: !this.state.toggleFull });
        };

        this.setState({ keyFull: key });
    };
    
    // Show/Hide Create New Toad
    toggleNew = () => {
        this.setState({ toggleFull: false });
        this.setState({ toggleEdit: false });
        this.setState({ toggleNew: !this.state.toggleNew });       
    };

    // Show/Hide Create New Toad
    toggleEdit = () => {        
        this.setState({ toggleNew: false });
        this.setState({ toggleEdit: !this.state.toggleEdit });   
        this.setState({ toggleFull: false });           
    };

    // Show/Hide Create New Toad
    updateSearch = (search) => {
        // Set state
        this.setState({ search })
        this.setState({ filteredToads: {} });
        
        // Set timeOut to ensure filteredToads is cleaned prior to filtering the toads
        setTimeout(() => {
            {Object.keys(this.state.toads).map(key => {
                // Show true
                let show = true;

                // Validate conditions, if it doesn't meet, set show false
                if (search.minPrice > this.state.toads[key].price && search.minPrice != "")
                    show = false;

                if (search.maxPrice < this.state.toads[key].price && search.maxPrice != "")
                    show = false;

                if (search.minDate > this.state.toads[key].date)
                    show = false;

                if (search.maxDate < this.state.toads[key].date)
                    show = false;

                if (search.frontlamp && !this.state.toads[key].frontLamp)
                    show = false;

                if (search.backpack && !this.state.toads[key].backpack)
                    show = false;
                
                if (search.helmet && !this.state.toads[key].helmet)
                    show = false;

                if (search.freeUP && !this.state.toads[key].freeUP)
                    show = false;

                if (search.goldMushroom && !this.state.toads[key].goldMushroom)
                    show = false;

                if (search.invMushroom && !this.state.toads[key].invMushroom)
                    show = false;

                // If show true, add toad to filteredToads
                if (show) {
                    const filteredToads = { ...this.state.filteredToads};
                    filteredToads[key] = this.state.toads[key];
                    this.setState({filteredToads});
                };
            })}
        }, 50);
    };

    // Forced function in React
    render() {
        // Return what we want to show on the APP page
        return (
            <React.Fragment>
                <Header/>
                <Search 
                    search={this.state.search}
                    updateSearch={this.updateSearch}
                />
                <div className='div-bot'>
                    <Inventory
                        toads={this.state.filteredToads}
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
                            toggleEdit={this.toggleEdit}
                            deleteToad={this.deleteToad}
                            />}                            
                    {this.state.toggleNew &&
                        <ToadNew
                            addToad={this.addToad}
                            toggleNew={this.toggleNew}
                        />}
                    {this.state.toggleEdit &&
                        <ToadEdit
                            key={this.state.keyFull} 
                            index={this.state.keyFull} 
                            toad={this.state.toads[this.state.keyFull]}
                            updateToad={this.updateToad}
                            toggleEdit={this.toggleEdit}
                        />} 
                    <Map 
                        toads={this.state.filteredToads} 
                        zoomLevel={17}
                        toggleFull={this.toggleFull}
                    />
                </div>
            </React.Fragment>
        );
    };
};

export default App;
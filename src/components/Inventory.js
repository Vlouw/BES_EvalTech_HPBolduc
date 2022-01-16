import React from 'react';
import PropTypes from "prop-types";
import ToadShort from './ToadShort';

class Inventory extends React.Component {
    // Validate propTypes
    static propTypes = {
        toads: PropTypes.object,
        toggleFull: PropTypes.func,
        loadSampleToads: PropTypes.func,
        toggleNew: PropTypes.func
    };

    // Forced function in React
    render() {
        return (
            <div className='toad-inventory'>
                <h2>Toad Inventory</h2>
                <button onClick={this.props.loadSampleToads}>Load Sample Toads (Dev Button)</button>
                <button onClick={this.props.toggleNew}>Create New Toad</button>
                <ul className="toad-inventory-ul">
                    {Object.keys(this.props.toads).map(key => <ToadShort 
                                                                    key={key} 
                                                                    index={key} 
                                                                    toad={this.props.toads[key]} 
                                                                    toggleFull={this.props.toggleFull}
                                                                />)}
                </ul>   
            </div>        
        )
    }
}

export default Inventory;
import React from 'react';
import PropTypes from 'prop-types';
import ToadShort from './ToadShort';

class Inventory extends React.Component {
    // Validate propTypes
    static propTypes = {
        toads: PropTypes.object,
        loadSampleToads: PropTypes.func,
        toggleFull: PropTypes.func,
        toggleNew: PropTypes.func,
        toggleEdit: PropTypes.func
    };

    // Forced function in React
    render() {
        return (
            <div className='toad-inventory'>
                <h2>Toad Inventory</h2>
                {/*<button onClick={this.props.loadSampleToads}>Load Sample Toads (Dev Button)</button>*/}
                <button onClick={this.props.toggleNew}>New-A-Toad</button>
                <ul className='toad-inventory-ul'>
                    {Object.keys(this.props.toads).map(key => <ToadShort 
                                                                    key={key} 
                                                                    index={key} 
                                                                    toad={this.props.toads[key]} 
                                                                    toggleFull={this.props.toggleFull}
                                                                    toggleEdit={this.props.toggleEdit}
                                                                />)}
                </ul>   
            </div>        
        )
    }
}

export default Inventory;
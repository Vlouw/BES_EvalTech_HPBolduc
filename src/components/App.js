import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header'
import Search from './Search'


class App extends React.Component {
    // Set state
    state = {
        toads: {}
    };

    // Validate propTypes
    static propTypes = {
    
    }

    // Forced function in React
    render() {
        // Return what we want to show on the APP page
        return (
            <React.Fragment>
                <Header/>
                <Search/>
            </React.Fragment>
        )
    }
}

export default App;
import React from 'react';
import PropTypes from 'prop-types';

class MainPage extends React.Component {  
    // Validate propTypes
    static propTypes = {
        history : PropTypes.object,
    };

    // Function goToRat
    goToRAT = event => {
        // Stop the form from submitting
        event.preventDefault();      

        // Change the page to /RAT
        this.props.history.push(`/RAT`);
    };
    
    // Forced function in React
    render() {       
        // Return what we want to show on the main page
        return (                
                <form className='mainPage-form' onSubmit={this.goToRAT}>
                    <img src='/images/toad-mainpage.png' alt='Rent-A-Toad' />
                    <h2>Rent-A-Toad</h2>
                    <button type='submit'>Already for a mushroom!</button>
                </form>       
        );
    };
};

export default MainPage;
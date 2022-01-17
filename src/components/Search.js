import React, { useState } from 'react';
import PropTypes from "prop-types";
import SelectDate from './SelectDate';

class Search extends React.Component {
    static propTypes = {
        search: PropTypes.object,
        updateSearch: PropTypes.func
    }

    handleChange = event => {
        const updatedSearch = {
            ...this.props.search,
            [event.currentTarget.name]: event.currentTarget.value
        };

        this.props.updateSearch(updatedSearch);
    }

    handleChangeCheckBox = event => {
        const updatedSearch = {
            ...this.props.search,
            [event.currentTarget.name]: event.currentTarget.checked ? true : false
        };

        this.props.updateSearch(updatedSearch);
    }

    handleChangeDate = (date, min) => {
        let updatedSearch = {};
        
        if (min) {
            updatedSearch = {
                ...this.props.search,
                ['minDate']: date.getTime()
            };
        } else {
            updatedSearch = {
                ...this.props.search,
                ['maxDate']: date.getTime()
            };
        }

        this.props.updateSearch(updatedSearch);
    }

    // Forced function in React
    render() {
        // Return what we want to show on the main page
        return (                
            <form className='search'>
                <div>
                    <p>Price (Cents)</p>
                    <input type="number" name="minPrice" placeholder='min' onChange={this.handleChange}/><br />
                    <input type="number" name="maxPrice" placeholder='max' onChange={this.handleChange}/>
                </div>
                <div>
                    <div>
                        <input type="checkbox" id="frontlamp" name="frontlamp" value="frontlamp" onChange={this.handleChangeCheckBox}/>
                        <label htmlFor="frontlamp"> Front Lamp</label><br />
                        <input type="checkbox" id="backpack" name="backpack" value="backpack" onChange={this.handleChangeCheckBox}/>
                        <label htmlFor="backpack"> Backpack</label><br />
                        <input type="checkbox" id="helmet" name="helmet" value="helmet" onChange={this.handleChangeCheckBox}/>
                        <label htmlFor="helmet"> Helmet</label><br />
                    </div>
                    <div>
                        <input type="checkbox" id="freeUP" name="freeUP" value="freeUP" onChange={this.handleChangeCheckBox}/>
                        <label htmlFor="freeUP"> Free Up</label><br />
                        <input type="checkbox" id="goldMushroom" name="goldMushroom" value="goldMushroom" onChange={this.handleChangeCheckBox}/>
                        <label htmlFor="goldMushroom"> Gold Mushroom</label><br />
                        <input type="checkbox" id="invMushroom" name="invMushroom" value="invMushroom" onChange={this.handleChangeCheckBox}/>
                        <label htmlFor="invMushroom"> Invincibility Mushroom</label>
                    </div>    
                </div>
                <div>       
                    <p>Start Date</p>
                    <SelectDate 
                        defaultDate={0} 
                        handleChangeDate={this.handleChangeDate}
                        min={true}
                    />
                    <p>End Date</p>
                    <SelectDate 
                        defaultDate={Date.now()}
                        handleChangeDate={this.handleChangeDate}
                        min={false}
                    />
                </div>
            </form>
        );
    };
};

export default Search;
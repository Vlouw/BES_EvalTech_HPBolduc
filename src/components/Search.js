import React, { useState } from 'react';
import PropTypes from "prop-types";
import SelectDate from './SelectDate';

class Search extends React.Component {
    // Forced function in React
    render() {
        // Return what we want to show on the main page
        return (                
            <form className='search'>
                <div>
                    <p>Price (Cents)</p>
                    <input type="number" placeholder='min'/><br />
                    <input type="number" placeholder='max'/>
                </div>
                <div>
                    <div>
                        <input type="checkbox" id="frontlamp" name="frontlamp" value="frontlamp"/>
                        <label for="frontlamp"> Front Lamp</label><br />
                        <input type="checkbox" id="backpack" name="backpack" value="backpack"/>
                        <label for="backpack"> Backpack</label><br />
                        <input type="checkbox" id="helmet" name="helmet" value="helmet"/>
                        <label for="helmet"> Helmet</label><br />
                    </div>
                    <div>
                        <input type="checkbox" id="freeUP" name="freeUP" value="freeUP"/>
                        <label for="freeUP"> Free Up</label><br />
                        <input type="checkbox" id="goldMushroom" name="goldMushroom" value="goldMushroom"/>
                        <label for="goldMushroom"> Gold Mushroom</label><br />
                        <input type="checkbox" id="invincibilityMushroom" name="invincibilityMushroom" value="invincibilityMushroom"/>
                        <label for="invincibilityMushroom"> Invincibility Mushroom</label>
                    </div>    
                </div>
                <div>       
                    <p>Start Date</p>
                    <SelectDate />
                    <p>End Date</p>
                    <SelectDate />
                </div>
            </form>
        );
    };
};

export default Search;
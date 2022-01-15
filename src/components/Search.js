import React, { useState } from 'react';
import PropTypes from "prop-types";
import SelectDate from './SelectDate';


class Search extends React.Component {
    // Forced function in React
    render() {
        // Return what we want to show on the main page
        return (                
            <form action="">
                <div>
                    <p>Price</p>
                    <input type="number" placeholder='min'/><br />
                    <input type="number" placeholder='max'/>
                </div>
                <div>
                    <input type="checkbox" id="frontlamp" name="frontlamp" value="frontlamp" checked/>
                    <label for="frontlamp"> Front Lamp</label><br />
                    <input type="checkbox" id="backpack" name="backpack" value="backpack" checked/>
                    <label for="backpack"> Backpack</label><br />
                    <input type="checkbox" id="helmet" name="helmet" value="helmet" checked/>
                    <label for="helmet"> Helmet</label><br />
                    <input type="checkbox" id="freeUP" name="freeUP" value="freeUP" checked/>
                    <label for="freeUP"> Free Up</label><br />
                    <input type="checkbox" id="goldMushroom" name="goldMushroom" value="goldMushroom" checked/>
                    <label for="goldMushroom"> Gold Mushroom</label><br />
                    <input type="checkbox" id="invincibilityMushroom" name="invincibilityMushroom" value="invincibilityMushroom" checked/>
                    <label for="invincibilityMushroom"> Invincibility Mushroom</label>
            </div>
                <div>
                    <p>Date Début</p>
                    <SelectDate />
                </div>
                <div>
                    <p>Date Fin</p>
                    <SelectDate />
                </div>  
                
            </form>
        );
    };
};

export default Search;
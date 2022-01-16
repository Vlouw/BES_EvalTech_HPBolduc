import React from 'react';
import PropTypes from 'prop-types';
import {formatPrice} from "../helpers"
import Moment from 'react-moment';
import 'moment-timezone';

class ToadFull extends React.Component {
    // Validate prop type
    static propTypes = {
        toad: PropTypes.shape({
            name : PropTypes.string, 
            image : PropTypes.string, 
            desc : PropTypes.string, 
            lat :  PropTypes.number,
            lng : PropTypes.number,
            frontLamp : PropTypes.bool,
            backpack : PropTypes.bool,
            helmet : PropTypes.bool,
            freeUP : PropTypes.bool,
            goldMushroom : PropTypes.bool,
            invMushroom : PropTypes.bool,
            price : PropTypes.number, 
            date : PropTypes.number, 
            available : PropTypes.bool}),
        toggleFull: PropTypes.func,
        updateToad: PropTypes.func,
        deleteToad: PropTypes.func,
        index: PropTypes.string
    }

    // Update toad availability
    handleChange = (available) => {
        const updatedToad = {
            ...this.props.toad,
            ['available']: !available
        };
        this.props.updateToad(this.props.index, updatedToad);
    }
    
    // Force function in React
    render() {
        // Set constant passed from APP
        const {name, image, desc, lat, lng, frontLamp, backpack, helmet, freeUP, goldMushroom, invMushroom, price, date, available} = this.props.toad;

        // Return what we want to show in the full description area
        return (
            <div className="toad-full">
                <div className="toad-full-close">
                    <button onClick={() => this.props.toggleFull(this.props.index)}>X</button>  
                </div>
                <div>
                    <div>
                        <img src={image} alt={name} />
                    </div>
                    <h3 className="toad-full-name">{name}
                        <br />
                        <span className="toad-full-price">{formatPrice(price)}</span>
                    </h3>
                    <p className="toad-full-desc">{desc}</p>
                    <div>
                        <h4>Location :</h4>
                        <p>Latitude : {lat}</p>
                        <p>Longitude : {lng}</p>
                    </div>  
                    <div>
                        <h4>Amneties :</h4>
                        {/* If option is true show */}
                        {frontLamp && <p>Front Lamp</p>} 
                        {backpack && <p>Backpack</p>} 
                        {helmet && <p>Helmet</p>} 
                        {freeUP && <p>Free UP</p>} 
                        {goldMushroom && <p>Gold Mushroom</p>} 
                        {invMushroom && <p>Invincibility Mushroom</p>}
                    </div>                 
                    <h4>Listed on:</h4>
                    <p><Moment format="YYYY/MM/DD">{date}</Moment></p>
                    <button onClick={() => this.handleChange(available)}>{available ? 'Rent-A-Toad' : 'Return Home'}</button>
                    <br />
                    <button onClick={() => this.props.deleteToad(this.props.index)}>Delete-A-Toad</button>    
                </div>                            
            </div>                     
        )
    }
}

export default ToadFull;
import React from 'react';
import PropTypes from 'prop-types';
import {formatPrice} from "../helpers"
import Moment from 'react-moment';
import 'moment-timezone';

class ToadShort extends React.Component {
    static propTypes = {
        toad: PropTypes.shape({
            name : PropTypes.string, 
            image : PropTypes.string, 
            desc : PropTypes.string, 
            price : PropTypes.number, 
            date : PropTypes.number, 
            available : PropTypes.bool}),
        toggleFull: PropTypes.func
    }

        
    render() {
        const {name, image, desc, price, date, available} = this.props.toad;

        return (
            <li className="toad-inventory-list">
                <img src={image} alt={name} />
                <div>
                    <h3 className="toad-inventory-name">{name} <br />
                    <span className="toad-inventory-price">{formatPrice(price)}</span></h3>
                    <p>{desc}</p>
                    <p>Listed on: <br /><Moment format="YYYY/MM/DD">{date}</Moment></p>
                    <button onClick={() => this.props.toggleFull(this.props.index)}>{available ? 'Rent-A-Toad' : 'Return Home'}</button>
                </div>
            </li>                     
        )
    }
}

export default ToadShort;
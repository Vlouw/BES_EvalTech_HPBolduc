import React from 'react';
import PropTypes from 'prop-types';
import {formatPrice} from "../helpers"
import Moment from 'react-moment';
import 'moment-timezone';

class ToadShort extends React.Component {
    static propTypes = {
        details: PropTypes.shape({
            name : PropTypes.string, 
            image : PropTypes.string, 
            desc : PropTypes.string, 
            price : PropTypes.number, 
            date : PropTypes.number, 
            available : PropTypes.bool})
    }

    handleClick = key => {
        alert('Test');
    }
        
    render() {
        const {name, image, desc, price, date, available} = this.props.details;

        return (
            <li className="toad-list">
                <img src={image} alt={name} />
                <div>
                    <h3 className="toad-name">{name} <br />
                    <span className="price">{formatPrice(price)}</span></h3>
                    <p>{desc}</p>
                    <p>Listed on: <br /><Moment format="YYYY/MM/DD">{date}</Moment></p>
                    <button disabled={!available} onClick={this.handleClick}>{available ? 'Rent-A-Toad' : 'On a  mission'}</button>
                </div>
            </li>                     
        )
    }
}

export default ToadShort;
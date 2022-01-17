import React from 'react';
import PropTypes from 'prop-types';

class ToadEdit extends React.Component {
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
            price : PropTypes.number}),
        updateToad: PropTypes.func,
        toggleEdit: PropTypes.func,
        index: PropTypes.string
    };

    // Handle change for input event
    handleChange = (event) => {
        const updateToad = {
            ...this.props.toad,
            [event.currentTarget.name]: event.currentTarget.value
        };

        this.props.updateToad(this.props.index, updateToad);
    };

    // Handle change for CheckBox event
    handleChangeCheckBox = event => {
        const updateToad = {
            ...this.props.toad,
            [event.currentTarget.name]: event.currentTarget.checked ? true : false
        };

        this.props.updateToad(this.props.index, updateToad);
    };

    // Handle change for CheckBox event
    handleChangeNumber = event => {
        const updateToad = {
            ...this.props.toad,
            [event.currentTarget.name]: parseFloat(event.currentTarget.value)
        };

        this.props.updateToad(this.props.index, updateToad);
    };

    // Force function in React
    render () {
        // Set constant passed from APP
        const {name, image, desc, lat, lng, frontLamp, backpack, helmet, freeUP, goldMushroom, invMushroom, price} = this.props.toad;

        return (
            <div className='toad-new'>
                <div className='toad-full-close'>
                    <button type="button" onClick={this.props.toggleEdit}>X</button>  
                </div>
                <p>Image:</p>
                <input type='text' className='image' defaultValue={image} onChange={this.handleChange}/>
                <p>Name:</p>
                <input type='text' name='name' defaultValue={name} onChange={this.handleChange}/>
                <p>Price (Cents):</p>
                <input type='number' name='price' defaultValue={price} onChange={this.handleChangeNumber}/>    
                <p>Description:</p>            
                <textarea name='desc' defaultValue={desc} onChange={this.handleChange}/>
                <p>Latitude:</p>                
                <input type='text' name='lat' defaultValue={lat} onChange={this.handleChangeNumber}/>
                <p>Longitude:</p>
                <input type='text' name='lng' defaultValue={lng} onChange={this.handleChangeNumber}/>
                <p>Amneties:</p>
                <div>
                    <input type='checkbox' id='frontlampEdit' name='frontlampEdit' value='frontlampEdit' defaultChecked={frontLamp} onChange={this.handleChangeCheckBox}/>
                    <label htmlFor='frontlampEdit'> Front Lamp</label>
                </div>
                <div>
                    <input type='checkbox' id='backpackEdit' name='backpackEdit' value='backpackEdit' defaultChecked={backpack} onChange={this.handleChangeCheckBox}/>
                    <label htmlFor='backpackEdit'> Backpack</label>
                </div>
                <div>
                    <input type='checkbox' id='helmetEdit' name='helmetEdit' value='helmetEdit' defaultChecked={helmet} onChange={this.handleChangeCheckBox}/>
                    <label htmlFor='helmetEdit'> Helmet</label>
                </div>
                <div>
                    <input type='checkbox' id='freeUPEdit' name='freeUPEdit' value='freeUPEdit' defaultChecked={freeUP} onChange={this.handleChangeCheckBox}/>
                    <label htmlFor='freeUPEdit'> Free Up</label>
                </div>
                <div>
                    <input type='checkbox' id='goldMushroomEdit' name='goldMushroomEdit' value='goldMushroomEdit' defaultChecked={goldMushroom} onChange={this.handleChangeCheckBox}/>
                    <label htmlFor='goldMushroomEdit'> Gold Mushroom</label>
                </div>
                <div>
                    <input type='checkbox' id='invMushroomEdit' name='invMushroomEdit' value='invMushroomEdit' defaultChecked={invMushroom} onChange={this.handleChangeCheckBox}/>
                    <label htmlFor='invMushroomEdit'> Invincibility Mushroom</label>
                </div>
            </div>
        );
    };
};

export default ToadEdit;
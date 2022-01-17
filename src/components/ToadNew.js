import React from "react";
import PropTypes from "prop-types";

class ToadNew extends React.Component {
    nameRef = React.createRef();
    imageRef = React.createRef();
    descRef = React.createRef();
    latRef = React.createRef();
    lngRef = React.createRef();
    frontLampRef = React.createRef();
    backpackRef = React.createRef();
    helmetRef = React.createRef();
    freeUPRef = React.createRef();
    goldMushroomRef = React.createRef();
    invMushroomRef = React.createRef();
    priceRef = React.createRef();
    dateRef = React.createRef();
    availableRef = React.createRef();

    static propTypes = {
        addToad: PropTypes.func,
        toggleNew: PropTypes.func
    }
    
    createToad = event => {
        event.preventDefault();
        const toad = {
            name: this.nameRef.current.value,
            image: this.imageRef.current.value,
            desc: this.descRef.current.value,
            lat: parseFloat(this.latRef.current.value),
            lng: parseFloat(this.lngRef.current.value),
            frontLamp: this.frontLampRef.current.checked ? true : false,
            backpack: this.backpackRef.current.checked ? true : false,
            helmet: this.helmetRef.current.checked ? true : false,
            freeUP: this.freeUPRef.current.checked ? true : false,
            goldMushroom: this.goldMushroomRef.current.checked ? true : false,
            invMushroom: this.invMushroomRef.current.checked ? true : false,
            price: parseFloat(this.priceRef.current.value),
            date: Date.now(),
            available: true
        }

        this.props.addToad(toad);
    }

    render () {
        return (
            <form className="toad-new" onSubmit={this.createToad}>
                <div className="toad-full-close">
                    <button onClick={this.props.toggleNew}>X</button>  
                </div>
                <p>Image:</p>
                <input type="text" ref={this.imageRef} className="image" defaultValue="/images/redtoad.png" />
                <p>Name:</p>
                <input type="text" ref={this.nameRef} name="name" defaultValue="New Toad"/>
                <p>Price (Cents):</p>
                <input type="number" ref={this.priceRef} name="price" defaultValue={1000} />    
                <p>Description:</p>            
                <textarea name="desc" ref={this.descRef} defaultValue="Hi! My name is Toad!"/>
                <p>Latitude:</p>                
                <input type="number" ref={this.latRef} name="lat" defaultValue={45.55} />
                <p>Longitude:</p>
                <input type="number" ref={this.lngRef} name="lng" defaultValue={-73.75} />
                <p>Amneties:</p>
                <div>
                    <input type="checkbox" id="frontlampNew" name="frontlampNew" ref={this.frontLampRef} value="frontlampNew"/>
                    <label htmlFor="frontlampNew"> Front Lamp</label>
                </div>
                <div>
                    <input type="checkbox" id="backpackNew" name="backpackNew" ref={this.backpackRef} value="backpackNew"/>
                    <label htmlFor="backpackNew"> Backpack</label>
                </div>
                <div>
                    <input type="checkbox" id="helmetNew" name="helmetNew" ref={this.helmetRef} value="helmetNew"/>
                    <label htmlFor="helmetNew"> Helmet</label>
                </div>
                <div>
                    <input type="checkbox" id="freeUPNew" name="freeUPNew" ref={this.freeUPRef} value="freeUPNew"/>
                    <label htmlFor="freeUPNew"> Free Up</label>
                </div>
                <div>
                    <input type="checkbox" id="goldMushroomNew" name="goldMushroomNew" ref={this.goldMushroomRef} value="goldMushroomNew"/>
                    <label htmlFor="goldMushroomNew"> Gold Mushroom</label>
                </div>
                <div>
                    <input type="checkbox" id="invMushroomNew" name="invMushroomNew" ref={this.invMushroomRef} value="invMushroomNew"/>
                    <label htmlFor="invMushroomNew"> Invincibility Mushroom</label>
                </div>
                <button type="submit">Add Toad to DB</button>
            </form>
        );
    }
}

export default ToadNew;
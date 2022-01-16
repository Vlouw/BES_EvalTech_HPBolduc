import React from 'react'
import PropTypes from "prop-types";
import GoogleMapReact from 'google-map-react'

class Map extends React.Component {
  // Default props to Zoom on Montreal
  static defaultProps = {
    center: {lat: 45.55, lng: -73.75},
    zoom: 11
  };

  // Validate propTypes
  static propTypes = {
    toads : PropTypes.object
  };

  // Forced function in React
  render() {
    // Return Google map
    return (
      <div className="map">
        <h2 className="map-h2">Toad Current Locations</h2>
        <div className="google-map" style={{width: '99%', height: '88.5%'}}>
          <GoogleMapReact
            resetBoundsOnResize={true}
            bootstrapURLKeys={{ key: 'AIzaSyBR9AR-dmvmqDo8J87G9Fh8kriB38pPavw' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {/*Add markers for Available Toads*/}
            {Object.keys(this.props.toads).map(key => {
                if (this.props.toads[key].available) {
                  return (
                    <img
                    key={key}
                    style={{width: '25px', height: '25px'}}                                                      
                    src={"/images/toad-marker.png"}
                    lat={this.props.toads[key].lat}
                    lng={this.props.toads[key].lng}
                    />
                  )
                }
              }              
            )}
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}

export default Map;
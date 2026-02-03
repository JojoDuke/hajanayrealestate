import React, { Component } from 'react';
import {Map, GoogleApiWrapper, Polygon} from 'google-maps-react';
import { polygon, mapStyle } from '../../../Config/mapConfig';
 
export class MapContainer extends Component {
  
    _mapLoaded(mapProps, map) {
        map.setOptions({
            styles: mapStyle
        })
    }

    render() {
    const style = {
        width: '100%',
        height: '500px',
        position: 'relative'
    }

    return (
        <div className="map-container" style={style}>
            <Map 
                google={this.props.google} 
                zoom={12}
                initialCenter={{
                    lat: 49.1170072,
                    lng: 16.5784703
                }}
                onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
            >
                <Polygon 
                    paths={polygon}
                    strokeColor="#F5CE42"
                    strokeOpacity={1}
                    strokeWeight={7}
                    fillColor="#F5CE42"
                    fillOpacity={0.2}
                />
            </Map>
        </div>         
        );
      }
    
  }
 
export default GoogleApiWrapper({
  apiKey: ("")
})(MapContainer)
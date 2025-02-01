import React, { Component } from 'react'
import Globe from 'worldwind-react-globe'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 34.2,
      lon: -119.2,
      alt: 10e6
    }
    this.globeRef = React.createRef();
  }

  render() {
    const layers = [
      'eox-sentinal2-labels',
      'coordinates',
      'view-controls',
      'stars',
      'atmosphere-day-night'
    ];
    return (
      <div className='w-full h-full rounded-lg'>
        <Globe 
          layers={layers}
          latitude={this.state.lat}
          longitude={this.state.lon}
          altitude={this.state.alt} 
        />
      </div>
    )
  }
}
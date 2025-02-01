import React, { Component } from 'react';
import Globe from 'worldwind-react-globe';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 20.03,
      lon: 78.22,
      alt: 14e6,
      markers: [
        {
          latitude: 9.8706522, //9.8706522,76.1446001
          longitude: 76.1446001,
          label: "Marker 1",  // Add a label for the marker
          color: "#32a852"    // Optional: Color of the marker
        }
      ]
    };
    this.globeRef = React.createRef();
  }

  componentDidMount() {
    // Optionally do something with the globeRef if needed
  }

  render() {
    const layers = [
      'eox-sentinal2-labels',
      'coordinates',
      'view-controls',
      'compass',
      'atmosphere-day-night'
    ];

    return (
      <div className='w-full h-full rounded-lg'>
        <Globe 
          ref={this.globeRef}
          layers={layers}
          latitude={this.state.lat}
          longitude={this.state.lon}
          altitude={this.state.alt} 
          markers={this.state.markers}  // Pass markers to the globe
        />
      </div>
    );
  }
}

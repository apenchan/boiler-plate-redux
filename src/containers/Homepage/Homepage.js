import React, { Component } from "react";
import './homepage.css'

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: null
    }
  }
  componentDidMount() {
    this.props.getCoordinates();
  }

  showCordinates = (event) => {
    console.log('here', event)
    let x = event.clientX - 10;
    let y = event.clientY - 10;
    let coordinates = { x, y };
    console.log(coordinates)

  }

  displayCoordinates = () => {
    const { coordinates } = this.props
    let elem = document.getElementById("homepage")
    let coords = elem.getBoundingClientRect();
    return coordinates.map(coordinate => {
      let x = coordinate['x']
      let y = coordinate['y']
      return (
        <div className="given-coordinates" style={{ color: 'red', size: 20 }} >{x}, {y}</div>
      )
    })
  }

  render() {
    //this.showCordinates()
    return (
      <div id="homepage" onMouseDown={this.showCordinates}>
        <div className="display-coordinates">
          {this.props.coordinates.length ? this.displayCoordinates() : ''}
        </div>
      </div >
    );
  }
}

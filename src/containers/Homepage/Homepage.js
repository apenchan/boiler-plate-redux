import React, { Component } from "react";

export default class Homepage extends Component {
  componentDidMount() {
    this.props.getDataTest();
  }

  mapData = data => {
    let displayChores;
    const { chores } = this.props;
    console.log(chores);
    if (chores && chores.length > 0) {
      displayChores = chores.map(({ chore }) => chore);
    }
    return displayChores + " ";
  };
  render() {
    this.mapData();
    return <h1>{this.mapData()}</h1>;
  }
}

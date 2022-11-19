import React from 'react';
import './style.css';
import XMLParser from 'react-xml-parser';

export default class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      speed: 0,
    };
  }
  render() {
    fetch(
      'https://resource.data.one.gov.hk/td/traffic-detectors/rawSpeedVol-all.xml'
    )
      .then((response) => response.text())
      .then((data) => {
        var xml = new XMLParser().parseFromString(data);
        console.log(xml);
      })

      .catch(console.error);
    console.log('ha');
    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}

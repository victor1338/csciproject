import React from 'react';
import './style.css';

export default function App2() {
  fetch(
    'https://resource.data.one.gov.hk/td/traffic-detectors/irnAvgSpeed-all.xml'
  )
    .then((response) => response.text())
    .then((data) => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(data, 'application/xml');
      console.log(xml);
    })
    .catch(console.error);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

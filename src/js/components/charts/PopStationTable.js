import React from 'react';

class PopStationTable extends React.Component {

  componentDidMount() {
    fetch('./data/station-data.json')
      .then(response => response.json())
      .then(data =>  console.log(data.stations))
      .catch((error) => console.log(error));
  }

  render() {
    return(
      <div className="indego--component--table"></div>
    )
  }


}

export default PopStationTable;

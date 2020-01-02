import React from 'react';

class PopStationTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = { stationData: {} };
  }


  componentDidMount() {
    fetch('./data/station-data.json')
      .then(response => response.json())
      .then(data => data.stations.map((items, i) => console.log(items)))
      .catch((error) => console.log(error));
  }

  render() {
    return(
      <div className="indego--component--table"></div>
    )
  }
}

export default PopStationTable;

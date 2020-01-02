import React from 'react';

class PopStationTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = { stationData: [] };
    this.getStationOccur = this.getStationOccur.bind(this);
  }


  componentDidMount() {
    fetch('./data/station-data.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ stationData: data });
        this.getStationOccur();
      }).catch((error) => console.log(error));
  }


  getStationOccur() {
    console.log('test');
  }

  render() {
    return(
      <div className="indego--component--table"></div>
    )
  }
}

export default PopStationTable;

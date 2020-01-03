import React from 'react';

class PopStationTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      stationData: {},
      popStatArr: []
    };

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
    var statOccurArr = [];

    Object.values(this.props.qData.julData).map((items, i) => {
      statOccurArr.push(items.start_station);
    });

    let counts = statOccurArr.reduce((map, stations) => {
      map[stations] = (map[stations] || 0) + 1;
      return map;
    }, {});

    let sortStats = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
    let getPopStats = sortStats.slice(0, 5);

    this.setState({ popStatArr: getPopStats });
  }

  render() {
    return(
      <div className="indego--component--table">
        { Object.keys(this.props.qData).length > 0 ? <ul>

        </ul> : null }
      </div>
    )
  }
}

export default PopStationTable;

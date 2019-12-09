import React from 'react';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: {} };

    this.dataDestructure = this.dataDestructure.bind(this);
  }

  componentDidMount() {
    const url = "http://localhost:3000/data"

    fetch(url, { method: 'get' })
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data });
        this.dataDestructure();
      }).catch((error) => console.log(error));
  }


  dataDestructure() {
    var durationArr = [];
    var bikeTypeArr = [];

    const initialMap = new Promise(() => {
      Object.values(this.state.data).map((items, i) => {
        // console.log(items.start_station);
        // console.log(items.passholder_type);
        // console.log(items.bike_type);
        durationArr.push(Number(items.duration));
        bikeTypeArr.push(items.bike_type);
      });
    });

    function getOccurrences(array, value) {
      var count = 0;
      array.forEach((v) => (v === value && count++));

      return count;
    }
    // console.log(bikeTypeArr);
    var bikeTypeStandard = getOccurrences(bikeTypeArr, 'standard');
    var bikeTypeEletric = getOccurrences(bikeTypeArr, 'electric');
    console.log(bikeTypeEletric);
    console.log(bikeTypeStandard);
    var getAvgDur = Math.round(durationArr.reduce((a,b) => a + b, 0) / durationArr.length);
  }


  render() {

    return (
      <div>
        <h1>Bike-Sharing-DV</h1>
      </div>
    )
  }

}

export default App;

import React from 'react';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { dataFetch: {} };

    this.dataDestructure = this.dataDestructure.bind(this);
  }


  componentDidMount() {
    const url = "http://localhost:3000/data";

    fetch(url, { method: 'get' })
      .then(response => response.json())
      .then(data => {
        this.setState({ dataFetch: data });
        this.dataDestructure();
      }).catch((error) => console.log(error));
  }


  dataDestructure() {
    var durationArr = [];
    var bikeTypeArr = [];
    var passTypeArr = [];

    const initialMap = new Promise(() => {
      Object.values(this.state.dataFetch).map((items, i) => {
        durationArr.push(Number(items.duration));
        bikeTypeArr.push(items.bike_type);
        passTypeArr.push(items.passholder_type)
      });
    });

    function getOccurrences(array, value) {
      var count = 0;
      array.forEach((v) => (v === value && count++));

      return count;
    }

    var bikeTypeStandard = getOccurrences(bikeTypeArr, 'standard'),
        bikeTypeEletric = getOccurrences(bikeTypeArr, 'electric');

    var passTypeDay = getOccurrences(passTypeArr, 'Day Pass'),
        passTypeMonth = getOccurrences(passTypeArr, 'Indego30'),
        passTypeYear = getOccurrences(passTypeArr, 'Indego365');

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

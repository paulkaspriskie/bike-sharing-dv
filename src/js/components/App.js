import React from 'react';
import PassTypeDoughnut from './charts/PassTypeDoughnut';
import { Doughnut } from 'react-chartjs-2';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataFetch: {},
      dataChart: {},
      doughnutData: {}
    };

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
    var tripDateArr = [],
        durationArr = [],
        bikeTypeArr = [],
        passTypeArr = [],
        tripTypeArr = [];

    const initialMap = new Promise(() => {
      Object.values(this.state.dataFetch).map((items, i) => {
        tripDateArr.push(items.start_time);
        durationArr.push(Number(items.duration));
        bikeTypeArr.push(items.bike_type);
        passTypeArr.push(items.passholder_type);
        tripTypeArr.push(items.trip_route_category);
      });
    });

    function getOccurrences(array, value) {
      var count = 0;
      array.forEach((v) => (v === value && count++));

      return count;
    }

    var bikeTypeStandard = getOccurrences(bikeTypeArr, 'standard'),
        bikeTypeEletric = getOccurrences(bikeTypeArr, 'electric');

    var tripTypeOneWay = getOccurrences(tripTypeArr, 'One Way'),
        tripTypeRound = getOccurrences(tripTypeArr, 'Round Trip');

    var passTypeDay = getOccurrences(passTypeArr, 'Day Pass'),
        passTypeMonth = getOccurrences(passTypeArr, 'Indego30'),
        passTypeYear = getOccurrences(passTypeArr, 'Indego365');

    var getAvgDur = Math.round(durationArr.reduce((a,b) => a + b, 0) / durationArr.length);

    this.setState({
      dataChart: {
        tripDate: tripDateArr,
        avgTripTime: getAvgDur,
        bikeType: { standard: bikeTypeStandard, electric: bikeTypeEletric },
        passType: { dayPass: passTypeDay, monthPass: passTypeMonth, yearPass: passTypeYear },
        tripType: { oneWay: tripTypeOneWay, roundTrip: tripTypeRound }
      }
    });
  }

  render() {
    return (
      <div>
        { Object.keys(this.state.dataChart).length !== 0 ?
          <PassTypeDoughnut passTypeData={this.state.dataChart.passType} /> : null }
      </div>
    )
  }
}

export default App;

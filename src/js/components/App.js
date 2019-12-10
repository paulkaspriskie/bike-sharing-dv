import React from 'react';
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
      },
      doughnutData: {
        datasets: [{
          data: [ passTypeDay, passTypeMonth, passTypeYear ],
          backgroundColor: ['#FF9800','#673AB7','#BDBDBD' ]
        }]
      }
    });
  }

  render() {
    return (
      <div>
        <Doughnut
          data={this.state.doughnutData}
          options={{ cutoutPercentage: 75, legend:{display:false}, maintainAspectRatio: true}} />
      </div>
    )
  }
}

export default App;

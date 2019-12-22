import React from 'react';
import PassTypeDoughnut from './charts/PassTypeDoughnut';
import BikeTypeBar from './charts/BikeTypeBar';


class DataDashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataChart: {},
      quarterData: {}
   };

    this.dataDestructure = this.dataDestructure.bind(this);
    this.filterDataMonth = this.filterDataMonth.bind(this);
    this.calcOccurrences = this.calcOccurrences.bind(this);
  }


  componentDidMount() {
    this.dataDestructure();

    this.setState({
      quarterData: {
        julData: this.filterDataMonth(this.props.data, 6),
        augData: this.filterDataMonth(this.props.data, 7),
        septData: this.filterDataMonth(this.props.data, 8)
      }
    });
  }


  filterDataMonth(data, value) {
    return Object.values(data).filter((getMonth) => {
      var date = new Date(getMonth.start_time);
      return Number(date.getMonth()) === value;
    });
  }


  calcOccurrences(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));

    return count;
  }


  dataDestructure() {
    var tripDateArr = [],
        durationArr = [],
        bikeTypeArr = [],
        passTypeArr = [],
        tripTypeArr = [];

    const initialMap = new Promise(() => {
      Object.values(this.props.data).map((items, i) => {
        var date = new Date(items.start_time);

        tripDateArr.push(date.toISOString().substring(0, 10));
        durationArr.push(Number(items.duration));
        bikeTypeArr.push(items.bike_type);
        passTypeArr.push(items.passholder_type);
        tripTypeArr.push(items.trip_route_category);
      });
    });

    var bikeTypeStandard = this.calcOccurrences(bikeTypeArr, 'standard'),
        bikeTypeEletric = this.calcOccurrences(bikeTypeArr, 'electric');

    var tripTypeOneWay = this.calcOccurrences(tripTypeArr, 'One Way'),
        tripTypeRound = this.calcOccurrences(tripTypeArr, 'Round Trip');

    var passTypeDay = this.calcOccurrences(passTypeArr, 'Day Pass'),
        passTypeMonth = this.calcOccurrences(passTypeArr, 'Indego30'),
        passTypeYear = this.calcOccurrences(passTypeArr, 'Indego365');

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
    return(
      <div className="indego--component--chart">
        <PassTypeDoughnut passTypeData={this.state.dataChart.passType} />
        <BikeTypeBar />
      </div>
    )
  }

}

export default DataDashboard;

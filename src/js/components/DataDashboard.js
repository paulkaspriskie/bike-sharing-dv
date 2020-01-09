import React from 'react';
import PassTypeDoughnut from './charts/PassTypeDoughnut';
import BikeTypeBar from './charts/BikeTypeBar';
import PopStationTable from './charts/PopStationTable';


class DataDashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataChart: {},
      monthData: {}
   };

    this.dataDestructure = this.dataDestructure.bind(this);
    this.filterDataMonth = this.filterDataMonth.bind(this);
    this.calcOccurrences = this.calcOccurrences.bind(this);
  }


  componentDidMount() {
    this.dataDestructure();
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

    Object.values(this.props.data).map((items, i) => {
      var date = new Date(items.start_time);

      tripDateArr.push(date.toISOString().substring(0, 10));
      durationArr.push(Number(items.duration));
      bikeTypeArr.push(items.bike_type);
      passTypeArr.push(items.passholder_type);
      tripTypeArr.push(items.trip_route_category);
    });

    var getAvgDur = Math.round(durationArr.reduce((a,b) => a + b, 0) / durationArr.length);

    this.setState({
      dataChart: {
        tripDate: tripDateArr,
        avgTripTime: getAvgDur,
        bikeType: {
          standard: this.calcOccurrences(bikeTypeArr, 'standard'),
          electric: this.calcOccurrences(bikeTypeArr, 'electric')
        },
        passType: {
          dayPass: this.calcOccurrences(passTypeArr, 'Day Pass'),
          monthPass: this.calcOccurrences(passTypeArr, 'Indego30'),
          yearPass: this.calcOccurrences(passTypeArr, 'Indego365')
        },
        tripType: {
          oneWay: this.calcOccurrences(tripTypeArr, 'One Way'),
          roundTrip: this.calcOccurrences(tripTypeArr, 'Round Trip')
        }
      },
      monthData: {
        julData: this.filterDataMonth(this.props.data, 6),
        augData: this.filterDataMonth(this.props.data, 7),
        septData: this.filterDataMonth(this.props.data, 8)
      }
    });
  }

  render() {
    return(
      <div className="indego--component--chart">
        <PassTypeDoughnut passTypeData={this.state.dataChart.passType} />
        <BikeTypeBar dataMonth={this.state.monthData} getOccur={this.calcOccurrences} />
        <PopStationTable dataMonth={this.state.monthData} />
      </div>
    )
  }

}

export default DataDashboard;

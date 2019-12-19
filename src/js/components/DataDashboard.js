import React from 'react';
import BikeTypeBar from './charts/BikeTypeBar';


class DataDashboard extends React.Component {

  componentDidMount() {

    function filterMonth(data, value) {
      return Object.values(data).filter((getMonth) => {
        var date = new Date(getMonth.start_time);
        return Number(date.getMonth()) === value;
      });
    }

    // var dataJuly = filterMonth(this.props.data, 6);
    // var dataAug = filterMonth(this.props.data, 7);
    // var dataSept = filterMonth(this.props.data, 8);
  }

  render() {

    return(
      <div className="indego--component--chart--bar--horizontal">
        <BikeTypeBar />
      </div>
    )
  }


}

export default DataDashboard;

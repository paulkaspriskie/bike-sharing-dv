import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

class DataFilterMonth extends React.Component {

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

    const data = {
      labels: [ 'July', 'August', 'September'],
      datasets: [
        {
          label: 'test',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80 ]
        }
      ]
    }
    return(
      <div>
        <HorizontalBar
          data={data}
          options={{
            maintainAspectRatio: true,
            title:{
              display: true,
              text:'Indego Passholder Plans',
              fontSize: 20,
              padding: 20
            },
            legend:{
              display: true,
              position:'bottom',
              labels: {
                padding: 25,
                fontSize: 16
              }
            }
          }} />
      </div>
    )
  }


}

export default DataFilterMonth;

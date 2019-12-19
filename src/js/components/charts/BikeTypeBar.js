import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

class BikeTypeBar extends React.Component {

  render() {

    const data = {
      labels: [ 'July', 'August', 'September'],
      datasets: [
        {
          label: 'test',
          backgroundColor: '#BA68C8',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 60 ]
        },
        {
          label: 'test 2',
          backgroundColor: '#E57373',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [40, 32, 64 ]
        }
      ]
    }
    return(
      <div className="indego--component--chart--bar--horizontal">
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

export default BikeTypeBar;

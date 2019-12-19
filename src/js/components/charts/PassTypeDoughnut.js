import React from 'react';
import { Doughnut } from 'react-chartjs-2';


class PassTypeDoughnut extends React.Component {

  render() {
    const data = {
      datasets: [{
        data: [
          this.props.passTypeData.dayPass,
          this.props.passTypeData.monthPass,
          this.props.passTypeData.yearPass
        ],
        backgroundColor: ['#FF9800','#673AB7','#BDBDBD' ]
      }],
      labels: [
        'Day Pass: ' + this.props.passTypeData.dayPass.toLocaleString(),
        'Month Pass: ' + this.props.passTypeData.monthPass.toLocaleString(),
        'Year Pass: ' + this.props.passTypeData.yearPass.toLocaleString()
      ]
    }

    return (
      <div className="indeChart--doughnut">
        <Doughnut
          data={data}
          options={{
            cutoutPercentage: 75,
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

//generateLabels: (chart) => {}
//legendCallback: (chart) => {}
export default PassTypeDoughnut;

import React from 'react';
import { Doughnut } from 'react-chartjs-2';


class PassTypeDoughnut extends React.Component {

  render() {

    if (this.props.passTypeData) {

      var data = {
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

    }

    return (
      <div className="indego--component--chart--doughnut">
        { this.props.passTypeData ? <Doughnut
          data={data}
          options={{
            cutoutPercentage: 75,
            responsive: true,
            maintainAspectRatio: false,
            title:{
              display: true,
              text:'Passholder Plans',
              fontSize: 20,
              padding: 20
            },
            tooltips: {
              enabled: false
            },
            legend:{
              display: true,
              position:'bottom',
              labels: {
                padding: 25,
                fontSize: 16
              }
            }
          }} /> : null }
      </div>
    )

  }
}

//generateLabels: (chart) => {}
//legendCallback: (chart) => {}
export default PassTypeDoughnut;

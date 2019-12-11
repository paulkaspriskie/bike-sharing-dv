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
      labels: [ 'Day Pass', 'Month Pass', 'Year Pass' ]
    }

    return (
      <div className="chart-type-pass_doughnut">
        <Doughnut
          data={data}
          options={{ cutoutPercentage: 75, maintainAspectRatio: true}} />
      </div>
    )
  }
}

export default PassTypeDoughnut;

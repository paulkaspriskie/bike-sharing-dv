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
      }]
    }

    return (
      <div>
        <Doughnut
          data={data}
          options={{ cutoutPercentage: 75, legend:{display:false}, maintainAspectRatio: true}} />
      </div>
    )
  }
}

export default PassTypeDoughnut;

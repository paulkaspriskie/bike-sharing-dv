import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

class BikeTypeBar extends React.Component {

  render() {
    if (Object.keys(this.props.dataMonth).length > 0) {

      var julBikeType = [];
      var augBikeType = [];
      var septBikeType = [];

      Object.values(this.props.dataMonth.julData).map((items, i) => julBikeType.push(items.bike_type));
      Object.values(this.props.dataMonth.augData).map((items, i) => augBikeType.push(items.bike_type));
      Object.values(this.props.dataMonth.septData).map((items, i) => septBikeType.push(items.bike_type));

      var data = {
        labels: [ 'July', 'August', 'September'],
        datasets: [
          {
            label: 'Standard',
            backgroundColor: '#BA68C8',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [
              this.props.getOccur(julBikeType, 'standard'),
              this.props.getOccur(augBikeType, 'standard'),
              this.props.getOccur(septBikeType, 'standard')
            ]
          },
          {
            label: 'Electric',
            backgroundColor: '#E57373',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [
              this.props.getOccur(julBikeType, 'electric'),
              this.props.getOccur(augBikeType, 'electric'),
              this.props.getOccur(septBikeType, 'electric')
            ]
          }
        ]
      }

    }

    return(
      <div className="indego--component--chart--bar--horizontal">
        { Object.keys(this.props.dataMonth).length > 0 ? <HorizontalBar
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            title:{
              display: true,
              text:'Bike Type: Standard VS. Electric',
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
          }} /> : null }
      </div>
    )
  }
}

export default BikeTypeBar;

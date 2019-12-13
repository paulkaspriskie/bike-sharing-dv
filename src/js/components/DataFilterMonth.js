import React from 'react';


class DataFilterMonth extends React.Component {

  componentDidMount() {
    const julyData = Object.values(this.props.data).filter((getMonth) => {
      var date = new Date(getMonth.start_time);
      return Number(date.getMonth()) === 6;
    });
  }

  render() {
    return(
      <div> </div>
    )
  }


}

export default DataFilterMonth;

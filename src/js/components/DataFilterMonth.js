import React from 'react';


class DataFilterMonth extends React.Component {

  componentDidMount() {

    function filterMonth(data, value) {
      return Object.values(data).filter((getMonth) => {
        var date = new Date(getMonth.start_time);
        return Number(date.getMonth()) === value;
      });
    }

    var dataJuly = filterMonth(this.props.data, 6);
    var dataAug = filterMonth(this.props.data, 7);
    var dataSept = filterMonth(this.props.data, 8);
  }

  render() {
    return(
      <div> </div>
    )
  }


}

export default DataFilterMonth;

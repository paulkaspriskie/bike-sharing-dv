import React from 'react';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: {} };

    this.dataDestructure = this.dataDestructure.bind(this);
  }

  componentDidMount() {
    const url = "http://localhost:3000/data"

    fetch(url, { method: 'get' })
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data });
        this.dataDestructure()
      }).catch((error) => console.log(error));
  }


  dataDestructure() {
    var durationArr = [];

    Object.values(this.state.data).map((items, i) => {
      // console.log(items.start_station);
      // console.log(items.duration);
      // console.log(items.passholder_type);
      durationArr.push(Number(items.duration));
    });

    console.log(durationArr);
  }


  render() {
    // var durationArr = [];
    //     durationArr.push(Object.values(this.state.data).map((items, i) => Number(items.duration)));
    // var getAvgDur = durationArr.reduce((a,b) => a + b, 0) / durationArr.length;
    // console.log(Math.floor(getAvgDur * 100) / 100);

    return (
      <div>
        <h1>Bike-Sharing-DV</h1>
      </div>
    )
  }

}

export default App;

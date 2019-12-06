import React from 'react';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: {} };
  }

  componentDidMount() {
    const url = "http://localhost:3000/data"

    fetch(url, { method: 'get' })
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data });
      }).catch((error) => console.log(error));
  }


  render() {
    var durationArr = [];
        durationArr.push(Object.values(this.state.data).map((items, i) => Number(items.duration)));
    var getAvgDur = durationArr[0].reduce((a,b) => a + b, 0) / durationArr[0].length;
    console.log(getAvgDur);

    return (
      <div>
        <h1>Bike-Sharing-DV</h1>
      </div>
    )
  }

}

export default App;

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
        console.log(this.state.data);
      }).catch((error) => console.log(error));
  }


  render() {
    return (
      <div>
        <h1>Bike-Sharing-DV</h1>
      </div>
    )
  }

}

export default App;

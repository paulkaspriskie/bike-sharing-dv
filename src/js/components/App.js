import React from 'react';


class App extends React.Component {

  componentDidMount() {
    const url = "http://localhost:3000/data"

    fetch(url, { method: 'get' })
      .then(response => response.json())
      .then(data => {
        console.log(data);
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

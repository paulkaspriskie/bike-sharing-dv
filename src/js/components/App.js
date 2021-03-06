import React from 'react';
import SideNav from './SideNav';
import DataDashboard from './DataDashboard';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataFetch: {},
      isLoading: true
    };
  }


  componentDidMount() {
    const url = "http://localhost:3000/data";

    fetch(url, { method: 'get' })
      .then(response => response.json())
      .then(data => {
        this.setState({
          dataFetch: data,
          isLoading: false
        })
      })
      .catch((error) => console.log(error));
  }


  render() {
    return (
      <div className="indego--container--app--layout">
        <SideNav/>
        <img className={this.state.isLoading ? "" : "isHidden"} src="img/grid.svg" />
        { Object.keys(this.state.dataFetch).length !== 0 ?
          <DataDashboard data={this.state.dataFetch} /> : null }
      </div>
    )
  }
}

export default App;

import React from 'react';
import './App.css';
import axios from "axios";
import Head from './components/Head';
import Navigation from './components/Navigation';


class App extends React.Component {

  state = {
    employees: [],
  };

  componentDidMount() {
      axios.get(`https://randomuser.me/api/?results=20&nat=Aus`)
        .then(res => {
          this.setState({ employees: res.data.results });
        });
  }


  render() {
    return (
      <div className="App">
        <Head />
        {this.state.employees.length > 0 &&
        <Navigation employees={this.state.employees}/>
  }
      </div>
    );
  }
}

export default App;

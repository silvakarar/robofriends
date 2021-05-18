import React, { Component } from 'react';
import CardList from '../components/card-list/CardList';
import { robots } from '../robots';
import SearchBox from '../components/search-box/SearchBox';
import Scroll from '../components/scroll/Scroll';

import '../App.css';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchfield: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    });

    return !robots.length === 0 ?
       <h1>Loading</h1> :
      (
        <div className="tc">
          <h1 className="f1 lightest-blue">ROBO FRIENDS</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
            <CardList robots={filteredRobots} />
            </ErrorBoundry>
           
          </Scroll>
        </div>
      );
    }
  }


export default App;

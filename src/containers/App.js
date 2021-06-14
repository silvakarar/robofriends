import React, { useState, useEffect } from 'react';
import CardList from '../components/card-list/CardList';
import { robots } from '../robots';
import SearchBox from '../components/search-box/SearchBox';
import Scroll from '../components/scroll/Scroll';

import '../App.css';
import ErrorBoundry from '../components/ErrorBoundry';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users));
  }, []);

  const onSearchChange = event => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !robots.length === 0 ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1 lightest-blue">ROBO FRIENDS</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import Header from './Header';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title}/>
        <Player name={"Russell Salerno"} score={30} />
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
}

export default App;

import React, { Component } from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';
import '../App.css';

class Player extends Component {
  render() {
    return (
      <div className="players">
        <div className="player">
          <div className="player-name">
            {this.props.name}
          </div>
          <div className="player-score">
            <Counter score={this.props.score}/>
          </div>
        </div> 
      </div>
    );
  }
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default Player;

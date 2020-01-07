import React from 'react';
import PropTypes from 'prop-types';
import authData from '../../helpers/data/authData';

class PlayerForm extends React.Component {
  static propTypes = {
    addPlayer: PropTypes.func,
  }

  state = {
    name: '',
    position: '',
  }

  savePlayerEvent = (e) => {
    const { addPlayer } = this.props;
    e.preventDefault();
    const newPlayer = {
      name: this.state.name,
      position: this.state.position,
      imageUrl: 'https://easydrawingguides.com/wp-content/uploads/2018/09/Stormtrooper-Helmet-10.webp',
      uid: authData.getUid(),
    };
    addPlayer(newPlayer);
    this.setState({ name: '', position: '' });
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  positionChange = (e) => {
    e.preventDefault();
    this.setState({ position: e.target.value });
  }

  render() {
    return (
<form className='col-6 offset-3 PinForm'>
  <div className="form-group">
    <label htmlFor="player-name">Player Name:</label>
    <input
      type="text"
      className="form-control"
      id="player-name"
      placeholder="Enter player name"
      value={this.state.name}
      onChange={this.nameChange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="player-position">Position:</label>
    <input
      type="text"
      className="form-control"
      id="player-position"
      placeholder="Enter player position"
      value={this.state.position}
      onChange={this.positionChange}
    />
  </div>
  <button className="btn btn-secondary" onClick={this.savePlayerEvent}>Save Player</button>
</form>
    );
  }
}

export default PlayerForm;

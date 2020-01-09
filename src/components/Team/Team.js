import React from 'react';
import PropTypes from 'prop-types';

import Player from '../Player/Player';
import PlayerForm from '../PlayerForm/PlayerForm';

import authData from '../../helpers/data/authData';
import playerData from '../../helpers/data/playerData';

import './Team.scss';

class Team extends React.Component {
  static propTypes = {
    selectedPlayerId: PropTypes.string,
  }

  state = {
    players: [],
    editMode: false,
    showPlayerForm: false,
    playerToEdit: {},
  }

  componentDidMount() {
    this.getPlayers();
  }

  getPlayers = () => {
    playerData.getPlayersByUid(authData.getUid())
      .then((players) => {
        this.setState({ players });
      })
      .catch((errorFromGetPlayers) => console.error({ errorFromGetPlayers }));
  }

  addPlayer = (newPlayer) => {
    playerData.addPlayer(newPlayer)
      .then(() => {
        this.getPlayers();
        this.setState({ showPlayerForm: false });
      })
      .catch((errorFromAddPlayer) => console.error({ errorFromAddPlayer }));
  }

  updatePlayer = (playerId, updatedPlayer) => {
    playerData.updatePlayer(playerId, updatedPlayer)
      .then(() => {
        this.getPlayers();
        this.setState({ editMode: false, showPlayerForm: false });
      })
      .catch((errorFromUpdatePlayer) => console.error({ errorFromUpdatePlayer }));
  }

  deleteSinglePlayer = (playerId) => {
    playerData.deletePlayer(playerId)
      .then(() => {
        this.getPlayers();
      })
      .catch((errorFromDeletePlayer) => console.error({ errorFromDeletePlayer }));
  }

  setEditMode = (editMode) => {
    this.setState({ editMode, showPlayerForm: true });
  }

  setPlayerToEdit = (player) => {
    this.setState({ playerToEdit: player });
  }

  setShowPlayerForm = (e) => {
    this.setState({ showPlayerForm: true });
  }

  render() {
    const { editMode } = this.state;
    return (
      <div className="Team">
        <h1>SUPER DUPPER STORM TROOPERS</h1>
        { (editMode) ? (<div></div>) : (<button className="btn btn-primary" onClick={this.setShowPlayerForm}>ADD PLAYER</button>) }
        { this.state.showPlayerForm && <PlayerForm addPlayer={this.addPlayer} editMode={editMode} playerToEdit={this.state.playerToEdit} updatePlayer={this.updatePlayer}/> }
        <div className="d-flex flex-wrap justify-content-center">
          { this.state.players.map((player) => (<Player key={player.id} player={player} deleteSinglePlayer={this.deleteSinglePlayer} setEditMode={this.setEditMode} setPlayerToEdit={this.setPlayerToEdit} />)) }
        </div>
      </div>
    );
  }
}

export default Team;

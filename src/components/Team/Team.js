import React from 'react';
import PropTypes from 'prop-types';
import Player from '../Player/Player';
import authData from '../../helpers/data/authData';
import playerData from '../../helpers/data/playerData';

import './Team.scss';

class Team extends React.Component {
  static propTypes = {
    selectedPlayerId: PropTypes.string,
  }

  state = {
    players: [],
  }

  getPlayerData = () => {
    playerData.getPlayersByUid(authData.getUid())
      .then((players) => {
        this.setState({ players });
      })
      .catch((errorFromGetPlayers) => console.error({ errorFromGetPlayers }));
  }

  deleteSinglePlayer = (playerId) => {
    playerData.deletePlayer(playerId)
      .then(() => {
        this.getPlayerData(this.props.selectedPlayerId);
      })
      .catch((errorFromDeletePlayer) => console.error({ errorFromDeletePlayer }));
  }

  componentDidMount() {
    this.getPlayerData();
  }

  render() {
    const { players } = this.state;

    return (
      <div className="Team">
        <h1>SUPER DUPPER STORM TROOPERS</h1>
        <div className="d-flex flex-wrap justify-content-center">
          {players.map((player) => (<Player key={player.id} player={player} deleteSinglePlayer={this.deleteSinglePlayer}/>))}
        </div>
      </div>
    );
  }
}

export default Team;

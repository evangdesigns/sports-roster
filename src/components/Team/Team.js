import React from 'react';
import Player from '../Player/Player';
import authData from '../../helpers/data/authData';
import playerData from '../../helpers/data/playerData';
import './Team.scss';

class Team extends React.Component {
  // static propTypes = {

  // }

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

  componentDidMount() {
    this.getPlayerData();
  }

  render() {
    const { players } = this.state;

    return (
      <div className="Team">
        <h1>SUPER DUPPER STORM TROOPERS</h1>
        <div className="d-flex flex-wrap justify-content-center">
          {players.map((player) => (<Player key={player.id} player={player} />))}
        </div>
      </div>
    );
  }
}

export default Team;

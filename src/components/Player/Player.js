import React from 'react';
import PropTypes from 'prop-types';
import playerShape from '../../helpers/propz/playerShape';
import './Player.scss';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    deleteSinglePlayer: PropTypes.func,
    setEditMode: PropTypes.func,
    setPlayerToEdit: PropTypes.func,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { deleteSinglePlayer, player } = this.props;
    deleteSinglePlayer(player.id);
  }

  setEditMode = (e) => {
    const { setEditMode, setPlayerToEdit, player } = this.props;
    e.preventDefault();
    setEditMode(true);
    setPlayerToEdit(player);
  }

  render() {
    const { player } = this.props;

    return (
    <div className="Player col-3">
      <div className="card">
        <img src={player.imageUrl} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{player.name}</h5>
          <p>{player.position}</p>
          <button className="btn btn-danger" onClick={this.deletePlayerEvent}>X</button>
          <button className="btn btn-primary" onClick={this.setEditMode}>Update Player</button>
        </div>
      </div>
    </div>
    );
  }
}

export default Player;

import React from 'react';
import playerShape from '../../helpers/propz/playerShape';
import './Player.scss';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
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
          {/* <button className="btn btn-danger" onClick={this.deletePinEvent}>X</button> */}
        </div>
      </div>
    </div>
    );
  }
}

export default Player;

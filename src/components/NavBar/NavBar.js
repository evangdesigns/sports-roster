import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

class NavBar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;

    return (
      <div className="MyNavbar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand" href="#">Tropper Roster</span>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            </ul>
            <div className="form-inline my-2 my-lg-0">
              {/* If authed, show logout button */}
              {/* If NOT authed, show nothing */}
              { authed && (<button className="nav-link btn btn-danger" onClick={this.logMeOut}>Logout</button>)}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;

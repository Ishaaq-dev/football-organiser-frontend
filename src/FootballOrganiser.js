import React, { useState } from 'react';
import Login from './pages/Login';
import ViewPlayers from './pages/ViewPlayers';
import './styles.css';

function FootballOrganiser() {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <div className="FootballOrganiser">
      <header className="FO-header">
        <h1>Football Organiser</h1>
        { authenticated 
        ? <ViewPlayers />
        : <Login setAuthenticated={setAuthenticated} /> }
      </header>
    </div>
  );
}

export default FootballOrganiser;

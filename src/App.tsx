import React from 'react';
import './App.css';
import './App.sass';
import AddInformMeasure from './containers/AddInformMeasure'
import MainMap from './components/MainMap'
import InformedStatus from './containers/InformedStatus';

import EventFeed from './containers/EventFeed/EventFeed'

class App extends React.Component {

  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div className="app">
        <section className="hero is-dark">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Corona Fighter
      </h1>
              <h2 className="subtitle">
                Can you beat the Virus?
      </h2>
            </div>
          </div>
        </section>
        <div className="content">
          <div className="eventboard">
            <EventFeed />
          </div>
          <MainMap />
          <div className="interactionboard">
            Interaction Board
            <AddInformMeasure />
          </div>
        </div>
        <div className="footer">Statusinfo<InformedStatus></InformedStatus></div>

      </div>


    );
  }
}

export default App;

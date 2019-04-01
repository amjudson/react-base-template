import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Home extends PureComponent {
  render() {
    return (
      <div className="jumbotron">
        <h3>Mark&apos;s People Tracking System</h3>
        <p>Using React to produce a responsive and interactive Person Tracking/Manager System.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}

export default Home;

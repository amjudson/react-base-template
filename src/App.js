import React from 'react';
import Header from './components/common/Header';
import { Route, Switch } from 'react-router-dom';
import OpeningPage from './components/OpeningPage';
import Beginning from './components/beginning';
import PageNotFound from './components/common/PageNotFound';
import About from './components/About';
import Navigation from './components/common/Navigation';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@coreui/coreui/dist/css/coreui.min.css';
import 'localcss/styles.css';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
      <div className='app'>
        <Header />
        <div className='app-body'>
          <Navigation />
          <main className='main'>
            <Switch>
              <Route path='/' component={OpeningPage} exact />
              <Route path='/about' component={About} />
              <Route component={PageNotFound} />
            </Switch>
          </main>
        </div>
      </div>
    );
	}
}

export default App;

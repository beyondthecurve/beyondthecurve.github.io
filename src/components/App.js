import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import loading from '../imgs/loading.png';
import '../styles/App.scss';
import '../styles/index.scss';
import Header from './Header';
import Navigation from './Navigation';
import About from './About';
import Subject from './Subject';
import Test from './Test';
import SummerBeyond from './SummerBeyond';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <>
      <div className='d-flex main-header py-2'>
        <Header/>
        <Navigation/>
      </div>
      <main className='main'>
        <Router>
          <Switch>
          <Route exact path='/about' render={() => (
              <About/>
            )} />
          <Route exact path='/subject-tutoring' render={() => (
            <Subject/>
          )} />
          <Route exact path='/test-prep' render={() => (
              <Test/>
            )} />
          <Route exact path='/summer-beyond' render={() => (
              <SummerBeyond/>
            )} />
          <Route exact path='/contact' render={() => (
              <Contact/>
            )} />
            </Switch>
        </Router>
      </main>
      <Footer/>
    </>
  );
}

export default App;

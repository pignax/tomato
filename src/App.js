import React, { Component } from 'react';

import './App.css';
import './css/bootstrap.min.css';
import './css/swiper.min.css';
import './css/style.css';
import Swiper from 'swiper'
import TasksOverview from './tasks_overview/main'


import SinglePage from './SinglePage/SinglePage';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super()
  }

  componentDidMount() {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      centeredSlides: false,
      spaceBetween: 30,
      grabCursor: true,
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={TasksOverview}/>
          <Route path="/singlepage" component={SinglePage}/>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {store} from '../../store/index'
import {selectTask} from '../../store/actions/task'


import '../main.css';


import {
 withRouter,
} from 'react-router-dom'


class Card extends Component {

  constructor(props) {
    super()
    this.state = {

    }
  }

  openCurrentTask = () => {
    console.log(this.props);
    store.dispatch(selectTask(this.props.item))
    this.props.history.push('/singlepage')
  }

  render() {
    return (

          <div className="swiper-slide" onClick={this.openCurrentTask}>
            <div className="card">
              <div className="card-image" style={{backgroundImage: 'url(./static/sfondo.jpg)'}}></div>
              <p className="card-title nomargin nopad">
                {this.props.item.title}
              </p>
              <p className="descrizione-task">
                {this.props.item.description}
               </p>

                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="{this.props.item.progress}" aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>
                <p className="hai-ancora">
                  Hai ancora:
                </p>
                <p className="temporimanente-task">{this.props.item.time}</p>

              <a href="#" className="btn btn-primary btn-lg button-timer" role="button" aria-disabled="true"></a>
            </div>
          </div>

    );
  }
}

export default Card;

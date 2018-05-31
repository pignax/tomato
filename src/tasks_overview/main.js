import React, { Component } from 'react';
import Card from './components/card';
import Addtask from './components/addtask';
import {store} from '../store/index'
import {selectTask} from '../store/actions/task'

import './main.css';


class TasksOverview extends Component {

  constructor(props) {
    super()
    this.state = {
      arraytask : [],
      addtaskvisible : false
    }
  }

  componentDidMount = () => {

    store.subscribe(() => {
      console.log(store.getState());
      this.setState({
        arraytask : store.getState().taskArray
      })
    })
  }

  switchAddTask = () => {
    this.setState({addtaskvisible : !this.state.addtaskvisible})
  }



  render() {
    return (
      <div>
        <div className="container-fluid nopad nomargin">
          <div className="row nopad nomargin navbar-menu">



            <a href="#">
              <div className="logo" style={{backgroundImage: 'url(./static/logo.svg)'}}></div>
            </a>

            <a href="#">
              <div className="menu" style={{backgroundImage: 'url(./static/menu.svg)'}}></div>
            </a>
          </div>

        </div>
        <div className="container-fluid nopad nomargin">
          <div className="row nopad nomargin navbar-menu">
            <p className="titolo-schermata">
              My tasks
            </p>

            <a href="#">
              <div className="task-order" style={{backgroundImage: 'url(./static/order.svg)'}}></div>
              <div className="task-order-evasion">Evasion</div>
            </a>

          </div>

        </div>
        <div className="container-fluid nopad nomargin">
          <div className="row nopad nomargin navbar-menu">

            <div className="swiper-container nopad nomargin">
              <div className="swiper-wrapper nopad nomargin">

                {this.state.arraytask.map((item) => {
                  return (

                  <Card item={item} key={item.id} ></Card>

                  )
                })}

              </div>


            </div>

          </div>

        </div>

        <div className="button-close-modale" onClick={this.switchAddTask} hidden={!this.state.addtaskvisible}>

          </div>

          <div className="button-add-task" onClick={this.switchAddTask} hidden={this.state.addtaskvisible}>
          </div>

          <Addtask isvisible={this.state.addtaskvisible}></Addtask>

      </div>
    );
  }
}

export default TasksOverview;

import React, { Component } from 'react';
import './SinglePage.css';
import TaskContainer from './components/TaskContainer'
import {store} from '../store/index'
import {selectTask} from '../store/actions/task'


class SinglePage extends Component {

  constructor(props) {
    super()
    this.state =  {
      taskSelected: {}
    }
  }

  componentDidMount = () => {
    console.log(store.getState());

    store.subscribe(() => {
      this.setState({
        taskSelected : store.getState().taskSelected
      })
    })
  }

  componentWillMount() { }

  render() {
    return (
    <div className="sfondo" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=670298bf5d0b94c29ec68504d7ba36b8&auto=format&fit=crop&w=710&q=80")'}}>
      <div className="dark-overlay">
        <img className="logo" src="./static/logo.svg" />
        <div className="tasto-chiusura">
          <img src="./static/close.svg" />
        </div>
        {this.state.taskSelected ? <TaskContainer taskSelected={this.state.taskSelected}></TaskContainer> : <div></div>}
        <button className="bottone--task-container">Did this!</button>
      </div>
    </div>
    );
  }
}

export default SinglePage;

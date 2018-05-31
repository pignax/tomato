import React, { Component } from 'react';
import '../SinglePage.css';
import _ from 'lodash'
import moment from 'moment'
import SingleTask from './SingleTask'
import {store} from '../../store/index'

class ToDoLoop extends Component {

  constructor (props){
    super()
    this.arrayTextArea = []
  }

  componentDidMount(){
    store.subscribe(()=> {
      this.todos = store.getState().taskToDos
    })
  }

  render() {
    return(
    <div className="toDoContainer">

      {_.map(this.todos, (i) => {
        return (
          <SingleTask item={i} key={i.id}></SingleTask>
        )
        }
      )}
    </div>
    )
  }
  }

  export default ToDoLoop

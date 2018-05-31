import React, { Component } from 'react';
import '../SinglePage.css';
import ToDoLoop from './ToDoLoop'
import DayTask from './DayTask'
import _ from 'lodash'
import * as moment from 'moment-timezone'
import {store} from '../../store/index'
import {addToDo} from '../../store/actions/task'

class TaskContainer extends Component {

  constructor (props) {
    super()
    this.state = {
      taskSelected : props.taskSelected
    }
     this.textArea
   }

   componentDidMount = () => {
     console.log(this.props)
   }

   chiudiModificaTitolo = () => {
     this.setState({
       editingTask: false
     })
   }

   saveEditTitolo = (e) => {
    this.setState({
        editingTask: false,
        titolo: this.textArea.value
    })
  }

  addTask = (e) => {

    if(this.inputAdd.value !== ''){

    var todo = {
        id: Math.random()*1000,
        todo: this.inputAdd.value,
        check: false,
        deleted: false,
        modificando: false
      }
    store.dispatch(addToDo(todo))
  }
}

  render() {
    return (
      <div className="task-container">

          <button className={'modifica-task ' + (this.props.taskSelected.editingTask ? 'nascondiElemento':' ')} onClick={() => this.clickEdit()}>
            <img className={'icona-modifica' + (this.props.taskSelected.editingTask ? 'nascondiElemento':' ')} src="./static/edit3.svg" />
          </button>

          <button className={'chiudi-modifica-task ' + (this.props.taskSelected.editingTask ? 'mostraElemento':' ')} onClick={() => this.chiudiModificaTitolo()}>
            <img className="icona-modifica" src="./static/close.svg" />
          </button>

          <button className={'salva-modifica-task ' + (this.props.taskSelected.editingTask ? 'mostraElemento':' ')} onClick={(e) => this.saveEditTitolo(this.props.taskSelected.titolo)}>
            <img className="icona-modifica" src="./static/save.svg" />
          </button>

          <textarea
            defaultValue={this.props.taskSelected.titolo}
            className={'textarea-titolo ' + (this.props.taskSelected.editingTask ? ' mostraElemento ' : ' ')}
            ref={(e) => {this.props.taskSelected.textArea = e}}/>

          <h1 className={(this.props.taskSelected.editingTask ? 'nascondiElemento':' ')}>{this.props.taskSelected.titolo}</h1>

          <input className="addTodo" type="text" ref={(e) => {this.inputAdd = e}}></input>
          <button className="buttonAddTodo" onClick={(e) => this.addTask()}>
            <img src="./static/add.svg" />
          </button>

        <ToDoLoop self={this}></ToDoLoop>

        <DayTask  scadenza={this.props.taskSelected.scadenza}></DayTask>

      </div>
    )
  }
}

export default TaskContainer

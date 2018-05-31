import React, { Component } from 'react';
import '../SinglePage.css';
import ToDoLoop from './ToDoLoop'
import TaskContainer from './TaskContainer'
import _ from 'lodash'
import * as moment from 'moment-timezone'
import {store} from '../../store/index'
import {deleteToDo, modifyToDo} from '../../store/actions/task'

class SingleTask extends Component {

  constructor (props) {
    super()
    this.state = {
      modificando: false
    }
  }

  clickCheck = (e, key) => {

    this.setState({
      toDoArray: this.state.toDoArray.map((i) => {
        if(i.id === key) {
          i.check = !i.check
        }
        return i
      })
    })

  }

  deletedTodo = (e) => {

    store.dispatch(deleteToDo(this.props.item))

  }

  modificaTask = (e, key) => {

    this.props.taskSelected = {
      editing: true,
      toDoArray: _.map(this.state.toDoArray, (i) => {
        if(i.id === key) {
          i.modificando = !i.modificando
        }
        return i
      })
    }
  }

  chiusuraModificaTask = (e, key) => {
    this.setState({
      editing: false,
      toDoArray: this.state.toDoArray.map((i) => {
        if(i.id === key) {
          i.modificando = !i.modificando
        }
        return i
      })
    })
  }

saveEdit = (e, key, textarea) => {

  var todo = {
      id: this.props.item.id,
      todo: this.textArea.value,
      check: this.props.item.check,
      deleted: false
    }
    store.dispatch(modifyToDo(todo))
    this.setState({
      modificando:false
    })
}

clickEdit = () => {

  this.setState({
    editingTask: true
  })
}

  modificaTask = () => {
    this.setState({
      modificando:true
    })
  }
  textArea = ''

  calculateRows = (item) => {
   if(!item || !item.todo) return false
   if(item.todo.length < 21) {
     return 1
   } else if(item.todo.length > 42) {
     return 3
   }
  }

  render() {
    return(

      <div className='todoCont'>

        <div className={'checkbox ' + (this.state.modificando ? 'nascondiElemento ' : ' ')}
          onClick={(e) => this.props.item.self.clickCheck(e, this.props.item.id)}>
          <img src="./static/check.svg" className={'checkimg ' + (this.props.item.check ? 'display':' ') }></img>
        </div>

        <div className={'todo ' + (this.props.item.check ? 'barrato':' ') + (this.state.modificando ? 'nascondiElemento ' : ' ')}>
          {this.props.item.todo}
        </div>

        <div className={'edit-delete-todo ' + (this.state.modificando ? 'nascondiElemento ' : ' ')}
          onClick={(e) => this.deletedTodo(e)}
          hidden={(this.props.item.editing ? true : false)}>
          <img src="./static/minus.svg"/>
        </div>

        <div className={'edit-delete-todo ' + (this.state.modificando ? 'nascondiElemento ' : ' ')}
          onClick={this.modificaTask}
          hidden={(this.props.item.editing ? true : false)}>
          <img src="./static/edit3.svg"/>
        </div>

        <div className={'close-save-todo '+ (this.state.modificando ? 'mostraElementoInline ' : ' ')}
          onClick={(e) => this.saveEdit(e)}>
          <img src="./static/checkW.svg"/>
        </div>

        <div className={'close-save-todo '+ (this.state.modificando ? 'mostraElementoInline ' : ' ')}
          onClick={(e) => this.chiusuraModificaTask(e)}>
          <img src="./static/closeW.svg"/>
        </div>

        <textarea
          ref={(e) => this.textArea = e}
          rows={this.calculateRows(this.props.item)}
          className={'modifca-todo ' + (this.state.modificando ? ' mostraElementoInline ' : ' ')}
          style={(this.state.modificando ? {marginLeft: '0px'} : {})}
          defaultValue={this.props.item.todo}
        />

      </div>

    )
  }
}

export default SingleTask

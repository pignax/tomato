import React, { Component } from 'react';
import '../SinglePage.css';
import ToDoLoop from './ToDoLoop'
import TaskContainer from './TaskContainer'
import _ from 'lodash'
import * as moment from 'moment-timezone'
import {store} from '../../store/index'

class DayTask extends Component {

  constructor (props) {
    super()
    this.todos = []
   }

   componentDidMount(){
     store.subscribe(()=> {
       this.todos = store.getState().taskToDos
     })
   }

   calcoloGiorni = () => {

    var giorni = moment(moment(this.props.scadenza, 'YYYY-MM-DD-HH:mm').tz("Europe/Rome").diff(moment())).tz("Europe/Rome")

    if(giorni.valueOf() <= 0) {
      giorni = 'tempo scaduto!'
      return giorni
    }

    if(giorni.valueOf() <= 86400000) {

      return moment.duration(giorni.valueOf()).hours() + ' : ' + moment.duration(giorni.valueOf()).minutes()
    }

    if(giorni.valueOf() >= 2) {
      return giorni.format('D') + ' giorni'
    }
  }

  calcoloPercentuale = () => {

    var totArray  =  this.todos.length
    var nCheck =  _.filter(this.todos, (i) => {
      return i.check
    }).length

    return (nCheck * 100) / totArray + '%'
  }

render() {
  return(

    <div className="container">
      <div className="progressbar">
        <div className="progress" style={{width: this.calcoloPercentuale()}} />
      </div>

      <h6>tempo restante:</h6>
      <h2>{this.calcoloGiorni()}</h2>
    </div>

  )}
}

export default DayTask

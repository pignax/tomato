import React, { Component } from 'react';
import {store} from '../../store/index'
import {addNewTask} from '../../store/actions/task'

import '../main.css';


class Addtask extends Component {

  constructor(props) {
    console.log(props);
    super()
    this.state = {

    }
  }

  salvaTask = () => {
    store.dispatch(addNewTask({
        id : Math.random(),
        title: this.inputitolo,
        description: this.textArea,

        time: '2 giorni'
    }))
  }


  render() {
    return (

      <div className={'container-fluid nopad nomargin modale-aggiungi-task' + (this.props.isvisible ? '' : ' move-right')}>


      <p className="titolo-modale-aggiungi-task">
        Aggiungi Task
      </p>

      <p className="titolo-campi-task">
      <span>&bull; &nbsp;</span>Titolo
      </p>
      <input className="inserisci-titolo" placeholder="Inserisci titolo" onChange={(e) => this.inputitolo = e.target.value}/>

        <p className="titolo-campi-task">
            <span>&bull; &nbsp;</span>Descrizione
            </p>

            <textArea className="textarea-descrizione" rows="4" onChange={(e) => this.textArea = e.target.value}></textArea>

          <a href="#" className="btn btn-primary btn-lg button-salva-dati" role="button" aria-disabled="true" onClick={this.salvaTask}>Salva</a>

    </div>

    );
  }
}

export default Addtask;

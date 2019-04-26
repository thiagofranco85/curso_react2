import React, { Component } from 'react'
import Axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3000';

export default class Todo extends Component {
    
    constructor(props){
        super(props);
        this.state = {description: '', list:[]}
        this.refresh(); 
    }

    handleAdd(){
        const description = this.state.description;

        Axios.post( URL + "/produtos", {description} )
        .then( resp => console.log("Funcionou") ); 

        this.refresh(); 
        
    }

    refresh(){
         
        Axios.get(`${URL}/produtos`).then(resp =>  this.setState(...this.state, {description: '', list:resp.data}) );
        
         
        
        console.log(this.state);
    }

    handleChange(e){ 
        this.setState({ ...this.state, description: e.target.value})
        
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm
                    description = {this.state.description}
                    handleChange={(e) => this.handleChange(e)}
                    handleAdd={() => this.handleAdd()} />
                <TodoList />
            </div>
        )
    }
}
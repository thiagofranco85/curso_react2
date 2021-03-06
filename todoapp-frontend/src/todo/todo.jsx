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

        //this.handleRemove = this.handleRemove.bind(this)
    }

    handleAdd(){
        const description = this.state.description;

        Axios.post( URL + "/produtos", {description} )
        .then( resp =>  this.refresh() ); 
 
        
    }

    refresh(){
         
        Axios.get(`${URL}/produtos`).then(resp =>  this.setState(...this.state, {description: '', list:resp.data}) );
         
    }

    handleChange(e){ 
        this.setState({ ...this.state, description: e.target.value})
        
    }

    handleRemove( todo ){ 
        Axios.delete(`${URL}/produtos/${todo.id}`).then( resp =>  () => this.refresh() );
        
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm
                    description = {this.state.description}
                    handleChange={(e) => this.handleChange(e)}
                    handleAdd={() => this.handleAdd()} />
                <TodoList list={this.state.list} handleRemove={ this.handleRemove } />
            </div>
        )
    }
}
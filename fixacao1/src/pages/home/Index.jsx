import React, { Component } from 'react'
import Axios from 'axios'
import ListaHome from './ListaHome'

const URL = 'http://localhost:3000';

export default class Index extends Component{ 
    
    constructor(props){
        super(props);   
        this.state = { lista: [], texto: '' };
    }

    listarProdutos(){ 
        Axios.get( URL + "/produtos" ).then( 
            resp =>  {
                this.setState({ lista: resp.data });
                console.log(resp.data)
            }
            
        );         
    }

    escrever(event){
       this.setState({...this.state, texto: event.target.value});    
        
    }

   
    /*
    listarTeste(){
        this.setState({ lista: [1,2,3,4,5] });         
    }
    */
    
    render(){    
        return <ListaHome valor={this.state.texto} escrever={(event) => this.escrever(event)} />
        const {lista} = this.state; 

        const result = lista.map((x) => {
            return <p key={x.id} >{x.description}</p>
        });       
      
        return <ul>{result}</ul>
 
    }
}




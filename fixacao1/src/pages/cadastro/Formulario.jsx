import React, { Component } from 'react'
  

export default class Formulario extends Component{     

     

    render(){   
      
        return <form onSubmit={ this.props.enviarCadastro }>
                    <label>Nome</label><br/> 
                    <input type="text" id="nome" name="nome"/><br/> 

                    <label>CPF</label><br/> 
                    <input type="text" id="cpf" name="cpf"/><br/> 

                    <label>Data Nascimento</label><br/> 
                    <input type="date" id="dataNasc" name="dataNasc" /><br/> 
                    <button type="submit">Enviar</button> 
                </form>     
        
        
    }

}
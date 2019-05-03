import React, { Component } from 'react' 
import Formulario from './Formulario';  
 
export default class Index extends Component{ 

    constructor(props){
        super(props);  
    } 

    enviarCadastro(event){   
      
      console.log(event.target.name);

        event.preventDefault(); 
        
        
    }

    render(){ 
        return  <div>
                    <Formulario enviarCadastro={(event) => this.enviarCadastro(event)} /> 
                </div>
    }
}

/*
constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
      nomeMae:""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  enviar(event){ 
    event.preventDefault();   
    console.log(this.state); 
  }

  render() {
    return (
      <form onSubmit={(event) => this.enviar(event)}>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label> 
        <input
            name="nomeMae"
            type="text"
            value={this.state.nomeMae}
            onChange={this.handleInputChange} />
        </label>

        <button type="submit">Enviar</button>
      </form>
    );
  }
}
*/
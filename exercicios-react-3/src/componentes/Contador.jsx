import React, {Component} from 'react'

export default class Contador extends Component{ 
     
    state = {
        numero: 0
    }

    maisUm = (e) => {          
        this.setState({numero: this.state.numero + 1})
    }

    menosUm = ()=> {
        this.state.numero--;
    }

    render(){ 
        return <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.menosUm}>Dec</button>
                <button onClick={this.maisUm}>Inc</button>
               </div>;
    }

    //Solucao 01
    /*
    constructor(props){
        super(props);
        this.maisUm = this.maisUm.bind(this);
        this.menosUm = this.menosUm.bind(this);
    }
    */
}
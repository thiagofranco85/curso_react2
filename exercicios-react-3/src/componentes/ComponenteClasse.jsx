import React, {Component} from 'react';

export default class ComponenteClasse extends Component{

    render(){
        return <h1>Olá {this.props.valor}</h1>;
    }
}

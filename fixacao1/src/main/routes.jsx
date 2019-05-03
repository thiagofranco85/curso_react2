
import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
 
import Index from '../pages/home/Index'
import Formulario from '../pages/cadastro/Index'

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={Index} />
        <Route path="/cadastro" component={Formulario} />

        <Redirect from="*" to='/' />
    </Router>
)
 
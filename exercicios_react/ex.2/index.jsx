import React from 'react'
import ReactDom from 'react-dom'
import Primeiro,{ Segundo } from './component.jsx'


ReactDom.render(
    <div>
        <Primeiro />
        <Segundo />
    </div>
, document.getElementById('app'))
 
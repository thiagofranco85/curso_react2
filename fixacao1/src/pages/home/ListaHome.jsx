import React from 'react'

export default props => (
        <div>
            <label id="texto">{props.valor}</label>
            <input type="text" onChange={props.escrever}/>
        </div>
)
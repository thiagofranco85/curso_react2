import React from 'react';
import Membro from './Membro'

export default props =>

<div>
    <Membro nome="Thiago" sobrenome={props.sobrenome} />
    <Membro nome="Jose" sobrenome={props.sobrenome} />
    <Membro nome="Eliane" sobrenome={props.sobrenome} />
</div>

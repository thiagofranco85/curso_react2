import React from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponente from './componentes/PrimeiroComponente'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro';
import Animal from './componentes/Animais';
import FamiliaSilva from './componentes/FamiliaSilva'
import ComponenteClasse from './componentes/ComponenteClasse'
import Contador from './componentes/Contador'

const elemento = document.getElementById('root');

ReactDOM.render(



<React.Fragment>
    <Contador numero={0} />
 
</React.Fragment>, elemento);



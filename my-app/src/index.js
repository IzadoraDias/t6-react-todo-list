import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Input from './components/form/input'
import Label from './components/form/label/label'
import Link from './components/form/link/link'
import Form from './components/form/form'
import Button from './components/form/button/'

import * as serviceWorker from './serviceWorker';


const component = <Form title='Login' text='Entre com Seu email e Senha'>
    <Label htmlFor='Email'>Email</Label>
    <Input id='Email' type='text'/>
    <Label htmlFor='password'>Senha</Label>
    <Input id='password' type='text'/>
    <Button disabled>Enviar</Button>
    <Link href='#'>Criar uma conta</Link>

</Form>


ReactDOM.render(component, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react'
import Form from '../../components/form'
import Container from '../../components/container'


// function Login() {
//     return (
//         <Container>
//             <Form title='Login' text='Entre com Seu email e Senha'>
//                 <Form.Label htmlFor='Email'>Email</Form.Label>
//                 <Form.Input id='Email' type='email' required/>
//                 <Form.Label htmlFor='password'>Senha</Form.Label>
//                 <Form.Input id='password' type='password' minLength={6} required/>
//                 <Form.Button disabled={this.state.disabled}>Enviar</Form.Button>
//                 <Form.Link href='#'>Criar uma conta</Form.Link>
//             </Form>
//         </Container>
//     )
// }
// export default Login 

class Login extends React.Component{
    constructor(){
        super()
        this.state= { disabled : true }
}

onDisabledButton = () => {
    console.log('oi')
}

    render(){
        return (
            <Container>
            <Form title='Login' text='Entre com Seu email e Senha'>
                <Form.Label htmlFor='Email'>Email</Form.Label>
                <Form.Input id='Email' type='email' onChange={this.onDisabledButton} required/>
                <Form.Label htmlFor='password'>Senha</Form.Label>
                <Form.Input id='password' type='password' onChange={this.onDisabledButton} minLength={6} required/>
                <Form.Button disabled={this.state.disabled}>Enviar</Form.Button>
                <Form.Link href='#'>Criar uma conta</Form.Link>
            </Form>
        </Container>
        )
    }
}

export default Login
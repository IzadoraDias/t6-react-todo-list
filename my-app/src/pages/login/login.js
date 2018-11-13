import React from 'react'
import Form from '../../components/form'
import Container from '../../components/container'


function Login() {
    return (
        <Container>
            <Form title='Login' text='Entre com Seu email e Senha'>
                <Form.Label htmlFor='Email'>Email</Form.Label>
                <Form.Input id='Email' type='email' required/>
                <Form.Label htmlFor='password'>Senha</Form.Label>
                <Form.Input id='password' type='password' minLength={6} required/>
                <Form.Button disabled>Enviar</Form.Button>
                <Form.Link href='#'>Criar uma conta</Form.Link>
            </Form>
        </Container>
    )
}
export default Login 
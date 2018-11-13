import React from 'react'
import Form from '../../components/form'
import Container from '../../components/container'


function Login() {
    return (
        <Container>
            <Form title='Login' text='Entre com Seu email e Senha'>
                <Form.Label htmlFor='Email'>Email</Form.Label>
                <Form.Input id='Email' type='text' />
                <Form.Label htmlFor='password'>Senha</Form.Label>
                <Form.Input id='password' type='text' />
                <Form.Button disabled>Enviar</Form.Button>
                <Form.Link href='#'>Criar uma conta</Form.Link>
            </Form>
        </Container>
    )
}
export default Login 
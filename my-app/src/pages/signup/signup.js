import React from 'react'
import Form from '../../components/form'
import Container from '../../components/container'


function Signup() {
    return (
        <Container>
            <Form title='Sign up' text='Preencha com o seu cadastro'>
                <Form.Label htmlFor='Nome'>Nome</Form.Label>
                <Form.Input id='Nome' type='text' />
                <Form.Label htmlFor='Email'>Email</Form.Label>
                <Form.Input id='Email' type='text' />
                <Form.Label htmlFor='Telefone'>Telefone</Form.Label>
                <Form.Input id='Telefone' type='text' />
                <Form.Label htmlFor='password'>Senha</Form.Label>
                <Form.Input id='password' type='text' />
                <Form.Button disabled>Enviar</Form.Button>
                <Form.Link href='#'>Fazer login</Form.Link>
            </Form>
        </Container>
    )
}
export default Signup 
import React from 'react'
import Form from '../../components/form'
import Container from '../../components/container'
import { signupUser } from '../../apis/signup.api'

// function Signup() {
//     return (
//         <Container>
//             <Form title='Sign up' text='Preencha com o seu cadastro'>
//                 <Form.Label htmlFor='Nome'>Nome</Form.Label>
//                 <Form.Input id='Nome' type='text' required/>
//                 <Form.Label htmlFor='Email'>Email</Form.Label>
//                 <Form.Input id='Email' type='text' required/>
//                 <Form.Label htmlFor='Telefone'>Telefone</Form.Label>
//                 <Form.Input id='Telefone' type='text' required/>
//                 <Form.Label htmlFor='password'>Senha</Form.Label>
//                 <Form.Input id='password' type='text' required/>
//                 <Form.Button disabled>Enviar</Form.Button>
//                 <Form.Link href='#'>Fazer login</Form.Link>
//             </Form>
//         </Container>
//     )
// }

class Signup extends React.Component {
    constructor() {
        super()
        this.state = { disabled: true }
        this.name = React.createRef()
        this.email = React.createRef()
        this.phone = React.createRef()
        this.password = React.createRef()
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const inputName = this.name.current
        const inputEmail = this.email.current
        const inputPhone = this.email.phone
        const inputPassword = this.password.current
        const user = {
            name: inputName.getValue(),
            email: inputEmail.getValue(),
            phone: inputPhone.getValue(),
            password: inputPassword.getValue()
        }


        signupUser(user)
            .then((response) => {
                this.props.history.push('/')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    onDisabledButton = () => {
        const inputName = this.name.current
        const inputEmail = this.email.current
        const inputPhone = this.phone.current
        const inputPassword = this.password.current

        if (inputEmail.hasError() ||
            inputPassword.hasError() ||
            inputName.hasError() ||
            inputPhone.hasError()) {
            this.setState({ disabled: true })
        } else {
            this.setState({ disabled: false })
        }
    }

    render() {
        return (
            <Container>
                <Form title='Sign up' text='Preencha com o seu cadastro'>
                    <Form.Label htmlFor='Name'>Nome</Form.Label>
                    <Form.Input ref={this.name} id='Name' type='text' onChange={this.onDisabledButton} required />
                    <Form.Label htmlFor='Email'>Email</Form.Label>
                    <Form.Input ref={this.email} id='Email' type='text' onChange={this.onDisabledButton} required />
                    <Form.Label htmlFor='phone'>Telefone</Form.Label>
                    <Form.Input ref={this.phone} id='Phone' type='text' onChange={this.onDisabledButton} />
                    <Form.Label htmlFor='password'>Senha</Form.Label>
                    <Form.Input ref={this.password} id='Password' type='password' onChange={this.onDisabledButton} minLength={6} required />
                    <Form.Button disabled={this.state.disabled}>Enviar</Form.Button>
                    <Form.Link href='/login'>Fazer login</Form.Link>
                </Form>
            </Container>
        )
    }
}

export default Signup




import React from 'react'
import Form from '../../components/form'
import Container from '../../components/container'
import { setUser } from '../../infra/local-storage'
import { loginUser } from '../../apis/login.api'


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

class Login extends React.Component {
    constructor() {
        super()
        this.state = { disabled: true }
        this.email = React.createRef()
        this.password = React.createRef()
    }

    onDisabledButton = () => {
        const inputEmail = this.email.current
        const inputPassword = this.password.current

        if (inputEmail.hasError() || inputPassword.hasError()) {
            this.setState({ disabled: true })
        } else {
            this.setState({ disabled: false })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const inputEmail = this.email.current
        const inputPassword = this.password.current
        const user = {
            email: inputEmail.getValue(),
            password: inputPassword.getValue()
        }


        loginUser(user)
            .then((response) => {
                setUser(user)
                setUser({ email: user.email })
                this.props.history.push('/')
            })

            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <Container>
                <Form title='Login' text='Entre com Seu email e Senha' onSubmit={this.handleSubmit}>
                    <Form.Label htmlFor='Email'>Email</Form.Label>
                    <Form.Input ref={this.email} id='Email' type='email' onChange={this.onDisabledButton} required />
                    <Form.Label htmlFor='password'>Senha</Form.Label>
                    <Form.Input ref={this.password} id='password' type='password' onChange={this.onDisabledButton} minLength={6} required />
                    <Form.Button disabled={this.state.disabled}>Enviar</Form.Button>
                    <Form.Link href='/conta'>Criar uma conta</Form.Link>
                </Form>
            </Container>
        )
    }
}

export default Login
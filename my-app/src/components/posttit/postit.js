import React from 'react'
import './postit.css'
import Form from '../form'
import { createPostit } from '../../apis/postit.api';


class Postit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            title: '',
            text: '',
            editing: false
        }
    }

handlePostitClick = () => {
    console.log('handlePostitClick')
    this.setState({
        editing: true
    })
}
    handlePostitRemove = () => {
        console.log('handlePostitremove')
    }

    handlePostitSubmit = (e) => {
        e.preventDefaul()
        const postit = {
            title: this.state.title,
            text: this.state.text
        }
        createPostit(postit)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    setTitle = (e) => {
        const inputTitle = e.target.value
        this.setState({
            title: inputTitle
        })
    }

    setText = (e) => {
        const inputText = e.target.value
        this.setState({
            tex: inputText//
        })
    }


        render() {
            return (
                <div onClick={this.handlePostitClick} className='postit'>

                    <Form onSubmit={this.handlePostitSubmit}>
                        {this.state.editing && (
                            <button onClick={this.handlePostitRemove}
                                className='postit__button-remove'>
                                X
                             </button>
                        )
                        }
                        <input type='text'
                            className='postit__title'
                            placeholder="Título"
                            value={this.state.title}
                            onChange={this.setTitle}
                        />

                        <textarea
                            className='postit__text'
                            placeHolder='Digite o texto...'
                            name='text'
                            value={this.state.text}
                            onChange={this.setText}
                        />
                        <button className='postit__button-completed'>
                            Concluído
                     </button>
                    </Form>
                </div>
            )
        }
    }


    export default Postit
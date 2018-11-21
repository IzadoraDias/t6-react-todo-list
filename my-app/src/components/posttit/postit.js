import React from 'react'
import './postit.css'
import Form from '../form'

class PostIt extends React.Component {
    render() {
        return (
            <div className='postit'>
                <Form>
                    <input type='text' className='postit__title' placeholder="Título" />
                    <textarea
                        className='postit__text'
                        placeHolder='Digite o texto...'
                        name='text'
                    />
                    <button className='postit_button-completed'>
                        Concluído
                     </button>

                </Form>
            </div>

        )
    }
}


export default PostIt
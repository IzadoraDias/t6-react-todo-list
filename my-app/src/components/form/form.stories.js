import React from 'react'
import { storiesOf } from '@storybook/react'
import Form from './index'


storiesOf('Components/Form', module)
    .add('default', () => (
        <Form title='Titlle here' text='Text here'>
            <Form.Label>Nome</Form.Label>
            <Form.Input type='text' />
        </Form>

    )) 
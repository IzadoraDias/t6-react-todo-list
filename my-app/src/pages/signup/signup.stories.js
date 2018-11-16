import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
import Signup from './index'

storiesOf('Pages/signup', module)
.addDecorator(StoryRouter())
.add('default', () => (
    <Signup />
))
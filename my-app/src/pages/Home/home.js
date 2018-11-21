import React from 'react'
import { getUser } from '../../infra/local-storage'
import { Redirect } from 'react-router-dom'
import Postit from '../../components/posttit'

class Home extends React.Component {
    constructor(){
        super()
    }
    // componentDidMount() {
    //     console.log('hello componentDidMount foi criado')
    // }
    // componentWillUnmount() {
    //     console.log('hello componentWillUnmount morreu :(')
    // }
    render(){
        if(getUser()){
             return <Postit>

             </Postit>   
        }else{
             return <Redirect to='/login' />
        }
    }
} 
export default Home
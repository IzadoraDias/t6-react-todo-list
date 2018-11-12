import React from 'react'

function Link(props) {
    return (
        <a
            href={props.href}
            id={props.id}
            className='link'
            htmlFor={props.htmlFor}>
            {props.children}
        </a>
    )
}

export default Link


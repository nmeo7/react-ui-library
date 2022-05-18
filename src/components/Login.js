import React, { useState } from 'react'
import { css } from 'glamor'

import { Input } from './Input'
import { grid } from './styles'
import { Btn } from './Btn'

const style = css({
    gridTemplateColumns: '40% 60%', minHeight: '100vh',
    '@media(max-width: 720px)': {
        '& .hide-on-phone': {
            display: 'none'
        },
        gridTemplateColumns: 'auto'
    }
})

export const Login = (props) => {
    const [user, setUser] = useState( { username: '', password: '' } )
    
    return (
        <div {...grid} {...style} >
            <div {...grid} style={{ background: 'rgb(94, 53, 0) none repeat scroll 0% 0%', height: '100%', width: '100%' }} className='hide-on-phone' >
                { props.illustration || <img alt='no illustration' /> }
            </div>
            <div {...grid} >
                <div style={{ width: '400px' }} >
                    { props.logo || <img alt='no illustration' /> }
                    <h1 style={{ fontSize: '2em', paddingBottom: '.5em', borderBottom: '1px solid lightblue', paddingLeft: '.4em' }} >Login</h1>
                    
                    <form onSubmit={ (e) => { e.preventDefault() } } >
                        <Input multiline label="username" onChange={ (value) => setUser( { username: value, password: user.password } ) } />
                        <Input multiline label="password" type="password" onChange={ (value) => setUser( { username: user.username, password: value } ) } />
                        <div style={{ marginTop: '48px' }}>
                            <Btn onSubmit={() => props.onSubmit(user)} error={props.loginState} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
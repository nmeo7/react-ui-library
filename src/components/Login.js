import React, { useState } from 'react'
import { Input } from './Input'
import { grid } from './styles'
import { Btn } from './Btn'
import { A } from './A'

export const Login = (props) => {

    const [user, setUser] = useState( { username: '', password: '' } )
    
    return (
        <div {...grid} style={{ gridTemplateColumns: '40% 60%', minHeight: '100vh' }} >
            <div {...grid} style={{ background: '#ebcf8a', height: '100%', width: '100%' }} >
                { props.illustration || <img alt='no illustration' /> }
            </div>
            <div {...grid} style={{ }} >
                <div style={{ width: '400px' }} >
                    { props.logo || <img alt='no illustration' /> }
                    <h1 style={{ fontSize: '2em', paddingBottom: '.5em', borderBottom: '1px solid lightblue', paddingLeft: '.4em' }} >Login</h1>
                    <Input label="username" onChange={ (value) => setUser( { username: value, password: user.password } ) } />
                    <Input label="password" type="password" onChange={ (value) => setUser( { username: user.username, password: value } ) } />
                    <div style={{ marginTop: '48px' }}>
                        <Btn onSubmit={() => props.onSubmit(user)} />
                    </div>
                    <A href='/' >Forgot credentials?</A>
                </div>
            </div>
        </div>
    )
}
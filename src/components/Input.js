import { css } from 'glamor'
import React, {useContext} from 'react'
import { UserContext } from '../layouts/Context'

export const Input = (props) => {
    
    const { theme } =  useContext (UserContext) 

    const style = css({
        border: `2px solid ${theme.primaryColorLight}`,
        '&:hover': {
            border: `2px solid ${theme.primaryColorVariant}`,
        },
        '&:focus': {
            border: `2px solid ${theme.primaryColor}`,
        }
    })

    // props.multiline
    
    return (
        <div style={{ width: props.width || '100%', paddingBottom: '1em'  }} >
            { props.noLabel ? null : <label style={{ padding: '2em 1em .5em', display: 'block' }} >{ `${props.label}:` || 'Input:'}</label> }
            {/* <input style={{ width: 'calc(100% - 2em)', padding: '1em', borderRadius: '1.5em', display: 'block', border: '1px solid #aaa', background: '#eee', backgroundColor: '#fff', backgroundImage:  'linear-gradient(#eee 1px, transparent 1px), linear-gradient(to right, #eee 1px, #fff 1px)', backgroundSize: '16px 16px', background: '#f9f1dc' }}  type={ props.type || 'text' } /> */}
            {
                props.textarea ?
                <textarea { ...style } style={{ outline: 'none', width: 'calc(100% - 2em)', padding: '1em', borderRadius: '1.5em', display: 'block', background: 'transparent', height: '200px', resize: 'vertical' }} placeholder={props.label} onChange={ (e) => {props.onChange(e.target.value) } } ></textarea>
                :
                <input { ...style } placeholder={ `type ${props.label} here` || 'Label...'} style={{ outline: 'none', width: 'calc(100% - 2em)', padding: '1em', borderRadius: '1.5em', display: 'block', background: 'transparent' }} type={ props.type || 'text' }  onChange={ (e) => {props.onChange(e.target.value) } } />
            }
        </div>
    )
}
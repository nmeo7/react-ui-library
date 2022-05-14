import Cleave from 'cleave.js/react'
import { css } from 'glamor'
import React, {useContext} from 'react'

import { UserContext } from '../layouts/Context'

const style = (theme) => css({
    outline: 'none', width: 'calc(100% - 2em)', padding: '1em', borderRadius: '1.5em', display: 'block', background: 'transparent',
    border: `2px solid ${theme.primaryColorLight}`,
    '&:hover': {
        border: `2px solid ${theme.primaryColorVariant}`,
    },
    '&:focus': {
        border: `2px solid ${theme.primaryColor}`,
    }
})


export const Input = (props) => {
    const { theme } = useContext (UserContext) 
    
    return (
        <div style={{ width: props.width || 'calc(100% - 4px)', paddingBottom: '1em', display: props.multiline ? 'block' : 'flex' }} >
            { props.noLabel ? null : <label style={{ padding: '1em', display: 'block', width: props.labelWidth || '320px', textAlign: !props.multiline && 'right' }} >{ `${props.label || 'Input'}:`}</label> }
            {
                props.textarea ?
                <textarea {...style(theme)} style={{ height: '200px', resize: 'vertical' }} placeholder={props.label} onChange={ e => props.onChange(e.target.value) } value={props.value} ></textarea>
                :
                ( props.format ?
                <Cleave placeholder={ props.placeholder || `type ${props.label} here` } {...style(theme)} value={props.value}
                                options={ props.format }
                                onChange={ e => props.onChange( props.format?.raw ? e.target.rawValue : e.target.value ) } />
                :
                <input className={props.inputClass} {...style(theme)} placeholder={ props.placeholder || `type ${props.label} here` } type={ props.type || 'text' }  onChange={ e => props.onChange(e.target.value) } value={props.value} />
                )
            }
        </div>

    )
}
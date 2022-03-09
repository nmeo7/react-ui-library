import React from 'react'

export const Input = (props) => {
    
    return (
        <div style={{ width: props.width || '100%'  }} >
            { props.noLabel ? null : <label style={{ padding: '2em 1em .5em', display: 'block' }} >{ props.label || 'Label'}</label> }
            {/* <input style={{ width: 'calc(100% - 2em)', padding: '1em', borderRadius: '1.5em', display: 'block', border: '1px solid #aaa', background: '#eee', backgroundColor: '#fff', backgroundImage:  'linear-gradient(#eee 1px, transparent 1px), linear-gradient(to right, #eee 1px, #fff 1px)', backgroundSize: '16px 16px', background: '#f9f1dc' }}  type={ props.type || 'text' } /> */}
            <input placeholder={ props.label || 'Label'} style={{ width: 'calc(100% - 2em)', padding: '1em', borderRadius: '1.5em', display: 'block', border: '2px solid #f9f1dc', background: 'transparent' }}  type={ props.type || 'text' }  onChange={ (e) => {props.onChange(e.target.value) } } />
        </div>
    )
}
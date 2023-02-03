import React from 'react'

export const Chip = ({ onClick, selected, styles = {}, ...props}) => {
    const {color, backgroundSelected, background} = styles
    const backgroundColor = selected ? backgroundSelected || '#eee' : background || 'white' 
  return (<span
    onClick={onClick}
    style={{
        display: 'inline-block',
        padding: '8px 16px',
        marginRight: '16px',
        backgroundColor,
        color: color || '#333',
        fontWeight: selected && '700',
        borderRadius: '32px',
        cursor: 'pointer',
        // border: '1px solid #f9f1dc',
        // ...styles
    }}
    >
    {props.children}
    </span>
  )
}


import React from 'react'

export const KeyValue = props => {
    return (
        <div style={{ display: props.multiline ? '' : 'flex', flexDirection: 'row', padding: '16px', width: 'calc(100% - 16px)', paddingLeft: '0' }} >
            <div style={{ color: '#aaa' }} >{ props.key1 }</div>
            <div style={{ fontWeight: '900', flex: '1', textAlign: props.multiline ? '' : 'right', marginTop: props.multiline ? '16px' : '', lineHeight: '1.2em', color: '#333' }} >{ props.value1 }</div>
        </div>
    )
}
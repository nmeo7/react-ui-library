import React, { useContext, useState } from 'react'
import { css } from 'glamor'
import { Loading, UserContext } from '..'
import { Link } from 'react-router-dom'

export const KeyValue = (props) => {
    const { theme } =  useContext (UserContext)  
    console.log (props)
    return <div style={{ display: 'flex', flexDirection: 'row', padding: '16px', width: 'calc(100% - 32px)' }} >
        <div style={{ color: '#777' }} >{ props.key1 }</div>
        <div style={{ fontWeight: '700', flex: '1', textAlign: 'right' }} >{ props.value1 }</div>
    </div>
}
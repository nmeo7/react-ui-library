import React, { useContext } from 'react'
import { UserContext } from '../layouts/Context'

export const KeyValue = (props) => {
    const { theme } =  useContext (UserContext)

    return (
        <div style={{ display: 'flex', flexDirection: 'row', padding: '16px', width: 'calc(100% - 32px)' }} >
            <div style={{ color: theme.primaryColor || '#777' }} >{ props.key1 }</div>
            <div style={{ fontWeight: '700', flex: '1', textAlign: 'right' }} >{ props.value1 }</div>
        </div>
    )
}
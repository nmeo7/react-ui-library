import React from 'react'

export const Comment = ({content, created_by, action_name}) => (
    <div style={{ margin: '', marginBottom: '' }} >
        <p style={{ fontWeight: '900', margin: '0 0 16px 0' }} >{created_by}: {action_name != 'COMMENT' && action_name}</p>
        <p style={{ color: '#777' }} >{content}</p>
    </div>
)
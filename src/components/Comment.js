import React from 'react'

export const Comment = ({content, createdBy, actionName, actionDetails, createdAt, children}) => (
    <div style={{ margin: '', marginBottom: '' }} >
        <div>
            <p style={{ fontWeight: '900', margin: '0', display: 'inline-block' }} >{createdBy}</p> <span>{actionDetails}</span>
        </div>
        <div>
            <span style={{ fontSize: '12px' }} >{createdAt}</span>
        </div>
        {
            (children || content) && <p style={{ color: '#777', border: '1px solid #eee', borderRadius: '8px', padding: '8px', marginTop: '12px' }} >{children || content}</p>
        }
    </div>
)
import { Button as AntButton } from 'antd'
import React from 'react'

export const Button = props => {
    const flexStyle = props.flex && { flex: '1', display: 'block' }
    return (
        <AntButton 
            type={(props.ghost && 'ghost') || (props.link && 'link') || (props.text && 'text') || 'primary'}
            size={props.size || 'large'}
            htmlType={(props.reset && 'reset') || props.htmlType || 'submit'}
            style={{...flexStyle,...props.style }}
            loading={props.loading}
            onClick={props.setLoading ? 
                async () => {
                    props.setLoading(true)
                    await props.onClick()
                    props.setLoading(false)
                }
                : 
                props.onClick}
            disabled={props.disabled}
            id={props.id}
            icon={props.icon}>
            { props.children }
        </AntButton>
  )
}

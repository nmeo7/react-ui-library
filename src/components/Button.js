import { Button as AntButton } from 'antd'
import React from 'react'

export const Button = props => {
    return (
        <AntButton 
            type={(props.ghost && 'ghost') || (props.link && 'link') || (props.text && 'text') || 'primary'}
            size='large'
            htmlType={(props.reset && 'reset') || 'submit'}
            style={props.style}
            loading={props.loading}
            onClick={props.setLoading ? 
                async () => {
                    props.setLoading(true)
                    await props.onClick()
                    props.setLoading(false)
                }
                : 
                props.onClick}
            disabled={props.disabled}>
            { props.children }
        </AntButton>
  )
}

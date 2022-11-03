import { Form, Input } from 'antd'
import React from 'react'

const AntTextArea = Input.TextArea

export const TextArea = props => {
  return (
    <Form.Item label={ props.label } labelCol={{ span: props.span || '6' }}>
        <AntTextArea 
        style={{ padding: '16px', ...props.style }}
        size="large" 
        rows={ props.rows || 10 } 
        placeholder={ props.placeholder || props.label } 
        onChange={ l => props.onChange(l.target.value) } 
        value={props.value} />
    </Form.Item>
  )
}

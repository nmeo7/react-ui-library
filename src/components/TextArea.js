import { Form, Input } from 'antd'
import React from 'react'

const AntTextArea = Input.TextArea

export const TextArea = props => {
  return (
    <Form.Item label={ props.label } labelCol={{ span: 6 }}>
        <AntTextArea 
        size="small" 
        rows={ props.rows || 10 } 
        placeholder={ props.placeholder || props.label } 
        onChange={ l => props.onChange(l.target.value) } 
        value={props.value} />
    </Form.Item>
  )
}

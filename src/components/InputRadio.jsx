import { Form, Radio } from 'antd'
import React from 'react'

export const InputRadio = (props) => {
  return (
    <Form.Item label={'Gender'} labelCol={{ span: props.span || '6' }}>
      <Radio.Group
        size='large'
        buttonStyle='solid'
        onChange={(e) =>
          props.name
            ? props.handleChange({ name: props.name, value: e.target.value })
            : props.onChange(e.target.value)
        }
      >
        {(props.options || []).map((option) => (
          <Radio.Button value={option} key={option}>
            {option}
          </Radio.Button>
        ))}
      </Radio.Group>
    </Form.Item>
  )
}

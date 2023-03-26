import { Form, Select } from 'antd'
import React from 'react'

export const InputSelect = (props) => {
  return (
    <Form.Item
      label={'Project'}
      labelCol={{ span: props.span || '6' }}
      size='large'
    >
      <Select
        showSearch
        placeholder='Select Project'
        optionFilterProp='children'
        onChange={(value) =>
          props.name
            ? props.handleChange({ name: props.name, value })
            : props.onChange(value)
        }
        // onSearch={onSearch}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={props.options}
        size='large'
      />
    </Form.Item>
  )
}

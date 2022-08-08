import { Form, Input, InputNumber } from 'antd'
import React from 'react'

export const InputCurrency = props => {
  return (
    <Form.Item  label={ props.label || 'Enter Requested Amount' } labelCol={{ span: 6 }}>
        <InputNumber
            step={props.step || 1000000} 
            placeholder={ props.placeholder || props.label || 'Enter Requested Amount' } 
            onChange={ value => { console.log(value); props.onChange(('' + (value || 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ',') )} } // m => setRequested_amount(('' + (m || 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) } 
            value={ props.value }
            formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')} />
    </Form.Item>
    )
}

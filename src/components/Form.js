import { Form as AntForm, Spin } from 'antd'
import React from 'react'

export const Form = props => {
  return (
    <Spin spinning={!!props.loading} >
      <AntForm 
      size='large'
      onFinish={ 
        props.setLoading ? 
        async () => {
          props.setLoading(true)
          await props.onFinish()
          props.setLoading(false)
        }
        :
        props.onFinish
      } 
      layout={ props.vertical ? 'vertical' : 'horizontal' }
      labelAlign = { props.alignLeft ? 'left' : 'right' }>
          { props.children }
      </AntForm>
    </Spin>
  )
}

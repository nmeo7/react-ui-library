import React from 'react'
import { css } from 'glamor'

const style = css({
    position: 'relative', borderRadius: '32px', padding: '8px', textAlign: 'center', transitionDuration: '.2s',
    '&:hover': {
        boxShadow: '1px 2px 8px #ccc', cursor: 'pointer',
        '& .add': {
            display: 'grid'
        }
    },
    '& .add': {
        position: 'absolute', right: '0', top: '0', background: '#e43', width: '64px', height: '64px', borderRadius: '0 32px 0 8px', display: 'none', transitionDuration: '.2s'
    }
})

export const ProductCard = () => {
    return <div {...style} >
      <div style={{ position: 'absolute' }} >discount</div>
      <div className='add' style={{  }} ></div>
      <img width='100%' style={{ aspectRatio: '1/1', display: 'inline-block' }} alt='product image' />
      <p>product name</p>
      <h2>price</h2>
    </div>
  }
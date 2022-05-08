import React from 'react'
import { css } from 'glamor'

const style = css({
    position: 'relative', borderRadius: '32px', padding: '8px', transitionDuration: '.1s', border: '1px solid #eee', borderRadius: '16px',
    '&:hover': {
        boxShadow: '1px 2px 8px #ccc', cursor: 'pointer',
        '& .add': {
            display: 'grid'
        }
    },
    '& .add': {
        position: 'absolute', right: '0', top: '0', background: '#e43', width: '64px', height: '64px', borderRadius: '0 16px 0 8px', display: 'none', transitionDuration: '.1s'
    }
})

export const ProductCard = (props) => {
    return <div {...style} onClick={props.onClick} >
      <div style={{ position: 'absolute' }} >discount</div>
      <div className='add' style={{  }} ></div>
      <img style={{ aspectRatio: '4/5', display: 'inline-block', padding: '64px 32px 16px 32px', width: 'calc(100% - 64px)' }} alt='product image' src={props.img} />
      <p>{props.name || ''}</p>
      <h2>{props.price || '0'}</h2>
    </div>
  }
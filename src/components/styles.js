import { useEffect, useState } from 'react'

export const glass = {
  background: 'rgba(255, 255, 255, 0.05)',
  WebkitBackdropFilter: 'blur(15px)',
  backdropFilter: 'blur(12px)',
  WebkitBoxShadow: '5px 5px 20px rgba(0, 0, 0, 0.4)',
  boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.4)'
}

export const grid = { display: 'grid', placeItems: 'center' }

export const useResponsiveStyles2 = ({ small, large, ...defaultStyles }) => {
  const [size, setSize] = useState(window.innerWidth)

  useEffect(() => {
    setSize(window.innerWidth)
    window.addEventListener('resize', () => setSize(window.innerWidth))
  }, [])

  return {
    ...defaultStyles,
    ...(size > 1600 ? large : size < 720 ? small : null)
  }
}

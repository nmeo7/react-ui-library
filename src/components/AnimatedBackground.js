import React, { useContext } from 'react'
import { css } from 'glamor'
import { UserContext } from '../layouts/Context'

const floating = css.keyframes({
  '0%': { transform: `translate(0%, 0%) rotate(25deg)` },
  '25%': { transform: `translate(5%, 15%) rotate(25deg)` },
  '50%': { transform: `translate(10%, 5%) rotate(25deg)` },
  '75%': { transform: `translate(0%, 15%) rotate(25deg)` },
  '100%': { transform: `translate(0%, 0%) rotate(25deg)` }
})

const fadeInFromTop = css.keyframes({
  'from': { opacity: '0', transform: 'translateY(-20px)' },
  'to': { opacity: '1', transform: 'translateY(0)' }
})

export const backgroundTheme = (theme) => css({
  background: theme.backgroundColor || '#fffdf9',
  height: '100vh',
  width: '100%',
  top: '0',
  bottom: '0',
  position: 'fixed'
})

const circle = (theme) => css({
  width: '70px',
  height: '70px',
  top: '45%',
  left: '3%',
  border: '2px solid #333',
  position: 'absolute',
  display: 'block',
  borderRadius: '50%',
  transformOrigin: '50% 50%',
  animation: `${fadeInFromTop} .5s linear forwards, ${floating} ease-in-out 4s infinite`
})


export const AnimatedBackground = () => {
  const { theme } = useContext(UserContext)

  return (
  <div {...backgroundTheme(theme)}>
    <div { ...circle(theme) }></div>
  </div>
  )
}
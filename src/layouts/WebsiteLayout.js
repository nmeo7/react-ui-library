import React from 'react'
import styled, { css } from 'styled-components'

const Bar = styled.div`
  position: absolute;
  height: 5px;
  right: 32px;
  width: 36px;
  background-color: black;
  display: block;
  border-radius: 5px;
  transition: 0.3s ease;
  @media (min-width: 720px) {
    display: none;
  }
`

const Bar1 = styled(Bar)`
  top: 32px;
  &.change {
    transform: translateY(13px) rotateZ(-45deg);
  }
`

const Bar2 = styled(Bar)`
  top: 58px;
  overflow: hidden;
  &.change {
    transform: translateY(37px);
    height: calc(100vh - 96px);
    width: 100%;
    right: 0;
    background-color: white;
    border-radius: 0;
  }
  @media (min-width: 720px) {
    top: 0;
    height: 96px;
    right: 0;
    width: auto;
    border-radius: 0;
    background: transparent;
  }
`

const Bar3 = styled(Bar)`
  top: 45px;
  &.change {
    transform: translateY(0px) rotateZ(45deg);
  }
  @media (min-width: 720px) {
    display: none;
  }
`

const listStyle = css({
  listStyle: 'none',
  padding: '12px 0',
  transform: 'translateY(-20px)',
  transition: '.1s ease',
  opacity: '0',
  '@media(min-width: 720px)': {
    opacity: '1',
    float: 'left',
    margin: '46px 20px'
  },
  '.change &': {
    transform: 'translateY(0)',
    opacity: '1',
    '&:hover a': {
      background: 'black'
    }
  },
  '& a': {
    padding: '12px 0'
  }
})

const MenuBar = styled.div`
  z-index: 99999;
  width: 36px;
  height: 32px;
  cursor: pointer;
  background: #fff0;
  position: fixed;
  top: 32px;
  right: 32px;
  cursor: pointer;
  
  @media (min-width: 720px) {
    display: none;
  }
}`

const transitionDelays = [
  '.2s',
  '.3s',
  '.4s',
  '.45s',
  '.5s',
  '.54s',
  '.58s',
  '.62s',
  '.65s',
  '.68s'
]

export const WebsiteLayout = ({
  menuItems,
  logo,
  children,
  opened,
  setOpened
}) => {
  const menus = menuItems || [
    { label: 'Home', link: 'home' },
    { label: 'About', link: 'about' },
    { label: 'Contact', link: 'contact' },
    { label: 'Blog', link: 'blog' }
  ]

  return (
    <div
      className={opened ? 'change' : ''}
      style={{ maxWidth: '1440px', margin: 'auto' }}
    >
      <div style={{ position: 'relative' }}>
        <div
          style={{
            zIndex: '99999',
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            height: '156px',
            boxShadow: '#ebcf8a 16px 4px 32px',
            backgroundColor: '#F9F1DCaa'
          }}
        ></div>
        <div
          style={{
            zIndex: '99999',
            position: 'fixed',
            top: '0',
            maxWidth: '1440px',
            width: '100%',
            height: '96px',
            padding: '16px'
          }}
        >
          <a href=''>{logo || ''}</a>
          <Bar1 id='bar1'></Bar1>
          <Bar2 id='bar2'>
            <ul style={{ padding: '24px 22px', transition: '0.3s ease' }}>
              {menus.map((menu, i) => (
                <li
                  key={menu.label}
                  css={listStyle}
                  style={{ transitionDelay: transitionDelays[i] }}
                >
                  <a href={menu.link}>{menu.label}</a>
                </li>
              ))}
            </ul>
          </Bar2>
          <Bar3 id='bar3'></Bar3>
        </div>

        <MenuBar id='menu-bar' onClick={() => setOpened(!opened)}></MenuBar>
      </div>

      <div>{children}</div>
    </div>
  )
}

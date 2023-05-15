import React from 'react'
import styled from 'styled-components'

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

const Menu = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 600px) {
    display: none;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    flex-direction: column;
    padding: 10px;
  }
`

const MenuItem = styled.li`
  margin: 0 10px;

  @media screen and (max-width: 600px) {
    margin: 10px 0;
  }
`

const Hamburger = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
    position: fixed;
    top: 20px;
    right: 20px;
    cursor: pointer;
    z-index: 9999;
  }
`

const HamburgerIcon = styled.span`
  display: block;
  width: 30px;
  height: 4px;
  background-color: #333;
  margin: 6px 0;
  transition: all 0.2s ease-in-out;

  ${({ active }) =>
    active &&
    `
    &:nth-child(2) {
      opacity: 0;
      transform: translate(-20px, 0px);
    }

    &:nth-child(1) {
      transform: translate(0px, 10px) rotate(45deg);
    }

    &:nth-child(3) {
      transform: translate(0px, -10px) rotate(-45deg);
    }
  `}
`

const Dropdown = styled.div`
  display: none;

  ${({ active }) =>
    active &&
    `
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    padding: 10px;
  `}
`

const DropdownItem = styled.a`
  display: block;
  margin: 10px 0;
  text-decoration: none;
  color: #333;
`

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

  // const [isActive, setIsActive] = useState(false)

  const handleToggle = () => {
    // setOpened(!opened)
  }

  return (
    <div
      // className={opened ? 'change' : ''}
      style={{ maxWidth: '1440px', margin: 'auto' }}
    >
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        {/* <Hamburger onClick={handleToggle}>
          <HamburgerIcon active={opened} />
          <HamburgerIcon active={opened} />
          <HamburgerIcon active={opened} />
        </Hamburger>
        <Dropdown active={opened}>
          <DropdownItem href='#'>Home</DropdownItem>
          <DropdownItem href='#'>About</DropdownItem>
          <DropdownItem href='#'>Services</DropdownItem>
          <DropdownItem href='#'>Contact</DropdownItem>
        </Dropdown> */}
      </div>

      <div>{children}</div>
    </div>
  )
}

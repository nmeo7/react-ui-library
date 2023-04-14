import React from 'react'
import styled from 'styled-components'

export const MenuItems = styled.div`
  width: 240px;
  position: fixed;
  top: 196px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 236px);

  & > div {
    padding: 0;
  }

  & a {
    padding: 16px;
    border-radius: 32px;
    text-decoration: none;
    color: black;
  }

  & span {
    vertical-align: bottom;
    height: 22px;
    display: inline-block;
  }

  @media (max-width: 720px) {
    color: white;
    bottom: 0;
    left: 0;
    right: 64px;
    height: 96px;
    width: 100%;
    top: auto;
    border-radius: 32px 32px 0 0;
    background: #f9f1dc;
    flex-direction: row;
    margin: 0;
    text-align: center;

    & > div {
      flex: 1;
      padding: 0;
    }

    & a {
      padding: 16px;
      border-radius: 32px;
      text-decoration: none;
      color: black;
    }

    & span {
      vertical-align: bottom;
      height: 22px;
      display: inline-block;
    }
  }
`

export const leftMenuLabel = (icon, text, link) => ({
  label: (
    <div>
      <span style={{ display: 'inline-block', lineHeight: '24px' }}>
        {icon || <></>} {text}
      </span>
    </div>
  ),
  link
})

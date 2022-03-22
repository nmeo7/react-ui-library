import React from 'react'
import styles from './styles.module.css'

import { css } from 'glamor'

// make css rules
let rule = css({
  color: 'red',
  ':hover': {
    color: 'pink'
  },
  '@media(min-width: 300px)': {
    color: 'green',
    ':hover': {
      color: 'yellow'
    }
  }
})

let another = css ({
  
})

export const ExampleComponent2 = () => {
  return <div {...rule} {...another}> zomg </div>
}


export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export { AnimatedBackground } from './components/AnimatedBackground'
export { CardItem } from './components/CardItem'
export { PseudoCard } from './components/PseudoCard'
export { ListItem } from './components/ListItem'
export { ListHeader } from './components/ListHeader'
export { SpotifyLayout } from './components/SpotifyLayout'
export { WebsiteLayout } from './layouts/WebsiteLayout'
export { Login } from './components/Login'
export { DashboardLayout, showDialog, getLocation } from './layouts/DashboardLayout'
export { CisCalculator } from './components/CisCalculator'
export { RadioInput } from './components/RadioInput'
export { ListLayout } from './components/ListLayout'
export { Btn, DropdownButton, navigate } from './components/Btn'
export { Loading } from './components/Loading'
export { Input } from './components/Input'
export { RoutesWrapper, redirect, route, outlet, getParams, UpdateParams } from './layouts/RoutesWrapper'
export { FormSteps } from './components/FormSteps'
export { A } from './components/A'
export { KeyValue } from './components/KeyValuePair'
export { AppLayout } from './layouts/AppLayout'
export { Dialog } from './components/Dialog'


export { UserContext, Context } from './layouts/Context'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, Outlet, useParams  } from "react-router-dom"
import { DashboardLayout, WebsiteLayout } from '..'

let params = null

export function redirect(to) { return <Navigate replace to={to} /> }

export function route(props) {

  return <Route path={props.path} element={ props.element } > { props.children && props.children.map( route ) } </Route>
}

export const outlet = () => <Outlet/>

export function RoutesWrapper(props) {
  // params = useParams()

    return (
    <Router>
      <Routes>
        { props.children }
      </Routes>
    </Router>)
  }

export const UpdateParams = () => {
  params = useParams()
  return null
}

export const getParams = () => params
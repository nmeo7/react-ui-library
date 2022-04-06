import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useParams  } from "react-router-dom"

let params = null

export const redirect = (to) => <Navigate replace to={to} />
export const route = (props) => <Route path={props.path} element={ props.element } > { props.children && props.children.map( route ) } </Route>
export const outlet = () => <Outlet/>
export const RoutesWrapper = (props) => <Router><Routes>{ props.children }</Routes></Router>

export const UpdateParams = () => params = useParams()
export const getParams = () => params
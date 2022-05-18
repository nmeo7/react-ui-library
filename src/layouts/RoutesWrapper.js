import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useParams, useNavigate, useLocation  } from "react-router-dom"

let params = null
let history = null
let location = null

export const redirect = (to) => <Navigate replace to={to} />
export const route = (props) => <Route path={props.path} element={ props.element } > { props.children && props.children.map( route ) } </Route>
export const outlet = (c) => <Outlet context={c} />
export const RoutesWrapper = (props) => <Router><Routes>{ props.routes }</Routes></Router>

export const UpdateParams = () => { params = useParams(); return <div></div> }
export const getParams = () => params
export const navigate = (link) => history && history (link)
export const getLocation = () => location

export const RouterPage = (props) => {
    params = useParams()
    history = useNavigate()
    location = useLocation()

    return <div> { props.children } </div>
}
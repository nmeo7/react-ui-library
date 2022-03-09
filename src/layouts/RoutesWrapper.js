import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { DashboardLayout, WebsiteLayout } from '..'

export function redirect(to) { return <Navigate replace to={to} /> }

export function RoutesWrapper(props) {
    return (
    <Router>
      <Routes>
        { props.routes.map( (route) => <Route path={route.path} element={ route.element } /> ) }
      </Routes>
    </Router>)
  }
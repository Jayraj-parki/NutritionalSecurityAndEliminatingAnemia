import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './components/Home'
import NutritionalFood from "./components/NutritionalFood"
import AnaemiaTypes from "./components/AnaemiaTypes"
import Hospitals from "./components/Hospitals"
import { Route,Switch } from 'react-router'
export default function App() {
    return (
        <>
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route> 
            <Route path="/nutrients" exact>
              <NutritionalFood/>
            </Route> 
            <Route path="/anaemia-type" exact >
              <AnaemiaTypes/>
            </Route> 
            <Route path="/appointement" exact >
              <Hospitals/>
            </Route>  

          </Switch>  
        </>
    )
}

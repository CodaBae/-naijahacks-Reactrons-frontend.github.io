import React from 'react'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import App from './App'
import DashBoard from './components/DashBoard'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Seeds from './components/Seeds'
import CallFarmer from './components/CallFarmer'
import CallStockMan from './components/CallStockMan'
import LifeStock from './components/LifeStock'
import Poultry from './components/Poultry'
import Sell from './components/Sell'
import Seafood from './components/Seafood'
import FarmingT from './components/FarmingT'




const AppRouter = () => (
  <BrowserRouter>
    <div className='AppRouter-body'>
      <Switch>
        <Route path='/' component={App} exact />
        <Route path='/home' component={App} exact />
        <Route path='/DashBoard' component={DashBoard}  />
        <Route path='/Login' component={Login}  />
        <Route path='/SignUp' component={SignUp}  />
        <Route path='/Seeds' component={Seeds}  />
        <Route path='/CallFarmer' component={CallFarmer}  />
        <Route path='/CallStockMan' component={CallStockMan}  />
        <Route path='/LifeStock' component={LifeStock}  />
        <Route path='/Poultry' component={Poultry}  />
        <Route path='/Sell' component={Sell}  />
        <Route path='/Seafood' component={Seafood}  />
        <Route path='/FarmingTool' component={FarmingT}  />


      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter

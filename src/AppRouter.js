import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import DashBoard from './components/DashBoard'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Seeds from './components/Seeds'
import LifeStock from './components/LifeStock'
import Poultry from './components/Poultry'
import Seafood from './components/Seafood'
import FarmingT from './components/FarmingT'
import CallFarmer from './components/CallFarmer'
import CallStockman from './components/CallStockman'
import Sell from './components/Sell'







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
        <Route path='/LifeStock' component={LifeStock}  />
        <Route path='/Poultry' component={Poultry}  />
        <Route path='/Seafood' component={Seafood}  />
        <Route path='/FarmingTool' component={FarmingT}  />
        <Route path='/CallFarmer' component={CallFarmer}  />
        <Route path='/CallStockman' component={CallStockman}  />
        <Route path='/Sell' component={Sell}  />


      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter

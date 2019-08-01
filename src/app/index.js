import React from 'react'
import HomePage from './screens/Home'
import { BrowserRouter, Router, Route, Link } from "react-router-dom"
import AboutPage from './screens/aboutPage'

class App extends React.Component{
    render(){
         return <BrowserRouter>

        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>

         <Route path='/' exact={true} component={HomePage}/>
         <Route path='/about' exact={true} component={AboutPage}/>
         </BrowserRouter>
    }
}

export default App

// <HomePage/>
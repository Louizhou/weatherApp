import React from 'react'
import HomePage from './screens/Home'
import { BrowserRouter, Router, Route, Link } from "react-router-dom"
import AboutPage from './screens/aboutPage'
import Gallery from './screens/GalleryPage';
import Form from './screens/FormScreen'

class App extends React.Component{
    render(){
         return <BrowserRouter>

        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/gallery'>Gallery</Link>
        <Link to='/form'>Form</Link>

         <Route path='/' exact={true} component={HomePage}/>
         <Route path='/about' exact={true} component={AboutPage}/>
         <Route path='/gallery' exact={true} component={Gallery}/>
         <Route path='/form' exact={true} component={Form}/>
         </BrowserRouter>
         
    }
}

export default App

// <HomePage/>
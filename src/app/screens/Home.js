import React from 'react'
import axios from 'axios'
import {Card, Container} from 'semantic-ui-react'



class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            response:{}
        }
    }

    componentDidMount(){
        this.getWeatherData('las vegas','metric')
    }


    getWeatherData(city,unit){
        const thisComponent = this
        axios.get('https://api.openweathermap.org/data/2.5/weather?q='+ city+'&APPID=8e38991bb99daa962e2afa7b44425419&units='+ unit)
        .then(function(res){
            console.log(res.data)
            thisComponent.setState({
                response:res.data
            })
        })
    }


    render(){
        var responseData = this.state.response
        var city = responseData.name
        var mainWeatherData = responseData.main ||{}
        var tmp = mainWeatherData.temp
        var mainSysData = responseData.sys ||{}
        var nation = mainSysData.country

        console.log(this.state)

        const Review = function(props){
            console.log(props)
        
            if (tmp>=30) {
                return<div>it`s kinda hot here.</div>
            } else if(20>=tmp){
                return <div>it`s a little bit cold.</div>
            } 
            else {
                return <div>what a cool day today.</div>
            }
        }


        // const Rain = function(props){
        //     console.log(props)
        
        //     if (tmp>=30) {
        //         return<div>it`s kinda hot here.</div>
        //     } else if(20>=tmp){
        //         return <div>it`s a little bit cold.</div>
        //     } 
        //     else {
        //         return <div>what a cool day today.</div>
        //     }
        // }

         return (
             <Container>
            <Card>
                <Card.Content>
                <Card.Header><div>Welcome to {nation}!!</div> We are now in city of {city}!!</Card.Header>         
                <Card.Description>The current temperature is {tmp}℃,<Review /><div>Grab your phones and go take pics!</div> </Card.Description>
                </Card.Content>
            </Card> 
            </Container>
        )
    }
}

export default HomePage
import React from 'react'
import axios from 'axios'
import {Card, Container} from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'


class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            response:{},
            city:''
        }
        this.handleCity = this.handleCity.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)


    }

    // componentDidMount(){
    //     this.getWeatherData(this.state.inputCity,'metric')
    // }


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


    // axios({
    //     method: 'get',
    //     url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/The Lich King',
    //     responseType: 'stream',
    //     header:{'x-rapidapi-host':'omgvamp-hearthstone-v1.p.rapidapi.com',
    //             'x-rapidapi-key':'85c90202b6msh680ee6ed91021c0p1388f4jsnbb5fc362acfc'}
    //   })


    render(){
        var responseData = this.state.response
        var city = responseData.name
        var mainWeatherData = responseData.main ||{}
        var tmp = mainWeatherData.temp
        var mainSysData = responseData.sys ||{}
        var nation = mainSysData.country
        var state = this.state
        var inputCity = this.state.city

        console.log(this.state)

        const Review = function(props){
            console.log(props)
        
            if (tmp>=30) {
                return<div>it`s kinda hot here.</div>
            } else if(18>=tmp){
                return <div>it`s a little bit cold.</div>
            } 
            else {
                return <div>what a cool day today.</div>
            }
        }

         return (
             <Container>

      <Menu>
        <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
        >
          Editorials
        </Menu.Item>

        <Menu.Item name='reviews' active={activeItem === 'reviews'} onClick={this.handleItemClick}>
          Reviews
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
          Upcoming Events
        </Menu.Item>
      </Menu>



             <Input action={{ icon: 'search' }} placeholder='Search...' />

              <form onSubmit={this.handleSubmit}>
              <div>
               <label>City</label>
                 <input id = 'city' value={inputCity}  onChange={this.handleCity}/>
                </div>
                <button>Submit</button>
            </form>

            <Card>
                <Card.Content>
                <Card.Header><div>Welcome to {nation}!!</div> We are now in city of {city}!!</Card.Header>         
                <Card.Description>The current temperature is {tmp}℃,<Review /><div>Grab your phones and go take pics!</div> </Card.Description>
                </Card.Content>
            </Card> 
            </Container>
        )
    }

    handleCity(ev) {
        console.log(ev.target.value)
        this.setState({
            city:ev.target.value
        })
    }

    handleSubmit(ev){
    ev.preventDefaul();
    console.log(this.state.city)
    this.getWeatherData(this.state.city,'metric')

    }

}

export default HomePage
import React from 'react'
import { importDefaultSpecifier } from '@babel/types';

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }

        this.handleI1 = this.handleI1.bind(this)
        this.handleI2 = this.handleI2.bind(this)

        this.handleSubmit = this.handleSubmit.bind(this)

    }



    render(){
        var state = this.state
        var i1 = state.i1
        var i2 = state.i2
        var i3 = state.i3
        var i4 = state.i4

        return <div>

            <form onSubmit={this.handleSubmit}>
       
        
             <div>
            <label>Imput1</label>
            <input id="i1" value={i1} onChange={this.handleI1}/>
            </div>


            <div>
             <label>Imput1</label>
             <input id = 'i2' value={i2} onChange={this.handleI2}/>
            </div>


            <div>
             <label>Name</label>
             <input id = 'i3' value={i3} />
            </div>


            <div>
             <label>City</label>
             <input id = 'i4' value={i4}/>
            </div>

            <button>Submit</button>

            </form>
        </div>
            
    }


    handleI1(ev) {
        console.log(ev.target.value)
        this.setState({
            i1:ev.target.value
        })
    }

    handleI2(ev) {
        console.log(ev.target.value)
        this.setState({
            i2:ev.target.value
        })
    }


    handleSubmit(ev){
    ev.preventDefaul();
    console.log(ev)

    }

}




export default Form

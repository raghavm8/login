import React from 'react'
import FormDisplay from './FormDisplay'

class Form extends React.Component{
    constructor(){
        super()
        this.state = {
          firstName: "",
          lastName: "",
          email: "",
          password: ""
        }
        this.handleChange = this.handleChange.bind(this)
      }
      handleChange(event){
        const {name, value, checked, type} = event.target
        type === "checkbox" ? this.setState ({ [name]: checked }) : this.setState( { [name]: value })
      }
      render(){
          return(

              <FormDisplay handleChange={this.handleChange} data={this.state} />
          )
      }
}

export default Form

//data={this.state} or ...{this.state} by this we do not need to use props.data.something directly we can access props.something
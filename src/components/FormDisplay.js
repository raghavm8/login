import React from 'react'


function FormDisplay(props){
      return(
          <div className="body"> 
          
        <div className="detail">
            <h1>Create your account</h1><br />
            <form>  
                <label>First Name: </label>
                <input type="text" name="firstName" onChange={props.handleChange} />
                <br /><br />
                <label>Last Name: </label>
                <input type="text" name="lastName" onChange={props.handleChange} />
                <br /><br />
                <label>Email ID: </label>
                <input type="text" name="email" onChange={props.handleChange} />
                <br /><br />
                <label>Password: </label>
                <input type="password" name="pass" onChange={props.handleChange} />
                <br /><br />
                <button>Submit</button>
            </form> 
        </div>
       </div>
      )
}

export default FormDisplay
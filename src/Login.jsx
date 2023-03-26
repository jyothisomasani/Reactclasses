import React,{useState} from "react"
export const Login= () => {
    const [email,setemail ]=useState('')
    const [FirstName,setFirstName]=useState('')
    const[LastName,setLastName]=useState('')
    return(
        <div>
        <h1>Login Page</h1>
        <form>
            <label for="FirstName">First Name : </label>
            <input  value ={FirstName}type="text" id="FirstName" placeholder="Enter First name"></input>
            <br></br>
            <br></br>
            <label for="Last Name">Last Name : </label>
            <input  value={LastName}type="text" id=":Last Name" placeholder="Enter Last Name"></input>
            <br></br>
            <br></br>
            <label for="Email">Email : </label>
            <input  value ={email}type="email" id="Email" placeholder="Enter Email id"></input>
            <br></br>
            <br></br>
            <input type="submit" value="Submit"/>

        </form>
        </div>
    )
}
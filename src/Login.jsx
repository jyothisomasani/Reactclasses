import React,{useState} from "react"
export const Login= () => {
    const [email,setemail ]=useState('')
    const [FirstName,setFirstName]=useState('')
    const[LastName,setLastName]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email); }
    return(
        <div>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}
        >
            <label for="FirstName">First Name : </label>
            <input  value ={FirstName} onChange ={(e)=>setFirstName(e.target.value)}type="text" id="FirstName" placeholder="Enter First name"></input>
            <br></br>
            <br></br>
            <label for="Last Name">Last Name : </label>
            <input  value={LastName} onChange ={(e)=>setLastName(e.target.value)}type="text" id=":Last Name" placeholder="Enter Last Name"></input>
            <br></br>
            <br></br>
            <label for="Email">Email : </label>
            <input  value ={email} onChange ={(e)=>setemail(e.target.value)}type="email" id="Email" placeholder="Enter Email id"></input>
            <br></br>
            <br></br>
            <button type="submit"> Login</button>

        </form>
        <br></br>
        <button>Don't have an account ? Register Here</button>
        </div>
    )
}
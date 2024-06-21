import "./index.css"
import { useState } from "react";
import { login } from "./utils";

const Login = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(event)=>{
        event.preventDefault();
        const results = await login({username, password});
        console.log({results});
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>login</h2>
            <input placeholder="Enter username" type="text" onChange={(event)=>setUsername(event.target.value)}/>
            <br/>
            <input placeholder="Enter password" type="password" onChange={(event)=>setPassword(event.target.value)}/>
            <br/>
            <button type="submit">Login</button>

        </form>
    )
}

export default Login;
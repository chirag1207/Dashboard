import React, {useState} from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'
import './Login.css'


const Login = () => {

    const [action, setAction] = useState("Login");


    return(
        <div className = "container">
            <div className = "header">
                <div className = "text">{action}</div>
                <div className = "underline"></div>
            </div>

            <div className ="inputs">
            <div className ="input">
                  <FaUser className="icon" />
                <input type ="text" placeholder ="Name"></input>

            </div>
              <div className ="input">
                 <FaEnvelope className="icon" />
                <input type ="email" placeholder ="Email ID"></input>

            </div>
              <div className ="input">
              <FaLock className="icon" />
                <input type ="password" placeholder ="Password"></input>
            </div>
            </div>
            <div className="submit-container">
                <div className ={action === "Login"?"submit gray":"submit"} onClick ={() => {setAction("Sign Up")}} >Sign Up</div>
                <div className = {action === "Sign Up"?"submit gray":"submit"} onClick ={() => {setAction("Login")}}>Login</div>
            </div>
        </div>
    )

}

export default Login;

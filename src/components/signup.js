import React from 'react'
import "./style.css";
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from 'react-router-dom';


//export default function Signup() {
  //const emailRef = useRef()
  //const passwordRef = useRef()
  //const passwordConfirmRef = useRef()
  //const { signup } = useAuth()
  //const [error, setError] = useState("")
  //const [loading, setLoading] = useState(false)
  //const history = useHistory()

  //async function handleSubmit(e) {
    //e.preventDefault()

    //if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      //return setError("Passwords do not match")
    //}

    //try {
      //setError("")
      //setLoading(true)
      //await signup(emailRef.current.value, passwordRef.current.value)
      //history.push("/")
    //} catch {
      //setError("Failed to create an account")
    //}

    //setLoading(false)
  //}



function signup() {
  return (
    


    <form class="main">
      <div>
      <h2 class="names" id="signUp">Sign up</h2>
        <div>
          <div class="names" id="head">Name</div>
          <input type="text" name="name" class="type"></input>
        </div>
        <div>
          <div class="names" id="head">Email address</div>
          <input type="email" name="email" class="type" required></input>
        </div>
        <div>
          <div class="names" id="head">Password</div>
          <input type="password" name="password" class="type" required></input>
        </div>
        <div>
          <div class = "names" id="head">Confirm Password</div>
          <input type="password" name="password" class="type" required></input>
        </div>
        <button type="button" class = "button">Sign Up</button>
      </div>
    </form>
  )
    
}
  
//}

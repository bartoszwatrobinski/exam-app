import React, { useRef, useState } from 'react'
import { useAuth } from "../contexts/AuthContext"
import "./style.css";
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom"





  export default function Signup() {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const roleRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
      e.preventDefault()

      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError('Passwords do not match')
      }
      try{
        setError('')
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value, emailRef.current.value, roleRef.current.value)
        history.push("/")
      } catch {
        setError('Failed to create an account')
      }
      setLoading(false)

    }

    return (
    
    <Card>
      <Card.Body>
        <h2 className = "text-center mb-4" class="names" id="signUp">Sign up</h2>
        
        {error && <Alert class="alert" variant="danger"><div class = "error">{error}</div></Alert>}
        <Form class="main" onSubmit={handleSubmit}>
          <div>

            <div class="names" id="login">Do you have an account? <Link to="/signin" class="signUp">Sign in</Link> here</div>
            <div>
              <div class="names" id="head">Name</div>
              <input type="text" name="name" class="type" ref={nameRef} required></input>
            </div>
            <div>
              <div class="names" id="head">Email address</div>
              <input type="email" name="email" class="type" ref={emailRef} required></input>
            </div>
            <div>
              <div class="names" id="head">Password</div>
              <input type="password" name="password" class="type" ref={passwordRef} required></input>
            </div>
            <div>
              <div class = "names" id="head">Confirm Password</div>
              <input type="password" name="password" class="type" ref={passwordConfirmRef} required></input>
            </div>
            <div>
              <div class="names" id="head">Role</div>
              <select class = "names" id="head" ref={roleRef} required>
                <option value="examinee">Examinee</option>
                <option value="examiner">Examiner</option>
                <option value="administrator">Administrator</option>

              </select>
            </div>
            <button id="button" className="w-100" type="submit" class = "button" disabled={loading}>Sign Up</button>
          </div>
        </Form>
      </Card.Body>
    </Card>
      )
    }


//}

import React, { useRef, useState } from "react";
import "./style2.css";
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"



export default function Signin() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { signin } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()


    try{
      setError('')
      setLoading(true)
      await signin(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError('Failed to sign in')
    }
    setLoading(false)

  }
  return (
    
    <Card class="name">
      <Card.Body>
        <h2 className = "text-center mb-4" class="names" id="signUp">Sign in</h2>
        
        {error && <Alert class="alert" variant="danger"><div class = "error">{error}</div></Alert>}
        <Form class="main" onSubmit={handleSubmit}>
          <div>

            <div class="names" id="login">Not a member yet? <Link to="/signup" class="signUp">Sign up</Link> here</div>
            <div>
              <div class="names" id="head">Email address</div>
              <input type="email" name="email" class="type" ref={emailRef} required></input>
            </div>
            <div>
              <div class="names" id="head">Password</div>
              <input type="password" name="password" class="type" ref={passwordRef} required></input>
            </div>
            <button class="button" type="submit" disabled={loading}>Sign In</button>
          </div>
        </Form>
      </Card.Body>
    </Card>
      )
}
import React from "react";
import "./style.css";




function App() {
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


export default App

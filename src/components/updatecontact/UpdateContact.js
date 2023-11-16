import React from 'react'
import "./UpdateContact.css"

const UpdateContact = () => {
  return (
    <div>
            <div className='bodyUpdateContact'>

      <div className='bodyAddContact'>
      <>
  <div className="container1">
    <div className="logo">
      <a href="try1.html" className="code">
        <img
          src="https://cdn4.iconfinder.com/data/icons/programming-developer/512/programing-developer-programming-css-css3-logo-website-512.png"
          alt=""
        />
        Code
      </a>
    </div>
    <div className="formulair">
      <form>
        <label htmlFor="email" className="for">
          Email :{" "}
        </label>
        <br />
        <input type="email" placeholder="email" id="email" className="case" />
        <br />
        <label htmlFor="Password" className="for">
          Password :{" "}
        </label>
        <br />
        <input
          type="password"
          placeholder="Password"
          id="Password"
          className="case"
        />
        <br />
        <input type="submit" defaultValue="Enter" className="signIn" />
      </form>
      <div className="PassForgetn">
        <a href="#" className="pass">
          Sign-Up
        </a>
      </div>
      <div className="or">
        <hr width="40%" />
        Or
        <hr width="40%" />
      </div>
      <div className="PassForgetn">
        <a href="#" className="pass">
          Did you forget your password ?
        </a>
      </div>
    </div>
  </div>
  <div className="container2">
    <div className="small">
      {"{"} Do You Want To Be a Programmer {"}"}
      <div>
        <button className="button">Let's Begin</button>
      </div>
    </div>
  </div>
</>
</div>
</div>
    </div>
  )
}

export default UpdateContact

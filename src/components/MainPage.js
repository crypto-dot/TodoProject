import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
function MainPage() {
  return (
    <div id="mainPage">
      <nav><h1>Todo</h1> <ul> <Link to="/login"> <li>Log in</li> </Link> <li>Sign Up</li> </ul></nav>
      <h2>Conquer Your Workflow</h2>
    </div>
  )
}

export default MainPage

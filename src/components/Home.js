import React from "react"
import {useLocation, Link} from 'react-router-dom';

function Home (){
    const location=useLocation()

    return (
        <div className="homepage">

<div className="container">
    <header className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/rooms">rooms</Link>
      <Link to="/hotels">hotels</Link>
    </header>
</div>

        </div>
    )
}

export default Home
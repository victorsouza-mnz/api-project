import React from 'react'
import './Navegation.css'

const Navegation = ({ onRouteChange, isSignedIn }) => {

    if (isSignedIn) {
        return (
            <nav>
                <p onClick={() => onRouteChange("signout")} className='nav f3 link dim black underline pa3 pointer' >Sign Out</p>
            </nav>

        )
    } else {
        return(
            <nav>
                <p onClick={() => onRouteChange("signin")} className='nav f3 link dim black underline pa3 pointer' >Sign In</p>
                <p onClick={() => onRouteChange("register")} className='nav f3 link dim black underline pa3 pointer' >Register</p>
            </nav>
        )
    }

}

export default Navegation

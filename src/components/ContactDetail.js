import React from 'react';
// import { Link } from 'react-router-dom';
import user from '../images/user-image.png'
import { useLocation } from 'react-router-dom'


export default function ContactDetail(props) {
    // const location = useLocation()
    // const contact  = props.location.state
 
    console.log(props);
  return (
    <div className="main">
        <div className="ui card centered">
            <div className="image">
                <img src={user} alt="user" />
            </div>
            <div className="content">
                <div className="header">Dipesh</div>
                <div className="description">cs.@gmail</div>
            </div>
        </div>
    </div>
   
  )
}

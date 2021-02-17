import React, { Component } from 'react';
import '../StyleSheets/style.css'
import { Link } from 'react-router-dom';

export default function MenuComponent (props) {
    return(
        <div className="menu">          
        <span>
            <a href="" style={{fontWeight:"bold"}}>mStock App</a>
            {props.login?
            <span>
                <Link to="/CompaniesList">Companies</Link>
                <Link to="/watchListComponent">Watch List</Link>
                <Link to="/PerformanceComponent">ComparePerformance</Link>
                <Link to="/login">Logout</Link>
            </span>
            :<span>
                <Link to="/login">Login</Link>
                <Link to="/CompaniesList">Companies</Link>
            </span>
            }
        </span>
        </div>
    )    
}

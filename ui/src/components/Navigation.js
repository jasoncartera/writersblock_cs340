import * as React from "react";
import { NavLink } from "react-router-dom";


/* 
Citation for the following function:
Date: 2/14/2022
Adapted from: <NavLink>
Source URL: https://reactrouter.com/docs/en/v6/api#navlink
*/
function Navigation(){

    let activeClassName = "active-nav-item";

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="." className={({ isActive }) => isActive ? activeClassName : undefined } end>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="Writers" className={({ isActive }) => isActive ? activeClassName : undefined }>
                        Manage Writers
                    </NavLink>
                </li>
                <li>
                    <NavLink to="Readers" className={({ isActive }) => isActive ? activeClassName : undefined }>
                        Manage Readers
                    </NavLink>
                </li>
                <li>
                    <NavLink to="WritersReaders" className={({ isActive }) => isActive ? activeClassName : undefined }>
                        Manage WritersReaders
                    </NavLink>
                </li>
                <li>
                    <NavLink to="Posts" className={({ isActive }) => isActive ? activeClassName : undefined }>
                        Manage Posts
                    </NavLink>
                </li>
                <li>
                    <NavLink to="Comments" className={({ isActive }) => isActive ? activeClassName : undefined }>
                        Manage Comments
                    </NavLink>
                </li>
            </ul>
        </nav>
    );

};

export default Navigation;

/*
    import logo from "../logo.png"
    <img alt="Writer's Block logo" src={logo} className="logo"/>
*/
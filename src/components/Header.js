import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const Navbar = styled.nav`
display:flex;
justify-content:space-around;
align-items:center;
font-family: sans-serif;

h1 {
    font-size:2rem;
    padding:10px;
}

ul {
    display:flex;
    justify-content:space-evenly;
    width:20%;
}

li {
    list-style-type:none;
    color: purple;
    font-size: 1rem;
}

a {
    text-decoration:none;
}

.Navlink {
    color: purple;
    border-bottom: 2px solid purple;
}
`;


const Header = (props) => {
    return (
        <Navbar>
        <h1>Fruit Emporium</h1>
        <ul>
            <NavLink exact to='/Homepage' activeClassName="Navlink">
                <li>Home</li>
            </NavLink>
            <NavLink exact to='/About' activeClassName="Navlink">
                <li>About</li>
            </NavLink>
        </ul>
        </Navbar>
    )
}


export default Header;
import React from "react";
import { Link } from "react-router-dom";
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


`;


const Header = (props) => {
    return (
        <Navbar>
        <h1>Fruit Emporium</h1>
        <ul>
            <Link to='/Homepage'>
                <li>Home</li>
            </Link>
            <Link to='/about'>
                <li>About</li>
            </Link>
        </ul>
        </Navbar>
    )
}


export default Header;
import React from "react";
import Content from "../components/Content";
import TopicBox from "../components/TopicBox";
import { Link } from "react-router-dom";
import NavBar from "../components/Navigation/NavBar";


export default function Home()
{
    return(
        <div>
            <NavBar/>
            <Content/>
            <Link to="/About">About &nbsp;</Link>
            <Link to="/Categories">Catergories &nbsp; </Link>
            <Link to="/Loginpage">LoginPage &nbsp; </Link>
            <Link to="/SignUp">SignUp &nbsp; </Link>

            
        </div>

    )
}
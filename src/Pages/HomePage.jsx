import React from 'react'
import styled from 'styled-components'
import { Middle } from '../Components/middle/Middle'
import { Navbar } from '../Components/Navbar/Navbar'
import { SideBar } from '../Components/SideBar/SideBar'

export const HomePage = () => {
    return (
        <Home>
            <Navbar/>
            <div className="wrapper">
                <SideBar/>
                <Middle/>
            </div>
        </Home>
    )
}


const Home = styled.div`
 width: 100%;
 background-color: var(--sideCard-color);
 .wrapper{
     width: 92%;
     margin: auto;
     margin-top: 15px;
     display: flex;
 }
`
import React, { useState } from 'react'
import styled from 'styled-components'
import { Middle } from '../Components/middle/Middle'
import { Navbar } from '../Components/Navbar/Navbar'
import { RightBar } from '../Components/RightBar/RightBar'
import { SideBar } from '../Components/SideBar/SideBar'

export const HomePage = () => {
    const [toggle,setToggle] = useState(false)
    console.log(toggle);
    return (
        <Home>
            <Navbar setToggle={setToggle} toggle={toggle}/>
            <div className="wrapper">
                <SideBar  setToggle={setToggle}  toggle={toggle}/>
                <Middle/>
                <RightBar/>
            </div>
        </Home>
    )
}


const Home = styled.div`
 max-width: 100%;
 background-color: var(--sideCard-color);
 .wrapper{
     @media screen and (max-width: 1040px) {
       width  :90%;
      }
     width: 92%;
     max-width: 1200px;
     margin: auto;
     margin-top: 15px;
     display: flex;
    
 }
`
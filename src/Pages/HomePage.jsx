import React, { useState } from "react";
import styled from "styled-components";
import { Middle } from "../Components/middle/Middle";
import { Navbar } from "../Components/Navbar/Navbar";
import { RightBar } from "../Components/RightBar/RightBar";
import { SideBar } from "../Components/SideBar/SideBar";

export const HomePage = () => {
  const [toggle, setToggle] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <Home>
      <Navbar
        login={login}
        setLogin={setLogin}
        setToggle={setToggle}
        toggle={toggle}
      />
      <div className="wrapper">
        <SideBar
          login={login}
          setLogin={setLogin}
          setToggle={setToggle}
          toggle={toggle}
        />
        <Middle />
        <RightBar />
      </div>
    </Home>
  );
};

const Home = styled.div`
  width: 100%;
  background-color: var(--sideCard-color);
  .wrapper {
    @media screen and (max-width: 1040px) {
      width: 90%;
    }
    width: 92%;
    max-width: 1250px;
    margin: auto;
    margin-top: 15px;
    display: flex;
  }
`;

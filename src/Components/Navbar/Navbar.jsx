import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { NavbarStyled } from "./NavbarStyled";

export const Navbar = () => {
  const [login, setLogin] = useState(false);
    const [clicked,setClicked] = useState(false)
  return (
    <NavbarStyled>
      <div className="ham">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="left-container">
        <div className="dev">
            <img src="images/devto.svg" alt="" />
        </div>
        <div className={`search ${clicked && "clicked"}`}>
          <input  onClick={()=>setClicked(true)} type="text" placeholder="Search..." />
         <div onClick={()=>setClicked(false)}>
            <FiSearch  />
         </div>
        </div>
      </div>
      <div className="right-container">
        {!login && <div className="login">
          <div className="login-btn"  onClick={()=>setLogin(true)}>Log in</div>
          <div className="createAccount-btn">Create account</div>
        </div>}
        {login && <div className="login">
          <div className="search1 connect">
          <FiSearch  />
          </div>
          <div className="createAccount-btn"  onClick={()=>setLogin(false)}>Create Post</div>
          <div className="connect">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              aria-labelledby="ajs1aeda7ekzuy6349fdorv7amp95o4p"
              class="crayons-icon"
            >
              <title id="ajs1aeda7ekzuy6349fdorv7amp95o4p">Connect</title>
              <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2l2.929-2.929A9.969 9.969 0 012 12zm4.828 8H12a8 8 0 10-8-8c0 2.152.851 4.165 2.343 5.657l1.414 1.414-.929.929zM8 13h8a4 4 0 11-8 0z"></path>
            </svg>
          </div>
          <div className="connect">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              aria-labelledby="a8bd2wi77fusod2nxejp07vqha0qcfz2"
              class="crayons-icon"
            >
              <title id="a8bd2wi77fusod2nxejp07vqha0qcfz2">Notifications</title>
              <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
            </svg>
          </div>
          <div className="avatar">
            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--ZqivOAMe--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/714298/41bee50c-a4b8-4db1-8e52-5698c8bf5cbe.jpeg"
              alt=""
            />
          </div>
        </div>}
      </div>
    </NavbarStyled>
  );
};



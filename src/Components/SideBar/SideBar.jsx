import React from "react";
import { Link } from "react-router-dom";
import { SideBarItems } from "./SideBarItems";
import { SideBarStyle } from "./SideBarStyle";

export const SideBar = () => {
  return (
    <SideBarStyle>
      {" "}
      <div className="devCounts">
        <p>
          {" "}
          <span>DEV Community </span>
          is a community of 702,115 amazing developers
        </p>
        <p>
          We're a place where coders share, stay up-to-date and grow their
          careers.
        </p>
        <div className="createAccount-btn">Create new account</div>
        <div className="login-btn">Log in</div>
      </div>
      <SideBarItems />
      <div className="social">
        <Link
          to="https://twitter.com/thepracticaldev"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            role="img"
            aria-labelledby="a437g6h8101fqem3t0n7bkchlgtxwagr"
          >
            <title>Twitter</title>
            <path d="M22.162 5.656a8.383 8.383 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.211 4.211 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.395 8.395 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.495 8.495 0 002.087-2.165l-.001-.001z"></path>
          </svg>
        </Link>
        <Link
          to="https://facebook.com/thepracticaldev"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            role="img"
            aria-labelledby="agoytkdns8tzyxrtu7vc74ovt4y9o2dc"
          >
            <title>Facebook</title>
            <path d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.188 19.188 0 00-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1h-4.598z"></path>
          </svg>
        </Link>
        <Link
          to="https://github.com/thepracticaldev"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            role="img"
            aria-labelledby="acfqadzndqs5hp3r5kys9ufeuhzjy9zd"
          >
            <title>Github</title>
            <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"></path>
          </svg>
        </Link>
        <Link
          to="https://instagram.com/thepracticaldev"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            role="img"
            aria-labelledby="aj586ptl6hdz6vj2c4p2u11okcyn3lln"
          >
            <title>Instagram</title>
            <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"></path>
          </svg>
        </Link>
        <Link
          to="https://twitch.com/thepracticaldev"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            role="img"
            aria-labelledby="abg5d7fa1diwstb0qlj4w5ou6pz8br97"
          >
            <title>Twitch</title>
            <path d="M4.3 3H21v11.7l-4.7 4.7h-3.9l-2.5 2.4H7v-2.4H3V6.2L4.3 3zM5 17.4h4v2.4h.095l2.5-2.4h3.877L19 13.872V5H5v12.4zM15 8h2v4.7h-2V8zm0 0h2v4.7h-2V8zm-5 0h2v4.7h-2V8z"></path>
          </svg>
        </Link>
      </div>
      <nav className="popular">
        <h3 className="popularTag">Popular Tags</h3>
        <div className="tags">
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/javascript"
            >
              #javascript
            </Link>
            <Link
              className="follow "
              to="/#"
              hed
            >
              Follow
            </Link>
          </div>
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/webdev"
            >
              #webdev
            </Link>
            <Link
              className="follow "
              to="/#"
            >
              Follow
            </Link>
          </div>
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/beginners"
            >
              #beginners
            </Link>
            <Link
              className="follow "
              to="/#"
              hed
            >
              Follow
            </Link>
          </div>
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/react"
            >
              #react
            </Link>
            <Link
              className="follow "
              to="/#"
            >
              Follow
            </Link>
          </div>
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/programming"
            >
              #programming
            </Link>
            <Link
              className="follow "
              to="/#"
            >
              Follow
            </Link>
          </div>
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/tutorial"
            >
              #tutorial
            </Link>
            <Link
              className="follow "
              to="/#"
            >
              Follow
            </Link>
          </div>
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/python"
            >
              #python
            </Link>
            <Link
              className="follow "
              to="/#"
            >
              Follow
            </Link>
          </div>
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/css"
            >
              #css
            </Link>
            <Link
              className="follow "
              to="/#"
            >
              Follow
            </Link>
          </div>
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/devops"
            >
              #devops
            </Link>
            <Link
              className="follow "
              to="/#"
            >
              Follow
            </Link>
          </div>
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/codenewbie"
            >
              #codenewbie
            </Link>
            <Link
              className="follow "
              to="/#"
            >
              Follow
            </Link>
          </div>
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/html"
            >
              #html
            </Link>
            <Link
              className="follow "
              to="/#"
            >
              Follow
            </Link>
          </div>
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/productivity"
            >
              #productivity
            </Link>
            <Link
              className="follow "
              to="/#"
            >
              Follow
            </Link>
          </div>
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/node"
            >
              #node
            </Link>
            <Link
              className="follow "
              to="/#"
            >
              Follow
            </Link>
          </div>
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/android"
            >
              #android
            </Link>
            <Link
              className="follow "
              to="/#"
            >
              Follow
            </Link>
          </div>
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/career"
            >
              #career
            </Link>
            <Link
              className="follow "
              to="/#"
            >
              Follow
            </Link>
          </div>
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/opensource"
            >
              #opensource
            </Link>
            <Link
              className="follow "
              to="/#"
            >
              Follow
            </Link>
          </div>
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/typescript"
            >
              #typescript
            </Link>
            <Link
              className="follow "
              to="/#"
            >
              Follow
            </Link>
          </div>
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/discuss"
            >
              #discuss
            </Link>
            <Link
              className="follow "
              to="/#"
            >
              Follow
            </Link>
          </div>
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/github"
            >
              #github
            </Link>
            <Link
              className="follow "
              to="/#"
            >
              Follow
            </Link>
          </div>
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/showdev"
            >
              #showdev
            </Link>
            <Link
              className="follow "
              to="/#"
            >
              Follow
            </Link>
          </div>
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/aws"
            >
              #aws
            </Link>
            <Link
              className="follow "
              to="/#"
            >
              Follow
            </Link>
          </div>
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/java"
            >
              #java
            </Link>
            <Link
              className="follow "
              to="/#"
            >
              Follow
            </Link>
          </div>
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/testing"
            >
              #testing
            </Link>
            <Link
              className="follow "
              to="/#"
            >
              Follow
            </Link>
          </div>
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/php"
            >
              #php
            </Link>
            <Link
              className="follow "
              to="/#"
            >
              Follow
            </Link>
          </div>
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/docker"
            >
              #docker
            </Link>
            <Link
              className="follow "
              to="/#"
            >
              Follow
            </Link>
          </div>
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/security"
            >
              #security
            </Link>
            <Link
              className="follow "
              to="/#"
            >
              Follow
            </Link>
          </div>
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/database"
            >
              #database
            </Link>
            <Link
              className="follow "
              to="/#"
            >
              Follow
            </Link>
          </div>
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/linux"
            >
              #linux
            </Link>
            <Link
              className="follow "
              to="/#"
            >
              Follow
            </Link>
          </div>
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/angular"
            >
              #angular
            </Link>
            <Link
              className="follow "
              to="/#"
            >
              Follow
            </Link>
          </div>
          <div className="sidebar-nav-element">
            <Link
              className="crayons-link crayons-link--block py-2 px-2"
              to="/t/git"
            >
              #git
            </Link>
            <Link
              className="follow "
              to="/#"
            >
              Follow
            </Link>
          </div>
        </div>
      </nav>
    </SideBarStyle>
  );
};
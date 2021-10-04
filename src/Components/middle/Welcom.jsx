import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Welcom = () => {
  const [click, setClick] = useState(true);

  return (
    click && (
      <div className="welcome">
        <div className="top">
          <img
            src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png"
            alt=""
          />
          <svg
            onClick={() => setClick(false)}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="black"
          >
            <path
              d="M6.99974 5.58623L11.9497 0.63623L13.3637 2.05023L8.41374 7.00023L13.3637 11.9502L11.9497 13.3642L6.99974 8.41423L2.04974 13.3642L0.635742 11.9502L5.58574 7.00023L0.635742 2.05023L2.04974 0.63623L6.99974 5.58623Z"
              fill="white"
            ></path>
          </svg>
        </div>

        <h1>You're now a part of the community!</h1>
        <span className="s">SUGGESTED THINGS YOU CAN DO</span>

        <div className="join">
          <Link to="/article/845813">
            <p>
              <span class="emoji">😊</span>Join the Welcome thread
            </p>
            <svg
              width="8"
              height="14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.172 7L.222 2.05 1.636.636 8 7l-6.364 6.364L.222 11.95 5.172 7z"
                fill="#fff"
              ></path>
            </svg>
          </Link>
        </div>

        <div class="join">
          <Link to="/new">
            <p>
              <span class="emoji">✍🏾</span>Write your first DEV Community post
            </p>
            <svg
              width="8"
              height="14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.172 7L.222 2.05 1.636.636 8 7l-6.364 6.364L.222 11.95 5.172 7z"
                fill="#fff"
              ></path>
            </svg>
          </Link>
        </div>

        <div class="join ss">
          <Link to="/setting">
            <p>
              <span class="emoji">💅🏼</span>Customize your profile
            </p>
            <svg
              width="8"
              height="14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.172 7L.222 2.05 1.636.636 8 7l-6.364 6.364L.222 11.95 5.172 7z"
                fill="#fff"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    )
  );
};

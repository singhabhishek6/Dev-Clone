import styled from "styled-components";

export const PostDetailsStyle = styled.div`
  width: 100%;
  max-width: 1350px;
  margin: auto;
  display: flex;
  background-color: var(--sideCard-color);
  .side {
    width: 5%;
    margin-left: 48px;
    padding-top: 60px;
  }
  .sideSmall {
    height: 45vh;
    position: sticky;
    top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;

    & .circle-ripple {
      cursor: pointer;
      display: flex;
      flex-direction: column;

      & span:first-of-type,
      span:nth-child(2) {
        width: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 35px;
        border: 2px solid transparent;
        border-radius: 50%;
      }
    }

    & .circle-ripple:first-of-type .show:hover {
      background-color: rgb(238, 217, 217);
      fill: rgb(220, 24, 24);
    }
    & .circle-ripple:first-of-type .click {
      background-color: rgb(238, 217, 217);
      fill: rgb(220, 24, 24);
      border-color: rgb(220, 24, 24);
    }

    & .circle-ripple:nth-child(2) .show:hover {
      background-color: rgb(219, 237, 236);
      fill: rgb(38, 217, 202);
    }
    & .circle-ripple:nth-child(2) .click {
      background-color: rgb(219, 237, 236);
      fill: rgb(38, 217, 202);
      border-color: rgb(38, 217, 202);
    }

    & .circle-ripple:nth-child(3) .show:hover {
      background-color: rgb(221, 222, 238);
      fill: rgb(59, 73, 223);
    }
    & .circle-ripple:nth-child(3) .click {
      background-color: rgb(221, 222, 238);
      fill: rgb(59, 73, 223);
      border-color: rgb(59, 73, 223);
    }
  }
  .middle {
    margin-top: 15px;
    width: 60%;
    /* display: none; */
    background-color: white;
    margin-left: 15px;
    border-radius: 8px;
    .u-details {
      margin-left: 60px;
      margin-right: 60px;
      & > div {
        display: flex;
        align-items: center;
        & > div {
          margin-left: 10px;
          display: flex;
          flex-direction: column;
          & span:first-of-type {
            font-weight: 700;
          }
          & span:last-of-type {
            font-weight: 400;
            font-size: 12px;
            color: rgb(0, 0, 0, 0.6);
          }
        }
      }
    }

    img:first-of-type {
      width: 100%;
      border-radius: 8px;
    }
    .pro {
      width: 50px !important;
      height: 50px;
      margin-top: 30px;
      border-radius: 50% !important;
    }
    .ti {
      font-weight: 900;
      font-size: 40px;
    }
    .mark {
      text-overflow: clip;
      margin-left: 60px;
      font-family: cursive;
      font-size: 18px;
      margin-right: 60px;
      margin-bottom: 40px;
      border-bottom: 1px solid rgb(0, 0, 0, 0.2);
      & * {
        white-space: pre-line;
      }
    }
  }
  .right {
    /* margin-top: 15px; */
    position: relative;

    width: 25%;

    margin-left: 15px;
    & .color {
      position: absolute;
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
      left: 0;
      right: 0;

      height: 30px;
      background-color: black;
    }
    & > div {
      background-color: rgb(249, 249, 249);
      border-radius: 8px;
      width: 100%;
      position: sticky;
      padding-bottom: 30px;
      top: 73px;

      & .us {
        position: relative;
        margin: 0 15px;
        z-index: 100;
        margin-top: 10px;
        display: flex;
        align-items: center;
        & .pro2 {
          width: 50px !important;
          height: 50px;
          margin-top: 15px;
          border-radius: 50% !important;
        }
        & span {
          margin-top: 15px;
          margin-left: 10px;
          font-size: 18px;
          font-weight: 700;
        }
      }

      & .foll {
        margin: 0 15px;
        padding: 8px 0;
        text-align: center;
        color: rgb(239, 239, 239);
        border-radius: 8px;
        margin-top: 20px;
        font-weight: 600;
        cursor: pointer;
        background-color: rgb(59, 73, 223);
        &:hover {
          background-color: rgb(26, 49, 202);
        }
      }

      & .info {
        margin: 20px 15px;
        font-weight: 500;
        & span {
          font-weight: 700;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.4);
        }
        & p {
          margin: 0;
          color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
  .hide {
    display: none !important;
  }
  .wave {
    display: inline-block;
    width: 0;
    height: 0;
    border-radius: 50%;
    animation: ripple 0.1s linear;
  }

  @keyframes ripple {
    0% {
      box-shadow: 0 0 0px 10px rgba(220, 24, 24, 0.4),
        0 0 0 20px rgb(255, 255, 255);
    }
    100% {
      box-shadow: 0 0 0 30px rgba(220, 24, 24, 0.4),
        0 0 0 0px rgb(220, 255, 255);
    }
  }

  .wave1 {
    display: inline-block;
    width: 0;
    height: 0;
    border-radius: 50%;
    animation: ripple1 0.1s linear;
  }

  @keyframes ripple1 {
    0% {
      box-shadow: 0 0 0px 10px rgba(38, 217, 202, 0.4),
        0 0 0 20px rgb(255, 255, 255);
    }
    100% {
      box-shadow: 0 0 0 30px rgba(38, 217, 202, 0.4),
        0 0 0 0px rgb(220, 255, 255);
    }
  }

  .wave2 {
    display: inline-block;
    width: 0;
    height: 0;
    border-radius: 50%;
    animation: ripple2 0.1s linear;
  }

  @keyframes ripple2 {
    0% {
      box-shadow: 0 0 0px 10px rgba(59, 73, 223, 0.4),
        0 0 0 20px rgb(255, 255, 255);
    }
    100% {
      box-shadow: 0 0 0 30px rgba(59, 73, 223, 0.4),
        0 0 0 0px rgb(220, 255, 255);
    }
  }

  .discussion {
    margin: 30px 60px;
  }
  .add {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    & textarea {
      min-width: 90%;
      /* position: relative; */
      font-size: 16px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      min-height: 80px;
      padding-top: 10px;
      padding-left: 10px;
      border-radius: 8px;
      border-color: rgb(0, 0, 0, 0.2);
      resize: none;
    }
  }
  .pro1 {
    width: 40px !important;
    height: 40px;
    border-radius: 50% !important;
  }
  .add1 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 30px;
  }
  .commentCard {
    width: 88.6%;
    border-radius: 8px;
    padding: 10px 10px;
    border: 1px solid;
    border-color: rgba(0, 0, 0, 0.2);

    & .det {
      & span {
        color: rgb(0, 0, 0, 0.6);
        font-weight: 900;
      }
      & span:first-of-type {
        color: black;
        font-weight: 500;
      }
      & span:last-of-type {
        font-weight: 500;
        font-size: 14px;
        color: rgb(0, 0, 0, 0.6);
      }
    }
    & p {
      font-family: cursive;
    }
  }
  .sub {
    display: inline-block;
    margin-left: 56px;
    padding: 10px 15px;
    margin-top: 15px;
    border-radius: 8px;
    font-weight: 500;
    color: white;
    letter-spacing: 0.3px;
    background-color: rgb(137, 145, 235);
    cursor: not-allowed;
    transition: 100ms ease-in-out;
  }
  .allow {
    cursor: pointer;
    background-color: rgb(59, 73, 223);
    transition: 100ms ease-in-out;
  }
  @media screen and (max-width: 805px) {
    .right {
      display: none;
    }
    .side {
      position: fixed;
      top: 91vh;
      z-index: 100;
      width: 100%;
      padding: 0;
      margin: 0;
      height: 80px;
      background-color: white;
    }
    .sideSmall {
      width: 100%;
      height: 80px;
      display: flex !important;
      flex-direction: row;
      display: flex;
      border-top: 1px solid rgba(0, 0, 0, 0.2);
    }
    .discussion {
      width: 95%;
      margin: 0 5px;
      padding-bottom: 80px;

      h2{
        margin-left: 8px;
      }
    }
    .show {
      padding: 0;
      height: 10px;
      position: relative;
      overflow: hidden;
    }

    .middle {
      width: 100%;
      margin: 0;
    }
    .u-details{
      width: 90%;
      margin: auto !important;
    }
    .mark {
      width: 90%;
      margin: auto !important;
      word-break: break-all;
    }

    textarea{
        min-width: 0px !important;
        width: 90% !important;
      }
  }
`;

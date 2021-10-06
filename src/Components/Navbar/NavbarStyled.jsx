import styled from "styled-components";

export const NavbarStyled = styled.div`
  background-color: var(--primary-color);
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
  a {
    text-decoration: none;
  }
  .navbar {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1350px;
    margin: auto;
    height: 57px;
  }

 

  @media screen and (max-width: 400px) {
    .chat {
      display: none !important;
    }
    .search1{
      margin-bottom: 5px !important;
    }
    .avatar {
      width: 45px !important;

      margin-right: 2px !important;
      margin-top: 0px !important;
    }
  }

  .ham {
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 5px;
    display: none;
    justify-content: center;
    & span {
      display: inline-block;
      margin-top: 5px;
      text-align: center;
      width: 20px;
      height: 2px;
      background-color: rgba(0, 0, 0, 0.8);
    }
  }

  .left-container {
    display: flex;
    width: 50%;
    margin-left: 45px;
  }
  .search1 {
    display: none;
  }
  .dev {
    display: flex;
    margin-left: 8px;
    margin-right: 20px;
    color: white;
    font-size: 20px;
    font-family: var(--font);
  }

  .search {
    width: 410px;
    height: 40px;
    margin-top: 1px;
    display: flex;
    align-items: center;
    border-radius: 6px;
    outline: 1px solid var(--card-border);
    transition: border 300ms ease-in-out;

    &:hover {
      /* border:2px solid rgba(0, 0, 0, 0.6); */
      outline: 1px inset rgba(0, 0, 0, 0.6);
      transition: border 300ms ease-in-out;
    }
  }
  .clicked {
    /* outline: none; */
    outline: 2px solid var(--active-button) !important;
  }
  .search input {
    width: 87%;
    height: 85%;
    border-radius: 8px;
    background-color: transparent;
    border: none;
    border-top: 1px solid transparent;
    padding-left: 5px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);

    &::placeholder {
      font-size: 15px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    &:focus {
      outline: none;
    }
  }
  .search svg {
    /* margin-top: 10px; */
    cursor: pointer;
    width: 30px;
    color: rgba(0, 0, 0, 0.8);
    height: 25px;

    &:hover {
      border-radius: 45%;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .search1 svg {
    /* margin-top: 10px; */
    cursor: pointer;
    width: 30px;
    color: rgba(0, 0, 0, 0.8);
    height: 25px;

    &:hover {
      border-radius: 45%;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .right-container {
    width: 50%;
    margin-right: 45px;
  }

  .login {
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .login-btn {
    padding: 10px 15px;
    font-family: var(--font);
    font-weight: 500;
    color: var(--active-button);
    border-radius: 5px;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }
  }
  .createAccount-btn {
    font-family: var(--font);
    font-weight: 500;
    color: white;
    display: flex;
    justify-content: center;
    padding: 9.5px 15px;
    align-items: center;
    background-color: var(--active-button);
    /* height: 40px; */
    cursor: pointer;
    margin-right: 18px;
    border-radius: 5px;

    &:hover {
      background-color: blue;
    }
  }

  .connect {
    margin-right: 25px;
    margin-top: 7px;
    cursor: pointer;
  }
  .avatar {
    width: 35px;
    position: relative;
    margin-top: 3px;
    height: 35px;
    margin-right: 18px;
    cursor: pointer;
    & img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    & .controls {
      position: absolute;
      right: 0;
      width: 245px;
      border-radius: 5px;
      height: 280px;
      transition: 300ms ease-in-out;
      background-color: white;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(9, 9, 9, 0.1);
      & .info {
        max-width: 93%;
        margin: auto;

        cursor: pointer;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        div {
          margin: 12px 0;
          padding: 5px 0;
          border-radius: 5px;
          &:hover {
            background-color: rgb(239, 239, 239);

            p {
              color: rgb(59, 73, 223);
            }
          }
          p {
            font-weight: 500;
            color: #000;
            font-size: 18px;
          }
        }

        p {
          margin: 0;
          margin-left: 8px;
        }
        span {
          margin-left: 8px;
          color: rgba(0, 0, 0, 0.6);
        }
      }

      .dash {
        display: flex;
        max-width: 93%;
        margin: auto;
        padding-top: 10px;
        flex-direction: column;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        padding-bottom: 5px;

        a {
          /* margin-left: 8px; */
          color: black;
          padding: 10px 8px;
          border-radius: 5px;

          &:hover {
            background-color: rgb(239, 239, 239);
            color: rgb(59, 73, 223);
          }
        }
      }
      .out {
        max-width: 90%;
        margin: auto;
        margin-top: 10px;
        border-radius: 5px;
        span {
          display: inline-block;
          padding: 10px 8px;
        }
        &:hover {
          background-color: rgb(239, 239, 239);
          color: rgb(59, 73, 223);
        }
      }
    }
  
  }
  @media screen and (max-width: 805px) {
    width: 100%;
    .search {
      display: none !important;
    }
    .createAccount-btn {
     
      display: none;
    }
    .d{
      display: inline-block;
      align-items: center;
      margin: 0;
      padding: 8.5px 5px;
    width: 100%;
    }
    .search1 {
      display: flex !important;
    }
    .ham {
      display: flex !important;
      margin: 0 !important;
    }
    .avatar {
      width: 35px !important;

      margin-right: 5px !important;
      margin-top: 0px !important;
    }
    .login {
      width: 100%;
      margin: auto;
      justify-content: space-between;
    }
    .left-container,
    .right-container {
      margin: 0 !important;
    }
    .left-container{
       width: 30%;
    }
    .right-container{
    }
    .login-btn {
      padding: 8px;
      margin-left: 2px;
      border: 1px solid;
      width: 50px;
      margin: 0 !important;
    }
  }
`;

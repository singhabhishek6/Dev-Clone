import styled from "styled-components";

export const SideBarStyle = styled.div`
  width: 240px;
  
  @media screen and (max-width: 805px) {
    position: fixed;
    z-index: 300;
    transform: translateX(-210%);
    transition: 300ms ease-in-out;
  }
  .community{
    display: none;
    transform: translateX(-210%);
    transition: 300ms ease-in-out;
  }
  .devCounts {
    padding: 15px;
    padding-top: 0;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: var(--primary-color-light);
    & span {
      color: var(--active-button);
    }

    & p:first-of-type {
      font-size: 17px;
      font-weight: 700;
      letter-spacing: 0.25px;
    }

    & p:last-of-type {
      color: rgba(0, 0, 0, 0.7);
    }
  }

  .login-btn {
    padding: 10px 15px;
    font-family: var(--font);
    font-weight: 500;
    color: var(--active-button);
    border-radius: 5px;
    display: flex;
    cursor: pointer;
    margin-top: 8px;
    justify-content: center;
    align-items: center;

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
    padding: 10px 15px;
    align-items: center;
    background-color: var(--active-button);
    cursor: pointer;
    border-radius: 5px;
    &:hover{
        background-color: blue;
    }
  }

  .lists {
    width: 100%;
    list-style: none;
    padding: 5px 0px;
    margin: 0;

    & li {
      display: flex;
      width: 100%;
      border-radius: 5px;
      height: 40px;

      align-items: center;

      & a {
        margin-left: 10px;
        display: flex;
        color: rgba(0, 0, 0, 0.9);
        text-decoration: none;
        align-items: center;
        justify-content: space-between;

        & svg {
          margin-right: 10px;
        }
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }

  .social {
    display: flex;
    width: 180px;
    margin: 10px 0;
    justify-content: space-between;
    align-items: center;

    & a svg {
      fill: rgba(0, 0, 0, 0.7);
    }
    & a:hover {
      & svg {
        fill: rgba(0, 0, 0, 0.9);
      }
    }
  }

  .popular {
    width: 100%;
  }
  .tags {
    max-height: 300px;
    overflow-y: scroll;
  }

  .sidebar-nav-element {
    display: flex;
    height: 40px;
    justify-content: space-between;
    align-items: center;
    & a {
      text-decoration: none;
      margin-left: 5px;
      color: rgba(0, 0, 0, 0.8);
    }
    & .follow {
      display: none;
      font-family: var(--font);
      font-size: 14px;
      font-weight: 400;
      color: white;
      justify-content: center;
      padding: 5px 10px;
      align-items: center;
      background-color: var(--active-button);
      /* height: 40px; */
      cursor: pointer;
      margin-right: 5px;
      border-radius: 5px;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 5px;

      & .follow {
        display: flex;
        &:hover {
          background-color: blue;
        }
      }
    }
  }
`;

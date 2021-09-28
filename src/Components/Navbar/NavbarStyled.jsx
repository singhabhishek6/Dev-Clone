import styled from "styled-components";

export const NavbarStyled = styled.div`
  display: flex;
  width: 92%;
  margin: auto;
  height: 60px;
  background-color: var(--primary-color);
  
  @media screen and (max-width: 805px) {
      width: 100%;
    .search{
        display: none !important;
    }
    .createAccount-btn{
        display: none !important;
    }
    .search1{
        display: flex !important;
    }
    .ham{
        display: flex !important;
    }
  }
  
  .ham{
      width: 50px;
      height: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 5px;
      display: none;
      justify-content: center;
      & span{
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
  }
  .search1{
      display: none;
  }
  .dev {
    width: 60px;
    height: 45px;
    margin: 7px 0;
    margin-right: 10px;
    color: white;
    font-size: 20px;
    font-family: var(--font);
  }
  .dev img {
    width: 100%;
    height: 100%;
  }

  .search {
    width: 410px;
    height: 40px;
    display: flex;
    align-items: center;
    margin-top: 9px;
    border-radius: 8px;
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
    padding-left: 10px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);

    &::placeholder {
      font-size: 16px;
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
    margin-top: 8px;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }
  }
  .createAccount-btn {
    /* width: 150px; */
    font-family: var(--font);
    font-weight: 500;
    color: white;
    display: flex;
    margin-top: 8px;
    justify-content: center;
    padding: 10px 15px;
    align-items: center;
    background-color: var(--active-button);
    /* height: 40px; */
    cursor: pointer;
    margin-right: 18px;
    border-radius: 5px;
  }

  .connect {
    margin-right: 25px;
    margin-top: 7px;
    cursor: pointer;
  }
  .avatar {
    width: 35px;
    margin-top: 7px;
    height: 35px;
    margin-right: 18px;
    cursor: pointer;
    & img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
`;

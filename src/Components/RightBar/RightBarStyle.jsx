import styled from "styled-components";

export const RightBarStyled = styled.aside`
  width: 26%;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  @media screen and (max-width: 1040px) {
    display: none;
  }
  & .card-hackathon {
      border: 1px solid rgba(0,0,0,.1);
      background-color: var(--main-0);
      padding: 1rem;
      padding-top: 10px;
      border-radius: 5px;
      line-height: 1.5;
      
      img {
          width: 100%;
          border-radius: 5px;
          display: inline-block;
        }
        
        h2{
            font-size: 16px;
            margin-top: -10px;

            & span{
                font-weight: 400;
            }
        }

        .arr a{
            display: flex;
            align-items: center;
        }
         a {
            text-decoration: none;
      color: var(--main-theme);
    }
  }

  .card {
    margin-top:20px;
    background-color: var(--main-0);
    border-radius: 5px;
    line-height: 1.5;
    height: max-content;

    header {
      display: flex;
      align-items: center;
      padding: 0.5rem 1rem;

      h3 {
        font-size: 1.25rem;
        flex: 1;
      }
      small {
        color: var(--main-theme);
        font-size: 0.875rem;
      }
    }
    ul{
        padding: 0;
    }
    li {
      display: block;
      padding: 1rem;
      border-top: 1px solid var(--main-1);
      border-bottom: 1px solid var(--main-1);
      cursor: pointer;
      transition: all 0.2s;
      &:hover {
        background-color: #fff;
        & a{

            color: rgb(59,73,223) !important;
        }
      }

      & a{
          text-decoration: none;
          color:var(--main-6) ;
      }
    }

    small {
      color: rgba(0,0,0,.5);
    }

    span {
      background-color: var(--main-theme);
      color: #fff;
      font-size: 0.75rem;
      padding: 0.25rem;
      border-radius: 5px;
      margin-top: 5px;
    }
  }
`;

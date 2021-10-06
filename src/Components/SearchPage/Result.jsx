
import styled from "styled-components";

export const Result = styled.div`
  width: 100%;
  .article {
    width: 100%;
    background-color: #fff;
    box-shadow: 0 0 0 1px var(--main-a);
    border-radius: 5px;
    margin-bottom: 1rem;

    & {
      .article__image {
        /* margin-top: 0; */
        display: none;
      }
    }

    &__image {
      display: block;
      width: 100%;
      height: auto;
      background-size: cover;
      background-position: center center;
      padding-bottom: 40%;
      border-radius: 5px 5px 0 0;
    }

    &__details {
      display: flex;
      padding: 1rem;
      position: relative;
      .u-pic {
        display: block;
        width: 2rem;

        img {
          border-radius: 50%;
          width: 100%;
        }
      }

      .u-details {
        display: flex;
        flex-direction: column;
        padding-left: 0.5rem;
        margin-top: -3px;
        margin-bottom: 0.5rem;

        .u-name {
          color: rgba(0, 0, 0, 0.8);
          font-weight: 500;
          text-transform: capitalize;
        }
        .time {
          font-size: 0.875rem;
          color: var(--main-6);

          &:hover {
            color: var(--main-8);
          }
        }

        h3,
        .tags,
        .additional-details {
          margin-top: 1rem;
        }

        h3 {
          font-size: 1.75rem;
          margin: 0;
          margin-top: 10px;
          &:hover {
            color: var(--main-theme);
          }
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          span {
            font-size: 0.9rem;
            padding: 0.3rem;
            color: var(--main-6);

            &:hover {
              color: var(--font-color);
            }
          }
        }

        .additional-details {
          font-size: 0.875rem;
          display: flex;
          align-items: center;

          .reactions {
            flex: 1;
            display: flex;

            a {
              padding: 0.5rem 1rem;
              color: var(--main-8);
              display: flex;
              align-items: center;
              border-radius: 5px;

              &:first-child {
                margin-left: -1rem;
              }

              &:hover {
                color: var(--font-color);
                background-color: rgba(0, 0, 0, 0.03);
              }
            }
            a span {
              display: flex;
              /* align-items: center; */
              & i {
                margin-right: 6px;
              }
            }
          }

          .save {
            position: absolute;
            right: 0;
            margin-left: 1rem;
            padding-right: 1rem;

            small {
              color: var(--main-6);
              margin-right: 0.5rem;
            }

            button {
              padding: 0.6rem 0.8rem;
              border: none;
              border-radius: 5px;
              text-transform: capitalize;
              font-weight: 400;
              color: var(--main-6);
              background-color: var(--main-2);
              transition: all 0.2s;
              &:hover {
                color: var(--main-8);
                background-color: var(--main-3);
              }
            }
          }
        }
      }
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  .skeleton-wrapper {
    margin: 1.2rem auto;
    margin-top: 0;
    padding: 0.8rem 1rem;
    border-radius: 5px;
    background: #fff;
    position: relative;
    overflow: hidden;

    &:not(:first-child) {
      .skeleton.image {
        display: none;
      }
    }
  }

  .skeleton {
    background: var(--main-2);
    margin: 0.8rem 0;
    border-radius: 5px;
    overflow: hidden;
  }

  .skeleton.image {
    width: 100%;
    height: 200px;
    background-color: inherit;
  }

  .skeleton.avatar {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: 0.5rem;
  }

  .skeleton.text {
    width: 30%;
    height: 1rem;
  }

  .skeleton.title {
    width: 60%;
    height: 1.2rem;
    margin-left: 2rem;
  }

  .skeleton.smalltext {
    width: 40%;
    height: 0.8rem;
    margin-left: 2rem;
    margin-bottom: 3rem;
  }

  .shimmer-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    animation: loading 1.5s infinite;
  }

  .shimmer {
    width: 70%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 2rem 2rem rgba(0, 0, 0, 0.2);
  }
  @keyframes loading {
    0% {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(-70%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  .hidden,
  .show-mobile {
    display: none;
  }
`;

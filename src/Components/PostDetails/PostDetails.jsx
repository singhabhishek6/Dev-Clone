import axios from "axios";
import React, { useContext, useRef } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { PostDetailsStyle } from "./PostDetailsStyle";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { userContext } from "../../App";
import { Alert, Snackbar } from "@mui/material";

export const PostDetails = () => {
  const [userr, setUser] = useState("");
  const [mark, setmark] = useState("");
  const [heart, setHeart] = useState(false);
  const [uni, setUni] = useState(false);
  const [sav, setSav] = useState(false);
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);
  const [commentsCount, setCommentsCount] = useState(0);
  const [save, setSave] = useState(4);
  const [like, setLike] = useState(0);
  const { id } = useParams();
  const { state, setState } = useContext(userContext);
  const [LoggedUser, setLoggedUser] = useState({});
  const [userFollow, setUserFollow] = useState("Follow");
  const [errModel, setErrModel] = useState(false);
  const [errMessege, setErrMessage] = useState("");

  const [state1, setState1] = useState({
    vertical: 'top',
    horizontal: 'right',
  });
  const { vertical, horizontal } = state1;

  useEffect(() => {
    setLoggedUser({ ...state.user });
  }, [state, userr]);

  useEffect(() => {
    fetchIt(id);
  }, [id]);

  useEffect(() => {
    let data = userr?.liked_users;
    let isFound = false;
    if (data !== undefined) {
      for (let i = 0; i < data.length; i++) {
        if (LoggedUser?._id?.toString() === data[i]?.toString()) {
          isFound = true;
          break;
        }
      }
    }

    setHeart(isFound);

    isFound = false;
    data = userr?.saved_user;
    if (data !== undefined) {
      for (let i = 0; i < data.length; i++) {
        if (LoggedUser?._id?.toString() === data[i]?.toString()) {
          isFound = true;
          break;
        }
      }
    }

    setSave(data?.length);
    setSav(isFound);
  }, [userr])

  function fetchIt(id) {
    axios.get(`http://localhost:2222/posts/${id}`).then((res) => {
      setUser(res.data.post);
      setLike(res.data.post.likes_count);
      setmark(res.data.post.body_html.split("\n").join(" "));
    }).catch(err => {
      axios(`https://dev.to/api/articles/${id}`).then((res) => {
        setUser(res.data);
        setmark(res.data.body_html.split("\n").join(" "));
      }).catch(err => {
        console.log(err);
      });
    })

  }

  const fetchComments = () => {
    axios.get(`http://localhost:2222/comments?post_id=${id}`).then(res => {
      setCommentsCount(res.data.comments_count);
      setComments(res.data.comments.reverse());
      setText("");
    }).catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    fetchComments();
  }, [id])

  useEffect(() => {
    let data = state?.user?.following_users;
    let postUserId = userr?.user?._id;
    let isFound = false;
    for (let i = 0; i < data?.length; i++) {
      console.log("Hello type", data[i], postUserId);
      if (data[i] === postUserId) {
        isFound = true;
        setUserFollow("Unfollow");
        break;
      }
    }

    if (!isFound) {
      setUserFollow("Follow");
    }

  }, [state, userr]);

  const handleAlert = (message) => {
    setErrMessage(message);
    setErrModel(true);
    setTimeout(() => {
      setErrModel(false);
    }, 2000)
  }

  const handleCommentSubmit = () => {
    axios.post(`http://localhost:2222/comments?post_id=${id}&user_id=${LoggedUser._id}`, {
      description: text
    })
      .then((res) => {
        fetchComments();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleLikes = (likeStatus) => {

    axios.patch(`http://localhost:2222/posts/${id}?likes=${likeStatus + like}&user_id=${LoggedUser._id}`)
      .then((res) => {
        setUser(res.data.post);
        setLike(res.data.post.likes_count);
        setmark(res.data.post.body_html.split("\n").join(" "));
      })
      .catch(err => {
        console.log(err);
        setHeart(false);
        handleAlert("please login for like this post");
      })

  }

  const handleFollowUser = () => {
    if (LoggedUser._id === undefined) {
      handleAlert("Please login to follow user");
      return;
    }

    axios({
      method: 'PATCH',
      url: `http://localhost:2222/users/${userr?.user._id}`,
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({ follower_id: LoggedUser._id }),
      withCredentials: true
    }).then((res) => {
      setState({ type: "LOGIN", status: true, user: res.data.user });
    }).catch((err) => {
      console.log(err);
    })
  }


  return (
    <>
      <Navbar />
      <PostDetailsStyle>
        <div className="side">
          <div className="sideSmall">
            <div
              className={`circle-ripple ${heart && ""}`}
              onClick={() => setHeart(!heart)}
            >
              <span onClick={() => { handleLikes(1) }} className={`show ${heart && "hide"}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z"></path>
                </svg>
              </span>

              <span onClick={() => { handleLikes(-1) }} className={`click wave ${!heart && "hide"}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M2.821 12.794a6.5 6.5 0 017.413-10.24h-.002L5.99 6.798l1.414 1.414 4.242-4.242a6.5 6.5 0 019.193 9.192L12 22l-9.192-9.192.013-.014z"></path>
                </svg>
              </span>
              <span className="num">{like}</span>
            </div>

            <div className="circle-ripple" onClick={() => setUni(!uni)}>
              <span className={`show ${uni && "hide"}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                // aria-hidden="true"
                >
                  <path
                    d="M5.645 8.013c.013-.265-.261-.323-.4-.183-1.16 1.17-1.822 3.865-.344 7.32.294.961 1.938 3.19.84 6.131l-.003.006c-.094.255.206.404.366.263 1.395-1.226 1.933-3.593 1.1-6.375-.488-1.657-1.955-4.226-1.559-7.162zm-3.22 2.738c.05-.137-.124-.417-.326-.225-.939.893-1.316 2.863-.976 4.605.547 2.878 2.374 3.526 2.066 6.629-.028.102.176.38.348.154 1.546-2.033.409-4.453-.241-6.006-1.005-2.386-1.087-4.118-.871-5.157z"

                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.622 7.223l8.579-3.68c.598-.256 1.087.547.6.985l-6.618 5.941c.881 2.043 2.738 6.34 2.931 6.775 1.348 3.031-2.055 4.918-3.807 3.583a7.027 7.027 0 01-.623-.574c-.974-.965-2.419-2.398-5.207-1.877.284-2.115-.313-3.737-.883-5.288-.38-1.032-.747-2.032-.837-3.124-.346-3.329 3.763-8.23 4.696-7.953.386.115.326 1.229.266 2.319-.051.948-.102 1.88.143 2.12.145.142.428.43.76.773zM11.5 16.5l2.5.5 2.5 2 1-.5-2-4.5-1.5-4-1.5-1-1-1-1-1.5L10 8l-.5 1.5 1 2.5 1 4.5z"
                  ></path>
                </svg>
              </span>

              <span className={`click wave1 ${!uni && "hide"}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M5.645 8.013c.013-.265-.261-.323-.4-.183-1.16 1.17-1.822 3.865-.344 7.32.294.961 1.938 3.19.84 6.131l-.003.006c-.094.255.206.404.366.263 1.395-1.226 1.933-3.593 1.1-6.375-.488-1.657-1.955-4.226-1.559-7.162zm-3.22 2.738c.05-.137-.124-.417-.326-.225-.939.893-1.316 2.863-.976 4.605.547 2.878 2.374 3.526 2.066 6.629-.028.102.176.38.348.154 1.546-2.033.409-4.453-.241-6.006-1.005-2.386-1.087-4.118-.871-5.157zM22.2 3.543l-8.579 3.68c-.332-.343-.615-.63-.76-.773-.527-.517.313-4.224-.409-4.439-.933-.277-5.042 4.624-4.696 7.953.224 2.735 2.193 4.89 1.72 8.412 3.446-.644 4.841 1.697 5.83 2.45 1.752 1.335 5.155-.551 3.807-3.582-.193-.435-2.05-4.732-2.931-6.775l6.619-5.94c.486-.44-.003-1.242-.601-.986zm-9.418 9.535a.828.828 0 01-.74-.9.825.825 0 01.81-.76c.479 0 .85.42.81.903a.824.824 0 01-.88.757z"></path>
                </svg>
              </span>
              <span className="num">5</span>
            </div>

            <div className="circle-ripple" onClick={() => setSav(!sav)}>
              <span onClick={() => setSave(like + 1)} className={`show ${sav && "hide"}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1zm13 2H6v15.432l6-3.761 6 3.761V4z"></path>
                </svg>
              </span>

              <span onClick={() => setSave(like - 1)} className={`click wave2 ${!sav && "hide"}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1z"></path>
                </svg>
              </span>
              <span className="num">{save}</span>
            </div>
          </div>
        </div>
        <div className className="middle">
          <img src={userr.cover_image} alt="" />
          <div className="u-details">
            <div>
              <img className="pro" src={userr.user?.profile_image || LoggedUser.profile_image} alt="" />

              <div>
                <span className="u-name">{userr.user?.name || LoggedUser.name}</span>

                <span className="time">
                  Posted On:
                  {" " + new Date(userr.published_at).toLocaleDateString(undefined, {
                    day: "numeric",
                    month: "long",
                  })}
                </span>
              </div>
            </div>

            <h1 className="ti">{userr.title}</h1>

            <div className="tags">
              {userr.tags &&
                userr.tags.map((tag, id) => {
                  return <span style={{ marginRight: 10 }} className="tag"> #{tag}</span>;
                })}
            </div>
          </div>
          <ReactMarkdown className="mark" rehypePlugins={[rehypeRaw]} children={mark} />
          <div className="discussion">
            <h2>Discussion ({userr.comments_count || commentsCount})</h2>
            <div className="add">
              <img className="pro1" src={LoggedUser.profile_image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPbGrM6LFhkSf171kkRf3Ua6WKdL886A_ndA&usqp=CAU"} alt="" />
              <textarea onChange={(e) => setText(e.target.value)} cols="30" rows="5" placeholder="Add to the discussion" value={text} />
            </div>
            <div onClick={handleCommentSubmit} className={`sub ${text && "allow"}`}>
              Submit
            </div>

            {comments.map((el, i) => {
              // console.log("elshfaj", el, i)
              return <div className="add1">
                <img className="pro1" src={el.user_id.profile_image} alt="" />
                <div className="commentCard">
                  <div className="det">
                    <span>{el.user_id.name}</span>
                    <span> . </span>
                    <span> {new Date(el.createdAt).toLocaleDateString(undefined, {
                      day: "numeric",
                      month: "long",
                    })}</span>
                  </div>
                  <p>{el.description}</p>
                </div>
              </div>
            })}
          </div>
        </div>
        <div className="right">
          <div>
            <div className="color"></div>
            <div className="us">
              <img className="pro2" src={userr.user?.profile_image} alt="" />
              <span>{userr.user?.name}</span>
            </div>
            <div className="foll" onClick={handleFollowUser}>{userFollow}</div>
            <div className="info">
              <span>LOCATION</span>
              <p>{userr.user?.location || "New York, USA"}</p>
            </div>
            <div className="info">
              <span>JOINED</span>
              <p>{new Date(userr?.user?.createdAt || userr?.created_at).toLocaleDateString(undefined, {
                day: "numeric",
                month: "long",
              })} </p>
            </div>
          </div>
        </div>
      </PostDetailsStyle>

      <Snackbar open={errModel} anchorOrigin={{
        vertical,
        horizontal
      }}
        key={vertical + horizontal} >
        <Alert severity="error" sx={{ width: '100%' }}>
          {errMessege}
        </Alert>
      </Snackbar>
    </>
  );
};

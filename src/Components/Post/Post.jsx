import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { RiImageAddFill } from "react-icons/ri";
import { storage } from "./Fire.js";
import ReactMarkdown from "react-markdown";
import { PostStyled } from "./PostStyle.jsx";
import rehypeRaw from 'rehype-raw'

export const Post = () => {
  const [image, setImage] = useState(null);
  const [image1, setImage1] = useState(null);
  const [url, setUrl] = useState("");
  const [url1, setUrl1] = useState("");
  const [mark, setMark] = useState("");
  const [progress, setProgress] = useState(0);
  const [edit, setedit] = useState(true);
  const Input = useRef(null);
  const Input1 = useRef(null);
  const textRef = useRef(null);
  const text2 = useRef(null);

  useEffect(() => {
    if (image != null) handleUpload();
    if (image1 != null) handleUpload1();
  }, [image, image1]);
  const onChangeHandler = function (e) {
    const target = e.target;
    textRef.current.style.height = "30px";
    textRef.current.style.height = `${target.scrollHeight}px`;
  };
  const onChangeHandler1 = function (e) {
      setMark(e.target.value)
    const target = e.target;
    text2.current.style.height = "150px";
    text2.current.style.height = `${target.scrollHeight}px`;
  };

  const handleChange = (e) => {
    setProgress(0);

    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleChange1 = (e) => {
    setProgress(0);
    if (e.target.files[0]) {
      setImage1(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    console.log("sd");
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            setProgress(100);
            setUrl(url);
          });
      }
    );
  };
  const handleUpload1 = () => {
    console.log("sd");
    const uploadTask = storage.ref(`images/${image1.name}`).put(image1);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image1.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            setProgress(100);
            let x = `![Alt Text](${url})`
            setUrl1(x);
          });
      }
    );
  };

  const copy = async () => {
    await navigator.clipboard.writeText(url1);
  
  }
  console.log(progress);
  console.log(url);
  console.log(mark);
  return (
    <PostStyled>
      <div className="pWrapper">
        <div className="postSide">
          <nav>
            <div className="dev">
              <svg width="50" height="40" viewBox="0 0 50 40" fill="red">
                <rect
                  width="50"
                  height="40"
                  rx="3"
                  style={{ fill: "black" }}
                ></rect>
                <path
                  d="M19.099 23.508c0 1.31-.423 2.388-1.27 3.234-.838.839-1.942 1.258-3.312 1.258h-4.403V12.277h4.492c1.31 0 2.385.423 3.224 1.27.846.838 1.269 1.912 1.269 3.223v6.738zm-2.808 0V16.77c0-.562-.187-.981-.562-1.258-.374-.285-.748-.427-1.122-.427h-1.685v10.107h1.684c.375 0 .75-.138 1.123-.415.375-.285.562-.708.562-1.27zM28.185 28h-5.896c-.562 0-1.03-.187-1.404-.561-.375-.375-.562-.843-.562-1.404V14.243c0-.562.187-1.03.562-1.404.374-.375.842-.562 1.404-.562h5.896v2.808H23.13v3.65h3.088v2.808h-3.088v3.65h5.054V28zm7.12 0c-.936 0-1.684-.655-2.246-1.965l-3.65-13.758h3.089l2.807 10.804 2.808-10.804H41.2l-3.65 13.758C36.99 27.345 36.241 28 35.305 28z"
                  style={{ fill: "white" }}
                ></path>
              </svg>
              <div>Create Post</div>
            </div>

            <div className="switch">
              <div
                className={`edit ${edit ? "line" : ""}`}
                onClick={() => setedit(true)}
              >
                Edit
              </div>
              <div
                className={`edit ${!edit ? "line" : ""}`}
                onClick={() => setedit(false)}
              >
                Preview
              </div>
            </div>
          </nav>
          <div className="postWrapper">
            <div className={`editSection ${!edit && "hide"}`}>
              {/* if no image is uploaded */}
              <div className={`adddImg ${image ? "hide" : ""}`}>
                <input
                  type="file"
                  ref={Input}
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
                <div
                  className="aadd"
                  onClick={() => {
                    Input.current.click();
                  }}
                >
                  Add a cover image
                </div>
              </div>
              {/* if image is uploaded */}

              {progress == 100 ? (
                <div className={`cover ${!image ? "hide" : ""}`}>
                  <img src={url || ""} alt="" />
                  <div
                    className="aadd"
                    onClick={() => {
                      Input.current.click();
                    }}
                  >
                    Change
                  </div>
                  <div
                    className="rem"
                    onClick={() => {
                      setImage(null);
                      setProgress(0);
                    }}
                  >
                    Remove
                  </div>
                </div>
              ) : (
                <div className={`load ${!image ? "hide" : ""}`}>
                  <div className={`loader ${!image ? "hide" : ""}`}>
                    
                  </div>
                  <span>Loading...</span>
                </div>
              )}

              {/* Title input */}

              <div className="title">
                <textarea
                  autoComplete={false}
                  ref={textRef}
                  onChange={onChangeHandler}
                  rows="1"
                  placeholder="New post title here..."
                />
              </div>
              {/* tags input */}
              <div className="tags">
                <textarea
                  rows="1"
                  type="text"
                  placeholder="Add upto 4 tags..."
                />
              </div>

              <div className="uploadImg">
                <input
                  type="file"
                  ref={Input1}
                  onChange={handleChange1}
                  style={{ display: "none" }}
                />
                <div
                  className="upload"
                  onClick={() => {
                    Input1.current.click();
                  }}
                >
                  <RiImageAddFill /> Upload image
                </div>

                {url1 &&<div className="clipboard">
                  <input type="text" value={url1} />
                  <div className="copy" onClick={copy}>
                    {" "}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      class="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="fc5f15add1e114844f5e"
                    >
                      <title id="fc5f15add1e114844f5e">
                        Copy Markdown for image
                      </title>
                      <path d="M7 6V3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 013 21l.003-14c0-.552.45-1 1.007-1H7zm2 0h8v10h2V4H9v2zm-2 5v2h6v-2H7zm0 4v2h6v-2H7z"></path>
                    </svg>
                    Copied..
                  </div>
                </div>}
              </div>

              <div className="markdown">
                <textarea
                  ref={text2}
                  onChange={onChangeHandler1}
                  rows="7"
                  placeholder="Write your post content here..."
                ></textarea>
              </div>
            </div>
            <div className={`previewSection ${edit && "hide"}`}>
            <ReactMarkdown  rehypePlugins={[rehypeRaw]}  children={mark} />
            
            </div>
          </div>
          <div className="control">
            <div className="save">Publish</div>
          </div>
        </div>
        <div className="suggestion"></div>
      </div>
    </PostStyled>
  );
};



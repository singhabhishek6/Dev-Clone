import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { div } from "react-router-dom";
import Dash from "./dashboard.module.css";
import { DashboardPost } from "./DashboardPost";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { userContext } from "../../App";

const post = [
  {
    count: 0,
    title: "total post reaction",
  },
  {
    count: "< 500",
    title: "total post view",
  },
  {
    count: 0,
    title: "listing created",
  },
  {
    count: 0,
    title: "credit available",
  },
];
const Dashboard = () => {
  const [UserPostData, setUserPostData] = useState([]);
  const [cli, setCli] = useState("");
  const [p, setP] = useState(true);
  const [u, setU] = useState(false);
  const [l, setL] = useState(false);
  const { state, setState } = useContext(userContext);
  const [logged ,setLogged] = useState({})
  const [user, SetUser] = useState([]);

  useEffect(() => {
    setLogged(state.user)
    
  }, [state])

  const fetchUserPostData = (title) => {
    axios
      .get(`https://devto-backent.herokuapp.com/posts`)
      .then((res) => {
       
        let x = 0;
        let postHold = []
        res.data.posts.forEach((el) => {
          x += el.likes_count;
          if(el.user?._id === state.user?._id){
            postHold.push(el)
          }
        });
      
        post[0].count = x;
        setUserPostData(postHold);
    
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchUserPostData();
  }, [logged]);
  const getUser =  ()=> {
   let likedUser= []
    
     axios.get(`https://devto-backent.herokuapp.com/users`).then( res => {
       console.log(res);
              likedUser= res.data.data    
              console.log(likedUser);
              if(likedUser[0])
               SetUser(likedUser)
             
        });
      
    }
console.log(user,logged);
  return (
    <>
      <Navbar />
      <section className={Dash.dash_section}>
        <div className={Dash.main}>
          <div className={Dash.heading}>
            <h2>Dashboard</h2>
          </div>
          <div className={Dash.card_container}>
            {post.map((item, index) => (
              <div className={Dash.card_item} key={index}>
                <h1>{item.count}</h1>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={Dash.dash_section}>
        <div className={Dash.sidebar_main}>
          <div className={Dash.sidebar_container}>
            <div>
              <div
                onClick={() => {
                  setP(true);
                  setL(false);
                  setU(false);
                }}
                className={Dash.sidebar_item + " " + (p ? Dash.show : "")}
              >
                <p>Post</p>
             
              </div>
              <div
                onClick={() => {
                  setP(false);
                  setL(false);
                  setU(true);
                  getUser();
                }}
                className={Dash.sidebar_item + " " + (u ? Dash.show : "")}
              >
                <p>Following users</p>
         
              </div>
            </div>
          </div>

          <div className={Dash.post_main}>
            {/* <div className={Dash.select_container}>
             
              {UserPostData.length == 0 ? (
                ""
              ) : (
                <select name="" id="">
                  <option value="Recently Created">Recently Created</option>
                  <option value="Recently Published">Recently Published</option>
                  <option value="Most Views">Most Views</option>
                  <option value="Most Reactions">Most Reactions</option>
                  <option value="Most Comments">Most Comments</option>
                </select>
              )}
            </div> */}
            {UserPostData.length == 0 ? (
              <div className={Dash.post_blank}>
                <p>
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--XHE_XeFn--/c_imagga_scale,f_auto,fl_progressive,q_auto,w_300/https://dev-to-uploads.s3.amazonaws.com/i/y5767q6brm62skiyywvc.png"
                    alt=""
                  />
                </p>
                <p>
                  This is where you can manage your posts, but you haven't
                  written anything yet.
                </p>
                <div to="/new">Write your first post now</div>
              </div>
            ) : (
              <div className={Dash.post_container}>
                {p &&
                  UserPostData.map((item, index) => (
                    <div className={Dash.post_item} key={index}>
                      <DashboardPost item={item} />
                    </div>
                  ))}

                {u && (
                  <div className={Dash.post_item}>
                    {user.map((el) => {
                      return (
                        <div className={Dash.follo}>
                          <img src={el.profile_image} alt="" />
                          <h2>{el.name}</h2>
                          <p>{el.location}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export { Dashboard };

import React, { useContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { Signup } from "../Components/Signup/Signup";
import axios from "axios";
import { Post } from "../Components/Post/Post";
import { Login } from "../Components/login/Login";
import { Setting } from "../Components/Settings/Setting";
import { PostDetails } from "../Components/PostDetails/PostDetails";
import { userContext } from "../App";
import { SearchPage } from "../Components/SearchPage/SearchPage";
import { Dashboard } from "../Components/Dashboard/Dashboard";
import { Edit } from "../Components/Edit/Post";

export const Routes = () => {
  const [login, setLogin] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { setState } = useContext(userContext);
  const getSenData = () => {
    axios({
      method: "GET",
      url: "https://devto-backent.herokuapp.com/users/auth",
      withCredentials: true,
    })
      .then(({ data }) => {
        if (data.status === 200) {
          setState({ type: "LOGIN", status: true, user: data.user });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSenData();
  }, []);
  return (
    <Switch>
      <Route exact path="/">
        <HomePage toggle={toggle} setToggle={setToggle} login={login} setLogin={setLogin} />
      </Route>
     <Route exact path="/dashboard">
       <Dashboard toggle={toggle} setToggle={setToggle} login={login} setLogin={setLogin}/>
       </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/setting">
        <Setting />
      </Route>
      <Route exact path="/new">
        <Post />
      </Route>
      <Route exact path="/article/:id">
        <PostDetails toggle={toggle} setToggle={setToggle}   login={login} setLogin={setLogin}/>
      </Route>

      <Route exact path="/enter">
        <Login />
      </Route>
      <Route exact path="/search/:data">
        <SearchPage />
      </Route>
      <Route exact path="/edit/:id">
        <Edit />
      </Route>

    </Switch>
  );
};

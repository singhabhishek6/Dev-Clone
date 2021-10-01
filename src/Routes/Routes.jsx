import React, { useContext, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from '../Pages/HomePage'
import { Signup } from '../Components/Signup/Signup'
import axios from 'axios'
import { Post } from '../Components/Post/Post'
import { Setting } from '../Components/Settings/Setting'
import { userContext } from '../App';


export const Routes = () => {
    const { setState } = useContext(userContext);
    const getSenData = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:2222/users/auth',
            withCredentials:true,
        }).then(({ data }) =>
        {
            if(data.status === 200)
            {
                setState({ type: "LOGIN", status:true , payload: data.user });
            }
                
        }).catch((err) => {
            console.log(err);
          });
    }

    useEffect(() => {
        getSenData();
    }, []);
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>

            <Route path='/signup'>
                <Signup />
            </Route>
            <Route path='/setting'>
                <Setting />
            </Route>
            <Route exact path="/new">
                <Post />
            </Route>
           
        </Switch>
    );
}

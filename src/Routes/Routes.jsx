import React, { useEffect } from 'react'
import { Switch ,Route} from 'react-router-dom'
import { HomePage } from '../Pages/HomePage'
import { Signup } from '../Components/Signup/Signup'
import axios from 'axios'
export const Routes = () => {

    const getSenData = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:2222/users/auth',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            withCredentials:true,
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
          });
    }

    useEffect(() => {
        getSenData();
    },[])
    return (
        <Switch>
            <Route exact path="/">
               <HomePage/>
            </Route>

            <Route path='/signup'>
                <Signup/>
            </Route>
           
        </Switch>
    )
}

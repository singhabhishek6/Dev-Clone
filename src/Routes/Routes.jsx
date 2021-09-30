import React, { useEffect } from 'react'
import { Switch ,Route} from 'react-router-dom'
import { HomePage } from '../Pages/HomePage'
import { Signup } from '../Components/Signup/Signup'
import { Post } from '../Components/Post/Post'
export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
               <HomePage/>
            </Route>

            <Route path='/signup'>
                <Signup/>
            </Route>
            <Route exact path="/new">
                <Post/>
            </Route>
           
        </Switch>
    )
}

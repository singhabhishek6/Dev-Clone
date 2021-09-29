import React from 'react'
import { Switch ,Route} from 'react-router-dom'
import { HomePage } from '../Pages/HomePage'
import { Signup } from '../Components/Signup/Signup'
export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
               <HomePage/>
            </Route>
            <Route exact path='/signup'>
                <Signup/>
            </Route>
        </Switch>
    )
}

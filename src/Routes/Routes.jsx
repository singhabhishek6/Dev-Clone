import React from 'react'
import { Switch ,Route} from 'react-router-dom'
import { Navbar } from '../Components/Navbar/Navbar'
import { Signup } from '../Components/Signup/Signup'
export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Navbar/>
            </Route>

            <Route path='/signup'>
                <Signup/>
            </Route>
           
        </Switch>
    )
}

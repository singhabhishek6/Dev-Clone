import React from 'react'
import { Switch ,Route} from 'react-router-dom'
import { Navbar } from '../Components/Navbar/Navbar'
import { Signup } from '../Components/Signup/Signup'
export const Routes = () => {
    return (
        <Switch>
            <Route>
                <Navbar/>
            </Route>
            <Route exact path='/signup'>
                <Signup/>
            </Route>
        </Switch>
    )
}

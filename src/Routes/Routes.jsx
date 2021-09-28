import React from 'react'
import { Switch ,Route} from 'react-router-dom'
import { Navbar } from '../Components/Navbar/Navbar'

export const Routes = () => {
    return (
        <Switch>
            <Route>
                <Navbar/>
            </Route>
        </Switch>
    )
}

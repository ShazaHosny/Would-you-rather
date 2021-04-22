import React from 'react'
import { NavLink} from 'react-router-dom'
import '../css/NavigationBar.css'


class NavigationBar extends React.Component{
    render(){
        return(
            <div className='topnav'>

                        <NavLink  to= '/' > Home </NavLink>
                        <NavLink to ='/LeaderBoard'>LeaderBoard</NavLink>
                        <NavLink to ='/New'>New Question</NavLink>
                        <NavLink to='/Logout'>Logout </NavLink>

            </div>
        )
    }
}
export default NavigationBar;


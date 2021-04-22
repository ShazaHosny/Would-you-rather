import React, { Fragment } from 'react'
import {handleInitialData} from '../actions/shared'
import {connect} from 'react-redux'
import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom'
import Login from './Login'
import NavigationBar from './NavigationBar'
import Logout from  './Logout';
import Home from './Home'
import QuestionDetails from './QuestionDetails'
import LeaderBoard from './LeaderBoard'
import New from './New'

class App extends React.Component{

    componentDidMount() {
        this.props.dispatch(handleInitialData())
      }
  render(){
    const {authedUser} = this.props;

    return(
      <Router>
         <Fragment>
      <div>
        {
          authedUser === null ?(
            <Route   path= '/' component={Login}  />
          ):(
              <Fragment>
                 <NavigationBar/>
                    <Switch>
                        <Route path ='/Logout' component={Logout}/>
                        <Route  exact path ='/'  component ={Home}/>
                        <Route path ='/questions/:id' component={QuestionDetails}/>
                        <Route path ='/LeaderBoard' component={LeaderBoard}/>
                        <Route path='/New' component={New}/>

                    </Switch>
                  
              </Fragment>
          )
        }
      </div>
      </Fragment>
      </Router>
    );
  }
}
function mapStateToProps ({authedUser}){
 //authedUser =null;
  return {authedUser}
}
export default connect (mapStateToProps)(App);

import React from "react";
import { ClearAuthedUser } from "../actions/authedUser";
import { Redirect } from "react-router-dom";
import {connect} from 'react-redux'

class Logout extends React.Component{
  
  componentDidMount() {
      this.props.dispatch(ClearAuthedUser())
    }
   
  render(){
        return <Redirect to ='/' /> ;
    }
}
export default connect()(Logout);


  
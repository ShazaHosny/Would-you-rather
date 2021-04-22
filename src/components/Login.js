import React from 'react'
import {connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';

class Login extends React.Component {
    
  state = {
    id:'',
  };

  handleUsers = (e) => {
    e.preventDefault();
    this.setState({id: e.target.value});
  }; 

  handleSubmit = (e) => {
    e.preventDefault();
    const { id } = this.state;
    if (id) {
      this.props.LoggedIn(id);
    } 
  }
  render() {
      const {Names} = this.props
      console.log(Names)
   
    return ( 
      <div>
      <div>
        <div>Welcom to the Would Rather App</div>
            <div>Please select user </div>
            

            <select onChange={this.handleUsers}>
            <option>Select User</option>
                {Object.keys(Names).map((c)=>(
                  <option key={c} value={Names[c].id}>
                        {Names[c].name}
                    </option> 
                    
                ))}
            
            </select>
            <br/>
        <button onClick={this.handleSubmit}>Submit</button>
        </div>           
    </div>
     
    );
  }
}

function mapStateToProps( {users} ) {
  return{
   Names:users
  }
}
function mapDispatchToProps(dispatch) {
  return {
    LoggedIn: (id) => {
      dispatch(setAuthedUser(id));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);



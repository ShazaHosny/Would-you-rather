import React from 'react'
import { connect } from "react-redux";

class LeaderBoard extends React.Component{
    render(){
        console.log(this.props.sortedUsers)
        console.log(this.props.users)

        const{sortedUsers,users} = this.props

        return(
            <div>
                <ul>
                    {
                       sortedUsers.map((a)=>(
                            <li key={a}>
                                <div>
                                    { <img 
                                        alt='image'
                                        src={users[a].avatarURL}
                                        height='30'
                                        width='30'
                                         />}
                                         {users[a].name}
                                         <br/>
                                         Answered Questoion :
                                         {Object.keys(users[a].answers).length}
                                         <br/>
                                         Created Question :
                                         {users[a].questions.length }
                                         <br/>
                                         Score :
                                         {Object.keys(users[a].answers).length+users[a].questions.length}
                                </div>
                            </li>

                        ))
      
                    }
                   
                </ul>
            </div>
        )
    }
}

function mapStateToProps({users}) {

    const sortedUsers = Object.keys(users).sort((a, b) =>{
      const  ScoreA= (Object.keys(users[a].answers).length + users[a].questions.length ) 
        const ScoreB= (Object.keys(users[b].answers).length + users[b].questions.length )
        return ScoreB - ScoreA
    })

  
    return {
     sortedUsers,
     users,
    
    }    
}

export default connect (mapStateToProps)(LeaderBoard);
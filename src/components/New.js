import React from 'react'
import {connect} from 'react-redux'
import {handleSaveQuestionToUser} from '../actions/questions'

class New extends React.Component{
    state ={
        optionOne: '',
        optionTwo: ''
    }
    handleSubmitOptionOne=(e)=>{
        e.preventDefault();
        this.setState({optionOne: e.target.value})

    }
    handleSubmitOptionTwo=(e)=>{
        e.preventDefault();
        this.setState({optionOne: e.target.value})

    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const {optionOne,optionTwo}=this.state;
        this.props.handleSaveQuestionToUser(optionOne,optionTwo);
        this.setState({optionOne: '', optionTwo:''})
    }

    render(){
        return(
            <div>
                <div>Create New Question</div>
                <div>Complete the Question</div>
                <div>Would You Rather ...</div>
                <input
                type='text'
                placeholder='Enter Option One Text '
                onChange={this.handleSubmitOptionOne}
                />
                <div>OR</div>
                <input
                type='text'
                placeholder='Enter Option Two Text '
                onChange={this.handleSubmitOptionTwo}
                />
                <br/>
                <button onClick={this.handleSubmit}>Submit</button>
                
              
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleSaveQuestionToUser: (optionOne,optionTwo) => {dispatch(handleSaveQuestionToUser(optionOne,optionTwo))},
    }
  }
export default connect(null,mapDispatchToProps)(New) ;
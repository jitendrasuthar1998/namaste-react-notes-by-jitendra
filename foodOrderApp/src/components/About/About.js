import React, {Component} from 'react'
import UserCard from '../User/UserCard'
import UserClass from '../User/UserClass'
import UserContext from '../../utils/UserContext';

// const About = () => {
//   return (
//     <div>
//         <h1>About</h1>
//         <p>This is About Food Restaurant Application.</p>

//         <UserCard name={"Jitendra Suthar (function)"}/>
//         <UserClass name={"Kavita Suthar (class)"}/>
//     </div>
//   )
// }

class About extends Component {
  
  constructor(props){
    super(props);
    
  }

  componentDidMount(){
    
  }

  render(){
  
    return (
      <div>
          <h1>About</h1>
          <p>This is About Food Restaurant Application.</p>
  
          <UserCard name={"Jitendra Suthar (function)"}/>
          <UserClass name={"Lalita Suthar (class)"}/>
          <div>
            LoggedIn User 
            <UserContext.Consumer>
              {
                (data) => <h1>{data.loggedInUser}</h1> 
              }
            </UserContext.Consumer>
          </div>
      </div>)
  }
} 

export default About
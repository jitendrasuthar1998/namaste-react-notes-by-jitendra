import React from "react";
import userData from "../../utils/userData.json";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.handleCount = this.handleCount.bind(this);

    this.state = {
      userInfo: userData,
    };
  }

  componentDidMount() {
    // this.getUserData();
    this.timer = setInterval(()=>{
      console.log("set interval");
    },1000)
  }

  componentDidUpdate() {
    // console.log("User class component updated");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    // console.log("User class component unmounted");
  }

  handleCount() {
    this.setState({ count: this.state.count + 1 });
  }

  async getUserData() {
    const data = await fetch("https://api.github.com/users/jitendrasuthar1998");
    const json = await data.json();
    this.setState({ userInfo: json });
    console.log(json);
  }

  render() {
    const { name, location, login, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <button onClick={() => this.handleCount()}>Count Increase</button>
        <h3>Location : {location}</h3>
        <h4>Contact : {login}@gmail.com </h4>
        <img src={avatar_url} width={100} height={100} />
      </div>
    );
  }
}

export default UserClass;

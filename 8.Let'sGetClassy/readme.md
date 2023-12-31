#### Why do we write "super(props)" in class based components?

#### What do you mean by loading class based components?

Loading class based components means creating an instance of that class.

#### How can you access the props in a class based component?

I can access the props in a class based component inside a constructor.

Whenever i create an instance of a class, that time constructor will be called.

The constructor is the best place to access the props, and to create the state variables.

#### How can you define state variables in a class based component?

I can define state variables in a class based component inside this.state.

"this.state" is like a big object which contains all the state variables.

#### How can you update state variables in a class based component?

I can update state variables in a class based component using this.setState() method.

#### What are the lifecycle methods of a class based component?

Whenever a class based component loads, the constructor is called. and then render is called.

```javascript
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const { name } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h2>Count : {count}</h2>
        <button onClick={() => this.handleCount()}>Count Increase</button>
        <h3>Location : Jodhpur</h3>
        <h4>Contact : kavita123@gmail.com </h4>
      </div>
    );
  }
}

export default UserClass;
```

```javascript
import UserClass from "../User/UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is About Food Restaurant Application.</p>
      <UserClass name={"Kavita Suthar (class)"} />
    </div>
  );
};

export default About;
```

Here in above code example, I have created a parent component - About functional component.
In that About component, i have imported the UserClass a class based component.
And passing "name" props to the UserClass component.

I can access that "name" props in UserClass inside UserClass constructor and render method.

In UserClass component, i have declared the "count" state variable inside this.state, which is like a big object.

And when user clicks on Increse count button, that time i am incrementing the count by doing "this.setState({count: this.state.count + 1})".

If i have to declare any other state variables, that time i can declare them inside this.state object.

If i have to update multiple state variable, that time i can update all of them in just one "this.setState()" method.

#### What will be the output of this code?

```javascript
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    console.log("Child constructor");
  }

  componentDidMount() {
    console.log("Child componentDidMount");
  }

  render() {
    console.log("Child Render");
    return (
      <div className="user-card">
        <h2>Name : Kavita</h2>
        <h3>Location : Jodhpur</h3>
        <h4>Contact : kavita123@gmail.com </h4>
      </div>
    );
  }
}

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <p>This is About Food Restaurant Application.</p>

        <UserCard name={"Jitendra Suthar (function)"} />
        <UserClass name={"Kavita Suthar (class)"} />
      </div>
    );
  }
}

export default About;
```

The output of above code will be

```javascript
Parent Constructor
Parent Render
Child Constructor
Child Render
Child ComponetDidMount
Parent ComponentDidMount
```

#### Explain how that output come of above code?

Whenever a class based component gets mounted, that time constructor method get invoked. so, whatever state variables and statements present in that constructor will be executed.

After the constructor method is executed, render method will be executed.

In render method, whatever JSX is written, that will be rendered on the screen.

When the render method is executed completely, componentDidMount method will be executed.

So, the flow of the class based component lifecycle is ==

constructor() => render() => componentDidMount()

#### What is the use of componentDidMount()?

componentDidMount() is used to call apis.

#### Why we call APIs in componentDidMount()?

Because, it is a good practice to show some ui to the user, and then call apis, and when some data come from api, that time fill that data to the user interface.

#### What will be the output of the below code?

```javascript
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    console.log(this.props.name, "constructor");
  }

  componentDidMount() {
    console.log(this.props.name, "componentDidMount");
  }

  render() {
    const { name } = this.props;
    const { count } = this.state;
    console.log(this.props.name, "render");
    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h2>Count : {count}</h2>
        <button onClick={() => this.handleCount()}>Count Increase</button>
        <h3>Location : Jodhpur</h3>
        <h4>Contact : kavita123@gmail.com </h4>
      </div>
    );
  }
}

export default UserClass;

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <p>This is About Food Restaurant Application.</p>
        <UserClass name={"John Doe (class)"} />
        <UserClass name={"Elon (class)"} />
      </div>
    );
  }
}
```

Output of above code will be like this

```javascript
Parent constructor
Parent Render
John Doe constructor
John Doe render
Elon constructor
Elon render
John Doe componentDidMount
Elon componentDidMount
Parent componentDidMount
```

Output of above code comes like this because, React batches up render method of all children components, and executes them, one by one.

After executing render method of all children components, it start executing componentDidMount method of all children components.

It will optmisze the performance of the application.

#### React Lifecycle

1. Mounting

- Constructor (with dummy data)
- Render
  - HTML (with dummy data)
- componentDidMount
  - API call
  - this.setState -> state variable is updated

2. Update

- render (API data)
- HTML (new API data)
- componentDidUpdate

#### Why you need to clear the sideeffect?

```javascript
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.handleCount = this.handleCount.bind(this);

    this.state = {
      userInfo: {
        name: "Dummy User",
        avatar_url: "",
        login: "",
        location: "India",
      },
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("set interval");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("User class component updated");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("User class component unmounted");
  }

  render() {
    const { name, location, login, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : {login}@gmail.com </h4>
        <img src={avatar_url} width={100} height={100} />
      </div>
    );
  }
}

export default UserClass;
```

In above UserClass component, i have written a setInterval() inside componentDidMount(), it will be exectuted when the componentDidMount() method is called.

The console.log() method is called after every second, and it will print "set interval" in console.

Whenever UserClass component loads on screen, that time first, its constructor will be called, and then render method will be called, and after that componentDidMount() method will be called.

Inside the componentDidMount() method, the console.log() statement will be executed and "set interval" will be printed on screen after every seconds.

The statement "set interval" will keep printing on the screen, if any other component get loaded on the screen.

Because, i haven't clear the timeout.

So, to stop printing that "set interval" statement on console after every second, i have to clear that interval.

I can clear that interval inside the componentWillUnmount() method.

If i have set

You need to take care of every single line that you write in your code.

#### What is the use of componentWillUnmount?

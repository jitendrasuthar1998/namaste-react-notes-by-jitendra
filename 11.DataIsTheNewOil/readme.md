#### Higher-order components

Higher-order components accept a component and return another component with some enhancements.

#### Lifting the state app

An important part of a React application is managing its data.

The UI is very static. UI doesn't have logic of its own.

React applications have two layers.

1. UI layer
2. Data layer

This UI layer is powered by the data layer.

The data layer consists of whole application data like application state, props, local variables, etc.

The UI layer mostly consists of JSX.

The data layer consists of all javascript code.

#### Controlled Components and Uncontrolled Components

When a child component has its own state, it is an uncontrolled component.

And when a child component does not have its own state and is controlled by its parent component, it is called a controlled component.

#### Lifting the state up

In this concept, the state of the child component is controlled inside the parent component.

#### Prop Drilling

Passing props from the parent component to the child component, which is multiple levels down in the hierarchy, is called the Prop Drilling.

#### React Context

You can use context when you need to pass the same data to multiple places or to multiple components.

#### How can you setup Context in your React application?

React gives us a hook, createContext(), by which I can create a context.

```javascript
import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
});

export default UserContext;
```

In the above code, I am creating a context. In context, I am passing the data that I need to use inside multiple components as key and value pairs.

#### How can you access the context data?

In functional components, I can access the context data by using the useContext() hook.

In the useContext() hook, I need to pass the context that I have created inside the UserContext.js file.

```javascript
import UserContext from "../../utils/UserContext";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div>
      <p>{loggedInUser}</p>
    </div>
  );
};

export default Header;
```

In the above code, I am accessing the "loggedInUser" from the context through the useContext() hook.
In the useContext() hook, I am passing the UserContext that I have created inside the UserContext.js file.

#### How can you access the context data inside class-based components?

```javascript
import React, { Component } from "react";
import UserContext from "../../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This is about food restaurant applications. </p>

        <div>
          Logged in user:=
          <UserContext.Consumer>
            {(data) => <h1>{data.loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default About;
```

In the above code, About is a class-based React component. and in that class-based component, I can access the context data through the <UserContext.Consumer> component.

You can wrap some of the components or the whole application inside the context provider.

#### What is the difference between context and redux?

Context and Redux are used to manage data inside the React application.

Context is provided by React itself.

And Redux is a separate library that we have to install into our application.

We can use the context for small and medium-sized applications.

Redux is basically used to manage the data of a large application.

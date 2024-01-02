#### Higher order components

Higher order components accept a Component, and return another Component with some enhancements.

#### Lifting the state app

Important part of react application is to manage its data.

UI is very static. UI doesn't have logic of its own.

React Application has two layers.

1. UI layer
2. Data layer

This UI layer is powered by the data layer.

Data layer consists of whole application data like application state, props, local variables etc.

UI layer is mostly consists of JSX.

Data layer consists of all javascript code.

#### Controlled Component and Uncontrolled Component

When a children has its own state, that time it is uncontrolled component.

And when a children does not have its own state, and it is controlled by its parent component, that time it is called controlled component.

#### Lifting the state up

In this concept, the state of children component is controlled inside the parent component.

#### Prop drilling

Passing props from parent component to the child component which is multiple levels down in the hierarchy, called the Prop Drilling.

#### React Context

You can use context when you need to pass same data at multiple places or in multiple components.

#### How you can setup Context in your React Application?

React gives us a hook, createContext() by which i can create a context.

```javascript
import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
});

export default UserContext;
```

In above code, i am creating a context. In context, i am passing the data which i need to use inside multiple component as key and value pair.

#### How you can access the context data?

In functional components, i can access the context data by useContext() hook.

In useContext() hook, i need to pass the context which i have created inside UserContext.js file.

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

In above code, i am accessing the "loggedInUser" from the context through useContext() hook.
In useContext() hook, i am passing the UserContext which i have created inside UserContext.js file.


#### How you can access the context data inside class based components?

```javascript
import React, {Component} from 'react'
import UserContext from '../../utils/UserContext';

class About extends Component {
  
  constructor(props){
    super(props);
  }

  render(){
  
    return (
      <div>
          <h1>About</h1>
          <p>This is About Food Restaurant Application.</p>
  
          <div>
            Logged in user := 
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
```

In above code, About is a class based React component. and in that class based component, i can access the context data through <UserContext.Consumer> component.

You can wrap some of the components or whole application inside Context provider.

#### What is the difference between Context and Redux?

Context and Redux are used to manage data inside the React application.

Context is provided by the React itself.

And Redux is a separate library that we have to install into our application.

We can use the Context for small and mid size application.

Redux is basically used to manage data of a large application.


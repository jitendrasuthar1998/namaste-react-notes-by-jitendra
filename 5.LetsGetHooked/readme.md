#### Why to use React?

You can build website user interface using normal html, css and javascript. Then why to use React?

React can do everything that you can do with normal html, css and javascript.

The beauty of using a framework or library is that it makes developers life easy.
It makes you write less code and do more things on your website or in your application. This is a major job of library.

React makes your coding experience very fast and also optimize something very fast that happen onto a webpage.

Don't keep any hard coded data in your components file.

Keep hard coded data in file like constants file in utiliy folder.


#### What are two ways of export?

The first export or import is default export or import.

By default a file can export only single thing, and that is called default export.

But when you want to export multiple things from one file, that time you can do is by named export.
 
#### How you can import default export or named export in a file?

You can import the default export like this.

#### Default export and import

```javascript
export default Component;
```

```javascript
import Component from 'path';
```

#### Names export and import

```javascript
export const Component;
```

```javascript
import {Component} from "path";
```


In React, we have two layers.

1. Data Layer
2. UI Layer

On screen, React will show the things which comes through data layer.

When we say React is fast, it means that React is fast and efficient in DOM manipulation.

Suppose, you have to keep ui layer and data layer consistent to each other, in this case, React comes into picture.

In React, whenever data layer changes, UI layer will change also.

# React Hooks
(Normal JS utility functions)

A hook is a normal javascript function which is given to us by React.
That function comes with superpower, some logic written behind the scenes.

- useState() => super power full state variable in react
- useEffect()

#### Why useState() is called a state variable?

Because useState() variable mantains the state of your single React functional component.

#### How you can create a state variable?

```javascript
const [restaurantsList, setRestaurantList] = useState([]);
```

#### Why you write useState() arguments like this?

Because it is a preferred convention for writing useState() arguments.

useState() returns an array with two arguments.
1. default variable
2. a setter function to modify the state variable


You can create a normal variable like this.

```javascript
let list = [];
list.push();
```

But updaing a variable like we did above will not show any change in ui.

So, to update ui when a variable changes, we have to use state variable.

#### Whenever a state variable updates, React re-renders the component.

React is good at dom manipulation.

## Virtual DOM

Virtual DOM is not an actual dom.

Virtual DOM is a representation of an actual DOM.

Virtual DOM is nothing but a javascript object.

Actual DOM is the collection of all tags, parent tags, children tags.

#### Diff Algorithm

When any event is fired, that time React creates a new virtual DOM.
And then React compares latest virtual DOM with previous virtual DOM.

Diff Algorithm finds out difference between two Virtual DOM.
And it updates the virtual DOM.

React Fiber is algorithm to find out the difference between two Virtual DOM and update the actual DOM.

When setRestaurantList() function is called, React will find out the different between latest and previous virtual dom and upates the actual dom.




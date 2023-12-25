JSX is a javascript syntax by which creating React elements is easier.

#### JSX is not part of React.

#### There is a fundamental difference between JSX and React.

React can be written without JSX.

We can write a web application without using JSX.

But JSX makes us developers' lives easier.

In the old days, we used to build a web application first we built the structure of the web application in html file, and wrote website logic inside a javascript file.

Libraries like React try to merge these things so that we can do both things in one file.

JSX is a kind of convention where we can merge html and javascript together.

JSX is HTML-like syntax.


#### We as Developers write code for machines or humans?

We write code for both machines and humans.

We write code first for humans and then for machines.

Because the code which you write is read by a lot of developers.
So, whenever you write code, think that you are writing code for humans, or your developer's friends.

He should be able to understand your code.

A good library is a library that makes developers' lives easy.

Any piece of javascript code is valid, and that javascript engine can understand it without any help from other libraries.

#### Can the javascript engine understand this piece of code?

```javascript
const jsxHeading = <h1 id="heading">Hello By Jitendra</h1>
```

No, the JavaScript engine can only understand ECMAScript.

JavaScript engine can understand this piece of code.

Then how "Hello By Jitendra" is getting printed on the screen?

Parcel is doing the job behind the scenes.

Even before the above code goes to the browser or javascript engine, it is transpired before it goes to the JavaScript engine and the JavaScript engine receives code that the browser can understand.

Transpiling is done by Parcel.

Parcel doesn't trasnpilation this code by itself.

The parcel takes the help of Babel to transpile the JSX code into React Element which can be understood by the JavaScript engine.


Babel converts JSX code into React.createElement

When you have to give attributes to JSX, that time we have to write those attributes in camel case.

* className
* htmlFor
* tabIndex

#### What is React Component?

There are two types of React components.
1. Class based components - OLD way
2. Functional components - New way

what is a React functional component?

React functional components is just a javascript function.


#### what is Cross site scripting attack?

It is a way of running some malicious javascript code into your browser.

In React JSX, we can run any javascript code in functional components.

While executing that javascript code inside a functional component, React or JSX sanitize that code and prevent malicious code from being executed.

#### What makes web app code readable?

Our code is readable because we are writing code using JSX.

And JSX is not React.

#### Be curious of what you are writing your code, and why you are writing like that in your code.

#### You should understand every single thing that you write in your code.
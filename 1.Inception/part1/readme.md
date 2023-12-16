### Write a string "Hello World" string to the webpage.

We can write "Hello World" in three ways.

1. Using static HTML 

```
<div id="root">
<h1>Hello World</h1>
</div>
```

2. Using JavaScript

Suppose you have a DIV with ID "root". Using JavaScript, you can write "Hello World" in that DIV by doing this - 

```
<script>
const heading = document.createElement("h1");
heading.innerHTML = "Hello World from JavaScript"; 
document.getElementById("root").appendChild(heading);
</script>

```

3. Using React

To write "Hello World" in our webpage, we first have to insert React into our HTML document.

### How we can insert React into our HTML document?

To inserting React into our HTML document, we have to add these two files into our HTML document from their CDN using ```<script>``` tag.

```
 <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js">
 </script>

 <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js">
 </script>
```

Insert both script tag just above the ```</body>``` tag.

### What will happen when you insert React using CDN links?

When you insert React using CDN links, that time your browser or webpage or HTML document become able to understand the React code.

What does this JavaScript file contains https://unpkg.com/react@18/umd/react.development.js?

This file contains React code.

At the end, React is a JavaScript library.

When we insert React using CDN in our project, that time we can access functions, method that has been written in ReactJS file.

That functions, method are JavaScript code which is written by some engineers working at Facebook.

### Why we have injected two files related to React using CDN?

The first file is the core of React.

The second file is useful for DOM operation, which we need to modify DOM (document object model).


### Why there are two files for injecting react into our project?

Because, React doesn't only work in web browser. We can also build the user interface of mobile application using React Native.

The second file works like a bridge for React to connect with the DOM.

You have inserted React into your project using CDN. How you can write "Hello World" using React?

First, we need to create h1 heading using React.

#### How you can create a h1 heading using React?

React gives us a method ```createElement()``` which accepts three parameters.

* First parameter is the type of element which you want to create.

* Second parameter is the object

* Third parameter is the content which you want to put in that new element.

```
<script>
const heading = React.createElement("h1",{},"Hello World from React");
</script>
```

We have created a heading element using ```React.createElement("h1",{},"Hello World from React")```.

Now, we need to add that heading into our DIV with ID "root".

For that, we need to tell React that where is the root where React can render stuff.

I want to render a heading element in DIV with ID "root".

For that, I have to create a root inside React.

React wants a root, where it can do all DOM manipulation.

Creating a root and rendering something inside it is a job of React DOM.

Create root using React DOM

```
const root = ReactDOM.createRoot(document.getElementById("root"));

```

After creating root, we have to render our heading element.

```
root.render(heading);
```
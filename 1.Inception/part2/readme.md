#### Putting all react code inside script code is not a good way.

So, create a new App.js file and then put react code into that file.

And then link that new App.js file to your HTML document.

```
<script src="App.js"></script>
```

Why such libraries like React, Angular or Vue has been created?

When React was build, it was built with a philosophy that we want to manipulate DOM using JavaScript.

What is the costly operation inside a browser or a webpage?

The most costly operation in the browser or a webpage is when you do something, or when our webpage is interactive.
So, the most important operation or hit the browser takes is when DOM nodes needs to be manipulated.

Suppose, there is a webpage, and you click a button, something show up on the page, or something hides into a webpage.

What is happening that time?

The DOM tree is getting changed.

That is the most costly thing. Putting some nodes inside the DOM and removing some nodes from the DOM. This is the most costly operation. And in all libraries, framework tries to optimise this.

React also come with a philosophy that whatever you need to do on a webpage, do it using JavaScript.
That's why React gives you helper functions to make things work in a very performant way.

What does that empty curly braces means in below code?

```
const heading = React.createElement("h1",{},"Hello World From React!");
```

These empty curly braces are used to give the attribute to the HTML element.

Suppose, I want to give ID attribute to h1.

I can do that in this way

```
const heading = React.createElement("h1",{id:"first"},"Hello World From React");
```

#### What does that React.createElement() method returns?

The React.createElement() function returns a JavaScript object which has key value pairs.

Some key value pairs returned by
`React.createElement("h1",{id:"first"},"Hello World From React") `
are

```
{
"type": "h1",
"key": null,
"ref": null,
"props": {
    "id": "first",
    "children": "Hello World From React"
    },
"_owner": null,
"_store": {}
}
```

const heading = React.createElement("h1",{id:"first"},"Hello World From React");

So, here, heading is a React Element.

React element, nothing but just a normal JavaScript object.

Heading contains a key "props" which contains the values which set for an HTML element, like ID or class, and the content inside it.

#### What is the function of root.render(heading)?

The function of root.render is to take this heading object, create that h1 tag which the browser understand and put that down inside root.

Suppose, you have to create this HTML element like this

```
<div id="parent">
    <div id="child">
        <h1>I am an heading tag.</h1>
    </div>
</div>
```

How you can build above HTML element using React?

```
const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        React.createElement(
            "h1",
            {},
            "I am an heading tag.")
    )
);
```

This is how you create nested HTML structure inside your React application.

Suppose, you have to add a sibling to h1 tag in above HTML structure. How you can do that using React.createElement()?

To add siblings as children inside a React element, I can pass them as an array of React Element.

```
const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [
        React.createElement("h1",{}, "I am a first level heading tag."),
        React.createElement("h2",{},"I am a second level heading tag.")
        ]
    )
);
```

Suppose, you have to create more complex HTML structure like this

```
<div id="parent">
    <div id="child1">
        <h1>I am a first level heading tag.</h1>
    </div>
    <div id="child2">
        <h2>I am a second level heading tag.</h1>
    </div>
</div>
```

How you can create above HTML structure using React.createElement()?

```
const parent = React.createElement(
    "div",
    {id:"parent"},
    [
    React.createElement(
    "div",
    {id:"child"},
    [
    React.createElement("h1",{}, "I am a first level heading tag."),
    React.createElement("h2",{},"I am a second level heading tag.")
    ]),
    React.createElement(
    "div",
    {id:"child"},
    [
    React.createElement("h1",{}, "I am a first level heading tag."),
    React.createElement("h2",{},"I am a second level heading tag.")])
    ]
);
```

// const heading1 = React.createElement("h1",{},"Hello World From React!");
import React from "react";
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
  "h1",
  { id: "first" },
  "Hello World From React"
);

// console.log("heading1 is == ", heading);
// root.render(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));


/* 
create this html structure using React.

<div id="parent">
  <div id="child">
    <h1>I am an heading tag.</h1>
  </div>
</div>

React code

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am an heading tag.")
  )
);

*/


/* 
Create this html structure using React.

<div id="parent">
  <div id="child">
    <h1>I am a first level heading tag.</h1>
    <h2>I am a second level heading tag.</h2>
  </div>
</div>


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
*/


/*
Create this html structure using React.
<div id="parent">
  <div id="child">
    <h1>I am a first level heading tag.</h1>
    <h2>I am a second level heading tag.</h2>
  </div>
  <div id="child">
    <h1>I am a first level heading tag.</h1>
    <h2>I am a second level heading tag.</h2>
  </div>
</div>

*/

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

// console.log("parent is == ", parent)

root.render(parent);
import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React By Jitendra"
);

// JSX (transpiled before it reaches to the JS engine)

// JSX => React.createElement => ReactElement => JS Object => HTML Element (rendered)

const jsxHeading = <h1 id="heading">Hello Jitendra</h1>;

// console.log(jsxHeading);

// React functional componet is a function that returns a React element.

const HeadingComponent = () => {
  return <h1 id="heading">Hello Jitendra from React Functional component</h1>;
};

const HeadingComponent1 = () => (
  <h1 className="heading">
    Hello Jitendra Suthar from second react component.
  </h1>
);

const HeadingComponent2 = () => (
  <h1 className="heading">Hello Jitendra Suthar from third react component.</h1>
);

// Component composition is when we compose two components in one component.

let number = 100;
let number1 = 123;

const JavaScriptInsideJsx = () => (
  <div id="javascript-code-inside-jsx">
    {number1}
    <div id="addition">{number + number1}</div>
  </div>
);

// We can call JavaScript functions inside React components.

const ParentHeadingComponent = () => (
  <div id="container">
    {HeadingComponent()}
    <HeadingComponent1 />
    <HeadingComponent2 />
    <JavaScriptInsideJsx />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ParentHeadingComponent />);

// const heading1 = React.createElement("h1",{},"Hello World From React!");

const heading = React.createElement("h1",{id:"first"},"Hello World From React");

console.log("heading1 is == ", heading)

const root = ReactDOM.createRoot(document.getElementById("react"));

root.render(heading);
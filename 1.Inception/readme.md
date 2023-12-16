Summary of First episode

1. Write a "Hello World" string in HTML document

We can write the "Hello world" string in an HTML document using three ways

- Using normal HTML syntax
- Using JavaScript
- Using react

2. How we can inject react into our HTML document?

Using CDN

3. How to create a React element?

We can create a React element using

```
React.createElement().
```

At the end of the day, the React element is just a JavaScript object.

4. What is responsible for creating root in React?

```
ReactDOM.createRoot()
```

is responsible for creating a root in React.

5. what does

```
root.render()
```

method do?

render method is super powerful. It helps us put that object or React element which we created earlier onto our HTML document or our webpage.

6. What are the parameters React.createElement() accepts?

React.createElement() accepts three arguments

<ol type="a">
<li>name of HTML element we want to create.</li>
<li>attribute of that HTML element in the form of object. Attribute can be id or class or any valid HTML attribute.</li>
<li>content of that HTML element.
<ul>
<li>
That content can be a simple string like this.

```
React.createElement("h1",{},"This is an heading.")
```

</li>

<li>
Or a React element

```
React.createElement("div",{},React.createElement("h1",{},"This is an heading."))
```

</li>

<li>
Or an array of React elements.

```
React.createElement("div",{},
[React.createElement("h1",{},"This is a first level heading."), React.createElement("h2",{},"This is a second level heading.")
])
```

</li>
</ul>
</li>
</ol>

7. If div with id "root" has any content, that time root.render() will replace its content from the content of React element which we pass to it.

8. React will only affect the part of a webpage where it is intended to be.

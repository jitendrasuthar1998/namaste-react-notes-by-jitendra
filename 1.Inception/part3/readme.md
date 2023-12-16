#### Does the order matters of these script tags to import React into our HTML document?

```
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js">
</script>

<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js">
</script>

<script src="App.js"></script>
```

Yes, the order matters.

If put script tags of React and React DOM after App.js, that time our browser will throw an error like "react is not defined".

#### Suppose, DIV with ID having some HTML element. What will happen when root.render(heading) executes?

If DIV with ID "root" having any HTML element, that time when root.render(heading) executes, and it will replace all HTML element present in that DIV with ID "root" by the HTML element which we pass in root.render().

#### Suppose, if there are multiple DIVs with having different IDs. Does root.render() will change or have any effect on those DIVs content?

No. root.render() can only replace content inside a particular DIV, which ID we give to it.


```
const root = ReactDOM.createRoot(document.getElementById("root"));
```

In above code, root.render() can only change content inside DIV which have ID "root".

So, it means we can insert our React into a very small part of the website. That small part can be a header, navigation, sidebar, or a small iframe.
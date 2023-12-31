#### Adding the Routes in our application

How can we create multiple URL routes?

How can we create nested routes?

How can we create different pages in our React application?

The basic nature of the useEffect() function is that it is called on each render of the component.

But we can modify this behaviour of the useEffect() function by adding an array of dependencies.

```javascript
useEffect(() => {
  console.log("useEffect called every time when compononent renders");
});
```

If we add an empty array of dependencies, at that time, useEffect() will be called only once or at the initial render of the component.

```javascript
useEffect(() => {
  console.log("useEffect will be called only once when the component renders");
}, []);
```

And if we put something inside the array of dependencies, at that time it will only be called when that dependency changes.

```javascript
useEffect(() => {
  console.log("useEffect will be every time when btnName changes");
}, [btnName]);
```

### Best practice while using the useState() hook

1. Don't use the useState() hook outside the React component.
2. Always use the useState() hook at the start of your React component.
3. Don't create state variables inside a loop or in any if condition.

#### Adding Routing to the Food Application

We can add routing to our food application using the react-router-dom library.

```javascript
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
```

#### Handling Error

We can show the user the error if the path is invalid by passing an error component to errorElement.

### Two types of routing

- Client Side Routing
- Server Side Routing

### Single-Page Application

In a single-page application, there is only one page, and page content changes by replacing one component with another.

#### How can you go to a different page or component, or how can you link one component to another in React?

I can link one component to another using the "Link" component provided by react-router-dom.

Under the hood, the link component is a wrapper around the anchor tag.

When we link one component to another using the Link component, our page doesn't reload.

#### How can you pass parameters in a URL?

I can pass a parameter in a URL like this:

```javascript
<Link key={res.info.id} to={"/restaurants/" + res.info.id}>
<RestaurantCardresdata={res.info}/>
</Link>
```

In the above example, I have wrapped each restaurant card inside a link component and given that link component the "to" attribute value of the path where I want to redirect the user.

In that "to" attribute value, I have attached "restaurant id," which I can access on that Restaurants Page.

When the user clicks on any of the restaurant cards, the restaurant menu will be shown to the user.

Those restaurant menus will be shown in the restaurant menu component.

When the user clicks on any of the restaurant cards, the restaurant menu component will be rendered on the screen.

As soon as that Restaurant Menu component renders on the screen, I access the restaurant ID from the URL using the "useParams()" hook provided by "react-router-dom" and call the API to get the menu list of that particular restaurant.

Restaurant Card => Restaurant Menu => Access the restaurant id => Call the restaurant menu api => Show the restaurant menu to the user.

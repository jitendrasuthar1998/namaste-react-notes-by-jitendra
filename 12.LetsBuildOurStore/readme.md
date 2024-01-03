#### Cart Feature


##### Implement a feature to add food items from the RestaurantMenu component to the cart.


#### Redux


Redux Store is a kind of big Javascript object.


Any component can access the Redux store. It was kept in a separate place.


Slices are small portions of the Redux store.


#### Why do we need to create slices in the Redux store?


To keep data separated, we make logical partitions, and these logical partitions are known as "slices.".


There can be cart slices, user slices, and theme slices. There can be different types of slices.


This cart slice can hold all data related to the cart.


#### Can you directly modify the data inside the Redux store?


No. We can't directly modify the data inside the Redux store.


To modify the data in the Redux store, we first have to dispatch an action.


Then that action will call a function, and that function will modify the data inside the cart slice.


The function that modifies the data inside the cart slice is called "Reducer.".


Dispatch an action => Call the reducer function => Modify the data inside the slice.


When you click on the Add to Cart button, it dispatches an action that calls the Reducer function, which modifies the Cart slice of the Redux store.


##### How can you read data from the Redux store?


I can read data by using a selector.


When we read data using a selector, this phenomenon is known as subscribing.


Whenever data changes in the Cart slice of the Redux store, the component wherever data is read from the Cart slice will be re-rendered.


#### How to Setup Redux in a React Application?


#### Redux Toolkit


- Install the Redux Toolkit (@reduxjs/toolkit) and React-Redux (react-redux).
- Build our store.
- Connect our store to our app.
- Create Slice (cartSlice)
- Dispatch an action
- Read Redux store data using Selector


#### What is the difference between calling functions on any onClick event?


```javascript
onClick={handleClick}
onClick={handleClick(item)}
onClick={()=> handleClick(item)}
```


In the above example,
In the second line, we are directly calling the handleClick function.
In the third line, we are passing a callback function.


#### Some things to keep in mind when you subscribe to the Redux store

```javascript
const store = useSelector((store) => store);


const cartItems = store.cart.items;
```


Don't subscribe to the whole portion of the Redux store.


If you subscribe to the whole portion of the Redux store, at that time, if data inside any other slice is being changed, the Cart component will get re-rendered.


This is not a good approach while subscribing to the Redux store, and it will result in some performance loss.


If you subscribe to the whole redux store, at that time all the components will get re-rendered where you have subscribed to the redux store, irrespective of their domain or the data they access, show, display, or represent.

useSelector means you are selecting a small portion of the Redux store or subscribing to the small portion of the Redux store.

Instead, subscribe to the small portion of the Redux store.

```javascript
const cartItems = useSelector((store) => store.cart.items);
```

Subscribe to the small portion of the Redux store because it will increase the performance of your application.

When you subscribe to the small portion of redux store, that time Cart component only gets update when the data inside cartSlice get changed. 


#### Can you mutate state inside redux?

In older version, we can't diretly mutate state.

But in new version, we can directly mutate state.

Redux behind the scene use Immer.

Immer is a tiny package that allows you to work with immutable state in a more convenient way.


#### How you can create an immutable object?

#### How you can create a deep clone of a nested object?


#### Read abou RTK query



#### How do you think about building a food order application like Swiggy?

When you are asked to build an application, the first thing you should do as a senior engineer is plan it.

If your planning is good, then writing code is very easy.

So, the first step in building a food order application is planning.

The first step in planning is building the user interface of the application to see what it will look like.

Here I am building a food order application like Swiggy.

So, in the first step of creating a food order application, I will create a mockup of the user interface.

The user interface will contain these components.

#### Header
- Logo
Nav Items

#### Body
- Search
Restaurant Container
* Restaurant card

#### Footer
- Copyright
- Links
- Address
- Contact

#### What are props?

Props are normal arguments to the function.

When you have to dynamically pass data to a component, you pass it as a prop.

#### What is component composition?

In React, we can wrap many components into one component, and that is called the component composition.

#### Config-driven UI

Websites like Swiggy, Amazon, Zomato, and Flipkart show different components or user interfaces to the users of different cities.

Like on the Swiggy website, to some city users, carousel, discount, and banner components will be shown, but they may not be shown to other city users or may look different in other cities.

So, this change in user interface based on user location is done by serving data as per the location of the user, and this method is called configuration-driven UI.

A frontend application is made of a user interface layer and a data layer.

Whenever you loop over array items, at that time you must give a key to each element.

#### Why do you need to give a key to each element?

When there are components at the same level, these components need to have a unique key ID; they should be uniquely represented.

Because suppose you have a restaurant container, and that restaurant container has many restaurant cards at the same level.

If there are four restaurant cards at the same level and a new restaurant comes up in the first place, what will happen at that time?

React will have to insert a new restaurant card component in the first place.

If you don't give a key or unique ID to each restaurant card, React will re-render all the restaurant cards.
Because it will not be able to know which restaurant card is new. React can't identify this restaurant uniquely.

React will clean the whole container and render all the restaurant cards.

But if we give each of them a unique ID and if a new restaurant comes along,  React will know which new restaurant came, so it will just render one restaurant card.

In the absence of a unique id for each restaurant card or any component that you loop over using a map, it may cause multiple render issues and slow down the performance of your application.

So, it is best practice to give a unique ID to each component whenever you loop over an array of items.

Don't use index as the key to your React component when you loop over an array of elements.

React itself says that you shouldn't use an index as a key.

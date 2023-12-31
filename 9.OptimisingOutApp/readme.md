#### Single responsibility principle

Each of the components inside our application should have a single responsibility.

Suppose, if you have many functions in your code, that time each function should perform its unique responsibility.

That's why we write different functions for different things.

Like in our food order application, the logic for searching and filtering the restaurants is written inside two different functions.

The code for showing the user interface of About, Contact is also written in different functional components.

If we have a RestaurantMenu component, that time the job of RestaurantMenu should be to display the Restaurant Menu on screen.

Modularity means you breakdown your code into small small modules. So, that your code becomes more maintainable, easier to test.

And we can write test case for that single module, and catch the bug.

When you break down your code into smaller modules, pieces, components, different types of utility functions, that time you can test each small module, piece of code, component separately.

When you write code in modular fashion, and follow single responsibility principle, that time you get these features.

* Reusable
* Maintanable
* Testable


#### What is an hook?

A hook is like a helper utility function.

A hook is just a function that returns something.

A hook accepts some parameters, and return some output.

We can put a single thing into the hook like calling api and getting some data or getting the resId from url or check whether user is online or not or any other things.

#### How can you optimise your application performance?

The bundler budles all the code of application into a single javascript file, and because of this, that javascript file size get too big, in MBs.

Your JS file increase by how many components it holds.

Whenever you are developing large scale application that time you must have to break down your application javascript file into smaller js files, so that your application performance becomes better.

So, How can we optimize your application by breaking down one javascript file into smaller javascript file?

This methodology is called == 
1. Code splitting
2. Chunking
3. Dynamic Bundling
4. Lazy loading

Break down app into a smaller chunks.

If you are building a large scale application, that time you must split your javascript code into smaller smaller chunks, and load those javascript files only when you need them.

You can do by using lazy() method and <Suspense/> component provided by React.


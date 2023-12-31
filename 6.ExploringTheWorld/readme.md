### Monolith and Micro service architectures


## Monolith Architecture

Whatever apps build earlier, they were built using Monolith architecture.

That single project has all these things.
1. API
2. UI
3. Authentication
4. DB
5. SMS

In Monolithic architecture, all services is managed and maintained inside a single project.

## Micro service architecture

In Micro service architecture, every service is independently managed and maintained in different projects.

In a application, there can be multiple micro services like this.
1. API
2. UI
3. Authentication
4. DB
5. SMS

This Food order application is an example of UI micro service architecture.

You can write micro services in the language which is efficient to manage and mantain that particular service, and what is the role of that service, and what tech will suit that service.

Like you can build UI service using React.
DBMS service using Python
SMS service using GoLang
Backend service using JAVA.

#### How these micro services interact with each other?

We deploy these micro services on different ports.

Suppose, we deploy UI services on port :1234
Backend service on port :1000
SMS service on port :3000

And at the end, all these port can be mapped to domain name.

These micro services interact by calling URL of that particular service.

### Two ways of making api calls

1. The first way, as soon as our app loads, we can make an api call, and wait for data to come. and then we render the UI.

Suppose, if an api call take 500 milliseconds to complete, that time our app will load and it will wait for data to come for api call.

and after 500 milliseconds, it will render the UI.

You have seen this things in many application.

Loads => API => Render UI

Like when you open a webpage, you suddenely don't see anything. As soon as the api responds, it quickly shows lot of things on screen.

2. The second approach is as soon as our app loads, we will render the UI.

After render UI, we will call api, and get some data.

After getting some data, we will re-render our application with the data comes from api once again.

Loads => Render UI => API => Re-Render UI

The second approach gives better UX, user experience


React has one of the best Render mechanism. So, we don't need to bother about two render.

In Food order application, we got cors policy error when calling Swiggy API from localhost.

#### Who is blocking api in cors policy error?

Our browser is not allowing us to call Swiggy API.

Because Swiggy API is hosted on different origin.

And when there is orgin mismatch, that time browser blocks all the api that we call in our application.

#### How do you can bypass cors policy error?


Using chrome extension

#### Shimmer UI

Shimmer UI is some skeleton which we show to user when we are calling some api and getting some data from API.

It makes user experience better.

#### Conditional Rendering

Rendering components based on some conditions is called Conditional Rendering.


## 2nd feature of Food order application

#### Login and Logout button

#### What does render means?

Re-Render means calling a React component again.

#### Why do we need to use useState hook?

We need to use useState hook to update the user interface whenever there is some change in data.

If we use normal variables, and when that variable changes, that time in React, UI doesn't change.

Because, that change in normal variables doesn't cause a re-render.

So, to update the user interface, whenever data changes, we use useState hook.

Whenever you learn, you should ask questions like when, why, how a particular thing happen.

When you need to write or use a particular thing?
How you can use that particular thing?
Why to use that particular thing?
Where to use that particular thing?

#### 3rd Feature = Search Restaurant based on name

Code slow.

Whenever you write anything in your code, always ask questions like why i am writing this, is it really required, can this be become more better.

The people who write code slow, hasn't need to debug their code or has very little to debug.
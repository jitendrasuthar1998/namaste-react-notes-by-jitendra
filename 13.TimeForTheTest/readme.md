#### Why do we need to test?

Suppose that if we just write a single line of code, it can introduce bugs anywhere in our application.

When our React application gets bigger, it may have a lot of components.

When we make large-scale applications,  our React application may have hundreds of components.

So, suppose your application has 100 components, and they are talking to each other.

In our current food application, the restaurant list is dependent on the search component. So, whenever the search component logic changes, the restaurant list will also change.

If there is any bug in the search component, then it may affect the behaviour of the restaurant list component.

Even a small change in your application can introduce a bug anywhere in it.

Some people might say that they have just added a single line of code, and it will not do any harm to your application.

But you might be wrong about it.

Because even a single line of code can mess up everything in your application.

So, we should worry about every line of code that we write in our application codebase.

Testing is very important in our application.

When we are building small applications, we don't realise the importance of testing our application.

But when we work for a large-scale company, testing is a must-have.
Testing is very important.

Because you never know what code you are changing and what other parts of your application are impacted by that code.

A developer can do manual testing, or he can write code to do testing.

#### What are the different types of testing we can do in our React application?

1. Unit testing

2. Integration testing

3. End-to-end testing (E2E)

**1. Unit testing**

Unit testing means you test your React component in isolation.

**2. Integration testing**

Integration testing means you are testing the integration of the component.

In large-scale applications, these components talk to each other.

If you test the search feature, then it is called integration testing. Because many other components are dependent on this search feature,.

Integration testing means there are multiple components and they are talking to each other, and we will develop a flow of action in our React application that we will test.

We will write code to test this test feature.

**3. End-to-end testing**

End-to-end testing means testing a react application as soon as the user lands on the website and leaves the website.

and we will test all the flows.

In end-to-end testing, we will simulate the user behaviour and test the whole user flow.

As developers, we are majorly concerned about two types of testing: unit and integration testing.

In some companies, testing is part of development.

Testing is part of writing code.

In some companies, you may have to write code for a test case as well.

So, make it your habit to write test cases for whatever components you make, because in big companies, they may ask you to do testing.

#### What are the different types of testing that a developer can do?

**Manual Testing**

In manual testing, a developer tests everything by himself.

Suppose he has created a component, and he checks if that component is working properly or not by running the application in the actual browser.

React testing library behind the scenes use Jest.

Jest is a javascript testing library.

#### How you can setup testing in your react application?

1. Install React testing library
2. Install Jest
3. Install babel dependencies
4. Configure babel
5. Configure parcel config file to disable default babel transpilation
6. Jest configuration
7. Install jsdom
8. Install @babel/preset-react to work JSX work in test cases
9. Include @babel/preset-react inside babel config
10. Install @testing-library/jest-dom (npm i -D @testing-library/jest-dom)

JSDOM is an environment for jest to execute test cases.

Babel is transpiler.

When you console.log inside any of your test cases to see if that a particular element has been rendered on the screen or not, that time it will return a peice of JSX.

#### How you can test any component?

1. Render that component
2. Query that component
3. Assert that component.

#### Why you need to group multiple tests into a single test and how you can do that?

When we want to test multiple components, that time we write multiple test cases, and when we do this, our test cases file become huge.

So, to seperate test cases, we group them into a single test case.

We can group multiple test cases by doing this

```javascript
describe("Contact us page test case", () => {
  test("Should load 2 input fields inside Contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    console.log(inputBoxes);

    expect(inputBoxes.length).toBe(2);
  });

  test("Should load input name inside Contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");

    expect(inputName).toBeInTheDocument();
  });
});
```

#### How you can check that if a component has been rendered on the screen or not?

To check if a component has been rendered or not, i can write a unit test case for that.

To test it, i first have to render that component on the screen.
And check if any text of that component is present on the screen.
If any of the mentioned text or element is present on the screen, it means that that component also has been rendered on the screen.

#### How you can test a component in which an api call is also done?

We are testing React components inside JSDOM. JSDOM is browser like.

To call an api, browser gives us a super which is fetch() method.
But JSDOM doesn't have that superpower, and because of it, when we try to render a component which has any api call, our test case will fail.

#### Faking API call

Testing is done in an isolated environment that is called JSDOM.

In JSDOM, we can't make an api call, so we fake an api call by using some mock data and promises.

#### What thing we can test?

we can test these things - 
1. If an event is fired on the button click
2. If text has been entered into a input field
3. If we are getting correct results or not from a function
4. If a component is rendered or not

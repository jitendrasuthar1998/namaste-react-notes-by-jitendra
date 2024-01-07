### What is EMMET?

Emmet is a VS code extension that helps developers write code quickly.

Emmet is a plug-in for many popular text editors that greatly improves the HTML & CSS workflow.

### What is the difference between a library and a framework?

The terms "library" and "framework" are often used in the context of software development, and while they share some similarities, they have distinct roles and characteristics.

**Library:**

**1. Collection of Functions:**
- A library is a collection of pre-written code and functions that can be used by other programs. It provides a set of functions and routines that can be called by a program to perform specific tasks.

**2. Control Flow:**
- When you use a library, you have more control over the flow of your program. You call the functions from the library as needed, and you maintain overall control of the application structure.

**3. Inversion of Control:**
- In a library, the flow of control is inverted. The library is called by the client code, and it doesn't dictate the overall structure or flow of the program.

**4. Loose Coupling:**
- Libraries are generally more loosely coupled, meaning they can be used independently of each other and can be easily replaced or upgraded without affecting the entire application.

**Framework:**

**1. Architecture:**
- A framework is a more comprehensive set of tools, conventions, and best practices that dictate the overall structure and flow of an application. It provides scaffolding for building software and enforces a certain architecture.

**2. Inversion of Control:**
- In a framework, the control flow is often inverted. The framework calls your code, and you provide implementations for specific points in the framework.

**3. Integrated Code:**
- Frameworks often come with a more integrated set of tools and components, and they may dictate how you structure your entire application.

**4. Tighter Coupling:**
- Frameworks are generally more tightly coupled, as they provide a more integrated set of tools that work together. Changing a part of a framework may have a more significant impact on the entire application.

In summary, a library is a collection of pre-written code that you can use to perform specific tasks, while a framework is a more comprehensive set of tools, conventions, and best practices that dictate the overall structure and flow of an application. The key difference lies in the level of control and structure they provide to the developer.

### What is CDN, and why do we use it?

A Content Delivery Network (CDN) is a network of geographically distributed servers that work together to deliver web content, such as text, images, scripts, stylesheets, and videos, to users based on their geographical location. The primary purpose of a CDN is to improve the performance, reliability, and efficiency of content delivery on the internet. Here are some key reasons why CDNs are used:

**1. Faster Content Delivery:**
- CDNs reduce latency by serving content from servers that are physically closer to the end-users. This minimises the time it takes for data to travel between the user's device and the server, resulting in faster load times for websites and applications.

**2. Load Balancing:**
- CDNs distribute incoming traffic across multiple servers, ensuring that no single server bears the entire load. This load balancing helps prevent server overloads, reduces the risk of downtime, and improves the overall reliability of a website or application.

**3. Scalability:**
- CDNs provide scalability by allowing websites to handle increased traffic without the need for significant infrastructure upgrades. When there is a surge in demand, the CDN can distribute the load efficiently across its network.

**4. Distributed Caching:**
- CDNs use caching mechanisms to store copies of static content (like images, CSS, and JavaScript files) on servers at various locations. When a user requests a particular piece of content, the CDN serves it from the nearest cache instead of retrieving it from the origin server. This reduces the load on the origin server and accelerates content delivery.

**5. Improved Security:**
- CDNs can offer security benefits by providing DDoS (Distributed Denial of Service) protection. By distributing traffic across multiple servers and employing security measures, CDNs help mitigate the impact of malicious attacks on websites.

**6. Cost Savings:**
- CDNs can help reduce bandwidth costs for website owners. By caching and serving content closer to end-users, CDNs can decrease the amount of data transferred from the origin server, leading to lower data transfer costs for the website owner.

**7. Global Reach:**
- Websites using CDNs can provide a consistent and reliable experience to users worldwide. CDNs have a network of servers across different regions and countries, ensuring that users, regardless of their location, have faster access to content.

In summary, CDNs are used to enhance the performance, reliability, and scalability of web applications by distributing content across a network of strategically placed servers. They contribute to faster load times, improved user experiences, and more efficient handling of web traffic.

### Why is React known as React?

React, the JavaScript library for building user interfaces, was developed by Facebook. The name "React" reflects its core philosophy and approach to building UI components in a reactive and efficient manner.

The term "React" comes from the way the library handles changes in data and updates the user interface. React follows a reactive programming paradigm, where the UI is automatically updated in response to changes in the application's state. Instead of imperatively instructing the browser on how to update the DOM (Document Object Model) in response to changes, React allows developers to declare how the UI should look for a given state, and it efficiently updates the DOM to match that declaration.

The key concepts in React that contribute to its "reactive" nature include:

**1. Virtual DOM:**
- React uses a virtual representation of the DOM in memory. When there are changes in the application's state, React first updates the virtual DOM rather than the actual DOM. It then compares the previous and current states of the virtual DOM to determine the minimal set of changes needed and only updates those specific parts of the real DOM. This approach improves performance by minimising DOM manipulations.

**2. Component-Based Architecture:**
- React encourages developers to break down the user interface into modular components. Each component is responsible for a specific part of the UI, and they can be reused and composed to build complex interfaces. Components in React are designed to be reactive, updating automatically when their states or props change.

**3. Declarative Syntax:**
- React uses declarative syntax, allowing developers to describe how the UI should look based on the current state, and React takes care of updating the DOM to match that description. This is in contrast to imperative programming, where developers specify step-by-step instructions for how to achieve a certain result.

In summary, React is named for its reactive programming model, emphasising how it efficiently updates the UI in response to changes in application state. The virtual DOM, component-based architecture, and declarative syntax are key elements that make React a powerful and popular library for building dynamic user interfaces.


### What is cross-origin in script tag?

In web development, the term "cross-origin" or "cross-origin request" refers to making a request for a resource (like a script, image, or data) that is hosted on a different domain than the one that served the current web page. Browsers implement a security feature called the Same-Origin Policy, which restricts web pages from making requests to a different domain than the one that served the web page. This policy is in place to prevent malicious websites from making unauthorized requests to other websites on behalf of the user.

When it comes to the `<script>` tag, there are scenarios where cross-origin requests can be relevant, specifically with regard to loading JavaScript files from a different domain. To facilitate safe cross-origin script loading, a couple of techniques are commonly used:

**1. JSONP (JSON with Padding):** 
- JSONP is a technique that allows cross-origin requests by exploiting the fact that `<script>` tags are not subject to the same-origin policy. Instead of making a traditional XMLHttpRequest, a script tag is dynamically created with a `src` attribute pointing to a script on a different domain. The server on that domain responds with a script that wraps the data (usually JSON) and is executed by the client.

Example of JSONP:
   ```html
   <script>
     function handleData(data) {
       // Process the data received from the cross-origin request
       console.log(data);
     }
   </script>
   <script src="https://example.com/data?callback=handleData"></script>
   ```

**2. Cross-Origin Resource Sharing (CORS):** 
- CORS is a more modern and secure approach for handling cross-origin requests. It involves the server including specific HTTP headers in its response to indicate which origins are permitted to access the resources. This is a more standard and widely supported method for allowing cross-origin requests.

Example of using CORS headers on the server:
```
Access-Control-Allow-Origin: https://yourdomain.com
```

It's important to note that while JSONP is a workaround that predates CORS, CORS is generally considered the preferred and more secure method for handling cross-origin requests. Developers should be aware of security implications and choose the appropriate technique based on their specific use case and the level of control they have over the server's configuration.


### What is difference between React and ReactDOM?

`React` and `ReactDOM` are both part of the React library, but they serve different purposes.

**1. React:**
- `React` is the core library for building user interfaces in a declarative and component-based way. It provides the fundamental tools and APIs for defining and working with React components, managing component state, handling component lifecycle events, and more.

- It includes functionality for creating and rendering React elements, which are the building blocks of React applications. React elements are lightweight representations of DOM elements, and they are used to describe what the UI should look like for a given state.

Example:
```javascript
import React from 'react';

class MyComponent extends React.Component {
    render() {
       return <h1>Hello, React!</h1>;
    }
}
```

**2. ReactDOM:**

- `ReactDOM` is a separate package within the React ecosystem that specifically deals with the interaction between React and the Document Object Model (DOM). It provides methods for rendering React elements to the DOM and updating the DOM in response to changes in React components.

- The primary functions of `ReactDOM` include rendering React elements into a specified DOM container, updating the DOM when the React component state changes, and handling events.

Example:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello, ReactDOM!</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

In summary, `React` is the core library for building user interfaces using the React component model, while `ReactDOM` is a package that specifically deals with the interaction between React and the DOM. Developers typically use both in conjunction when building React applications, with `React` for defining components and managing state, and `ReactDOM` for rendering those components to the DOM.


#### What is difference between react.development.js and react.production.js files via CDN?

The `react.development.js` and `react.production.min.js` files serve different purposes and are intended for different stages of development and deployment in a React application.

**1. `react.development.js`:**
   - This file is meant for development purposes. It includes additional warnings, debugging information, and helpful error messages that aid developers in identifying issues and debugging their React applications.
   - It is larger in size compared to the production version, as it contains extra code and comments to provide meaningful error messages and warnings to developers.
   - It is not optimized for performance but provides a better development experience.

   Example CDN link for development:
   ```html
   <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
   ```

**2. `react.production.min.js`:**
   - This file is intended for production use. It is a minimized and optimized version of the React library, which means it is smaller in size compared to the development version.
   - It excludes development-specific warnings, debugging information, and other features that are not essential for the production environment.
   - Using the production version in a deployed application helps improve performance by reducing the size of the JavaScript bundle.

   Example CDN link for production:
   ```html
   <script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
   ```

When developing a React application, it is common to use the development version during the development and debugging phase to take advantage of helpful warnings and error messages. However, when deploying the application to production, it is recommended to switch to the production version for better performance and a smaller file size.

It's important to note that similar distinctions exist for other React-related libraries, such as `react-dom.development.js` and `react-dom.production.min.js`. The development versions are meant for development environments, and the production versions are optimized for deployment in production.


### What is the difference between async and defer?

`async` and `defer` are attributes that can be used with the `<script>` tag in HTML to control the loading and execution of external JavaScript files. They are particularly useful when including scripts that might affect the rendering or behavior of the web page.

**1. `async`:**
   - When the `async` attribute is added to a `<script>` tag, it indicates that the script should be executed asynchronously. This means that the script will be downloaded in the background while the HTML parsing continues, and it will be executed as soon as it's downloaded, regardless of the order in which it appears in the HTML.

   Example with `async`:
   ```html
   <script async src="script.js"></script>
   ```

   - Use `async` when the order of execution is not crucial, and the script doesn't depend on the DOM being fully parsed.

**2. `defer`:**
   - When the `defer` attribute is added to a `<script>` tag, it indicates that the script should be executed in order, after the HTML has been fully parsed. Multiple deferred scripts will be executed in the order in which they appear in the HTML.

   Example with `defer`:
   ```html
   <script defer src="script.js"></script>
   ```

   - Use `defer` when the order of execution matters, and the script depends on the DOM being fully parsed. Deferred scripts are guaranteed to execute in the order they appear in the HTML.

**Comparison:**
- Both `async` and `defer` are used to improve the loading performance of web pages by allowing the HTML parsing to continue while scripts are being downloaded.
- The key difference is in the timing of script execution. `async` scripts can execute as soon as they are downloaded, potentially out of order, while `defer` scripts are executed in order after the HTML has been fully parsed.

**Note:**
- It's important to consider the implications of using `async` or `defer` based on the specific requirements of the scripts being included. For scripts that rely on the DOM, using `defer` is often a safer choice to ensure the DOM is ready when the script runs.
- If neither `async` nor `defer` is specified, the script is downloaded and executed synchronously, blocking HTML parsing until the script is fully executed.
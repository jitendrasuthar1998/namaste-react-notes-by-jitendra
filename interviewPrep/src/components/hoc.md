### Higher order component

HOC accepts a component as input, and returns a new component with some enhancement.

Suppose, we have two components, ClickCounter and MouseOverCounter, they both have a button, and displaying counting number.

When user clicks on a button, that time count value will get incremented by one in ClickCounter component.

When user clicks mouse over a button, that time count value will get incremented by one in MouseOverCounter component.

So, here we can see that in both components, increment logic is same, but it is getting repeated twice.

To improve code readability, and reduce this code redundancy, we will create a Higher Order Component, in which we will pass ClickCounter and MouseOverCounter components as input.

And will create a new component, in HOC, where we will add increment logic and display count number, and will return that new component from that HOC.

Now, we will wrap ClickCounter and MouseOverCounter components with HOC.

Wherever we have to render ClickCounter and MouseOverCounter components, we can render them as usual.

Enhancing
Reusability

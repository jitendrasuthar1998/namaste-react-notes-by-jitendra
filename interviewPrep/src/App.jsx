import { useState } from 'react';
import './App.css';
import ExampleOfHOC from './components/HOC/ExampleOfHOC';
import MyComponent from './components/ErrorBoundary/MyComponent';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import RenderProps from './components/RenderProps/RenderProp';
import ThemeApp from './components/ContextAPI/ThemeContext';
import GrowcifyApp from './components/Growcify/GrowcifyApp';
import { Provider } from 'react-redux';
import appStore from './components/Growcify/redux/store';
import InvoiceApp from './components/InvoiceApp/InvoiceApp';
import Mock from './components/Mock/Mock';
import PhoneLogin from './components/OTP/PhoneLogin';
import Counter from './components/Counter';
import TaskApp from './components/Task';
import TaskAppWithReducer from './components/Task/TaskWithReducer';
import PureComponent from './components/PureComponent';
import Accordion from './components/Accordion';
import AccordionWithStateLifting from './components/Accordion/AccordionWithStateLifting';
import Categories from './components/Accordion/Categories';
import TestCounter from './components/Interview/Counter';
import CounterWithInterval1 from './components/Interview/CounterWithInterval1';
import ExpenseTracker from './components/Interview/ExpenseTracker/Expense';
import StarRating from './components/Interview/StarRating';

function App() {
  return (
    <>
      {/* <ExampleOfHOC />

      <ErrorBoundary>
        <MyComponent />
      </ErrorBoundary> */}

      {/* <RenderProps/> */}

      {/* <ThemeApp/> */}
      {/* <Provider store={appStore}>
        <GrowcifyApp />
      </Provider> */}
      {/* <InvoiceApp/> */}
      {/* <Mock/> */}
      {/* <PhoneLogin/> */}
      {/* <Counter/> */}
      {/* <TaskApp/> */}
      {/* <TaskAppWithReducer/> */}
      {/* <PureComponent/> */}
      {/* <Accordion/> */}
      {/* <AccordionWithStateLifting/> */}
      {/* <Categories/> */}
      {/* <TestCounter/> */}
      {/* <CounterWithInterval1/> */}
      {/* <ExpenseTracker/> */}
      <StarRating/>
    </>
  );
}

export default App;

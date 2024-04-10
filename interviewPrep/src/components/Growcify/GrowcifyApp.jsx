import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Products from './Products';
import Cart from './Cart';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import { useSelector } from 'react-redux';
import User from './ProductDetails';
import ProductDetails from './ProductDetails';
import Profile from './Profile';
import UserSetting from './UserSetting';
import UserBilling from './UserBilling';

const GrowcifyApp = () => {
  const { isAuthenticated } = useSelector((store) => store.user);

  return (
    <div>
      <BrowserRouter>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
          <li>
            <Link to='/cart'>Cart</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products/:productId' element={<ProductDetails />} />
          <Route path='/products' element={<Products />} />

          <Route
            path='/cart'
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path='/user'
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Route index element={<Profile />} />
                <Route path='/setting' element={<UserSetting />} />
                <Route path='/billing' element={<UserBilling />} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default GrowcifyApp;

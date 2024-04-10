import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleAuthentication } from './redux/slices/userSlice';

const Login = () => {
  const { isAuthenticated } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(handleAuthentication())}>
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default Login;

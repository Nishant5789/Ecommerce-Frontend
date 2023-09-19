import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectLoggedInUser } from '../authSlice';
import { useEffect } from 'react';
import { fetchUserDataAsync } from '../../user/userSlice';

function Protected({ children }) {
  const user = useSelector(selectLoggedInUser);

  useEffect(()=>{
    fetchUserDataAsync();
  })

  if (!user) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return children;
}

export default Protected;
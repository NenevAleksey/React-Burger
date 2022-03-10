import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Main from '../main/Main';
import { Routes, Route } from 'react-router-dom';
import ForgotPassword from '../../pages/forgot-password/ForgotPassword';
import IngredientsId from '../../pages/ingredients-id/IngredirntsId';
import Login from '../../pages/login/Login';
import NotFound404 from '../../pages/not-found-404/NotFound404';
import Profile from '../../pages/profile/Profile';
import Registration from '../../pages/register/Registration';
import ResetPassword from '../../pages/reset-password/ResetPassword';
import Layout from '../layout/Layout';
import RequireAuthForProfile from '../../hoc/RequireAuth';
import { getFeed } from '../../services/actions/ingredient';
import { getUserData } from '../../services/actions/user';


function App() {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.userSlice)

  useEffect(
    () => {
      dispatch(getFeed());
      dispatch(getUserData(token));
    }, [dispatch, token])

  return (
    <>
      <Routes >
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Registration />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='reset-password' element={<ResetPassword />} />
          <Route path='profile/*' element={
            <RequireAuthForProfile>
              <Profile />
            </RequireAuthForProfile>
          } />
          <Route path='ingredients/:id' element={<IngredientsId />} />
          <Route path='*' element={<NotFound404 />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;

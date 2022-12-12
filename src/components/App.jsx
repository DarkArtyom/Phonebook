import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivatRoute';
import { refreshUser } from 'redux/auth/authOperations';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import NotFound from '../pages/404.NotFound';

const Homepage = lazy(() => import('../pages/Homepage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={RegisterPage}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute
                component={<ContactsPage />}
                redirectTo={'/login'}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    )
  );
};

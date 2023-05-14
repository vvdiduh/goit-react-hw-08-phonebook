import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { current } from '../../redux/auth/auth-operations';

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return <>{children}</>;
};
export default Layout;

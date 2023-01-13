import { useEffect } from 'react';
import { selectUser } from '@store/UserSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useGuest = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user.email) navigate('/');
  }, []);
};

export default useGuest;

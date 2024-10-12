import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useWishlistFetch = (props) => {
  const { url, courseId } = props;

  const [status, setStatus] = useState('loading');
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const accessToken = localStorage.getItem('accessToken');

  const options = {
    mode: 'cors',
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ accessToken, courseId })
  };

  const fetchData = async () => {
    try {
      const res = await fetch(`${base_url}/${url}`, options);

      const response = await res.json();

      if (!res.ok) {
        throw new Error(response.message);
      }

      setStatus('success');
      dispatch(setWishlist({ wishlist: response.wishlist }));
      sessionStorage.setItem('wishlist', JSON.stringify(response.wishlist));
    } catch (error) {
      setStatus('error');
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { status, error };
};

export default useWishlistFetch;
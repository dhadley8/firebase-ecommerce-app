import { useEffect, useState } from 'react';
import { auth } from '../firebase/auth'; // Import Firebase auth functions
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from '../store/authSlice'; // Redux actions

const useAuth = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                dispatch(setUser(user)); // Set user in Redux store
            } else {
                dispatch(clearUser()); // Clear user from Redux store
            }
            setLoading(false);
        }, (error) => {
            setError(error);
            setLoading(false);
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, [dispatch]);

    return { loading, error };
};

export default useAuth;
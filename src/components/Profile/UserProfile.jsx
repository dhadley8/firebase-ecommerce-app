import React, { useEffect, useState } from 'react';
import { getUserData } from '../../firebase/firestore';
import { useAuth } from '../../hooks/useAuth';
import styles from './UserProfile.module.css';

const UserProfile = () => {
    const { user } = useAuth();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            if (user) {
                try {
                    const data = await getUserData(user.uid);
                    setUserData(data);
                } catch (err) {
                    setError('Failed to fetch user data');
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [user]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className={styles.profileContainer}>
            {userData ? (
                <>
                    <h2>User Profile</h2>
                    <p>Name: {userData.name}</p>
                    <p>Email: {userData.email}</p>
                    {/* Add more user details as needed */}
                </>
            ) : (
                <p>No user data available.</p>
            )}
        </div>
    );
};

export default UserProfile;
import React, { useEffect, useState } from 'react';
import { getOrderHistory } from '../../firebase/firestore';
import { useAuth } from '../../hooks/useAuth';
import './OrderHistory.module.css';

const OrderHistory = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrderHistory = async () => {
            if (user) {
                try {
                    const orderData = await getOrderHistory(user.uid);
                    setOrders(orderData);
                } catch (err) {
                    setError('Failed to fetch order history');
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchOrderHistory();
    }, [user]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Order History</h2>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <ul>
                    {orders.map((order) => (
                        <li key={order.id}>
                            <h3>Order ID: {order.id}</h3>
                            <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                            <p>Total: ${order.total}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default OrderHistory;
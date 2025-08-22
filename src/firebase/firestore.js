import { db } from './config';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

// Function to get user data from Firestore
export const getUserData = async (userId) => {
    const userDoc = doc(db, 'users', userId);
    const userSnapshot = await getDoc(userDoc);
    return userSnapshot.exists() ? userSnapshot.data() : null;
};

// Function to get products from Firestore
export const getProducts = async () => {
    const productsCollection = collection(db, 'products');
    const productsSnapshot = await getDocs(productsCollection);
    return productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
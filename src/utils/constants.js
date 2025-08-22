export const API_ENDPOINTS = {
  PRODUCTS: 'https://fakestoreapi.com/products',
  CATEGORIES: 'https://fakestoreapi.com/products/categories',
  USER_DATA: '/api/user', // Placeholder for user data endpoint
  ORDERS: '/api/orders', // Placeholder for orders endpoint
};

export const FIREBASE_CONFIG = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
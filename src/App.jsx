import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import AuthGuard from './components/Auth/AuthGuard';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Cart from './components/Cart/Cart';
import ProductList from './components/Products/ProductList';
import UserProfile from './components/Profile/UserProfile';
import OrderHistory from './components/Profile/OrderHistory';
import './index.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<AuthGuard><Cart /></AuthGuard>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<AuthGuard><UserProfile /></AuthGuard>} />
          <Route path="/orders" element={<AuthGuard><OrderHistory /></AuthGuard>} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
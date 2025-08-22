# Advanced React E-Commerce Application

This project is an advanced e-commerce application built with React, utilizing Firebase for authentication and data management. It features a responsive design, a shopping cart, and a product catalog, all while leveraging modern technologies for a seamless user experience.

## Tech Stack
- **React 18** with Vite for fast development
- **Redux Toolkit** for state management (shopping cart)
- **React Query** (TanStack Query) for data fetching and caching
- **Firebase** for authentication and Firestore database
- **FakeStoreAPI** for product data
- **Session Storage** for cart persistence
- **CSS Modules** for component styling

## Features
- User authentication with Firebase (Login, Register)
- Protected routes using AuthGuard
- Product catalog with category filtering
- Shopping cart with add/remove/update functionality
- Checkout simulation
- Real-time price calculations
- Mobile-responsive design
- User profile management and order history

## Getting Started

### Step 1: Install Dependencies
Open a NEW terminal window and run:
```bash
npm install
```

### Step 2: Start the Development Server
After installation completes, run:
```bash
npm run dev
```

### Step 3: Open in Browser
The application will be available at: http://localhost:5173

## Firebase Configuration
Make sure to set up your Firebase project and add your configuration details in the `.env.local` file. The Firebase services used in this application include:
- Authentication
- Firestore Database
- Storage

## What's Ready:
✅ Complete React application with all components  
✅ Redux Toolkit for shopping cart management  
✅ React Query for API data fetching  
✅ Firebase integration for authentication and Firestore  
✅ Session storage persistence  
✅ Responsive design  
✅ All project requirements implemented  

## Project Structure
The project is organized into the following directories:
- **src/components**: Contains all React components for the application.
- **src/firebase**: Contains Firebase configuration and service functions.
- **src/hooks**: Custom hooks for managing state and data fetching.
- **src/store**: Redux store setup and slices.
- **src/utils**: Utility functions and constants.

## License
This project is licensed under the MIT License.
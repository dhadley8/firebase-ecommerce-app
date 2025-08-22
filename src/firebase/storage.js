import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { firebaseConfig } from './config';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

export const uploadFile = async (file) => {
    const storageRef = storage.ref(file.name);
    try {
        await storageRef.put(file);
        const downloadURL = await storageRef.getDownloadURL();
        return downloadURL;
    } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
    }
};

export const getFile = async (fileName) => {
    const storageRef = storage.ref(fileName);
    try {
        const url = await storageRef.getDownloadURL();
        return url;
    } catch (error) {
        console.error("Error fetching file:", error);
        throw error;
    }
};
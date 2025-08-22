import { useEffect, useState } from 'react';
import { db } from '../firebase/firestore'; // Adjust the import based on your firestore.js file
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const useFirestore = (collectionName) => {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDocuments = async () => {
            setLoading(true);
            try {
                const querySnapshot = await getDocs(collection(db, collectionName));
                const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setDocuments(docs);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDocuments();
    }, [collectionName]);

    const addDocument = async (data) => {
        try {
            const docRef = await addDoc(collection(db, collectionName), data);
            setDocuments(prev => [...prev, { id: docRef.id, ...data }]);
        } catch (err) {
            setError(err.message);
        }
    };

    const updateDocument = async (id, data) => {
        try {
            const docRef = doc(db, collectionName, id);
            await updateDoc(docRef, data);
            setDocuments(prev => prev.map(doc => (doc.id === id ? { ...doc, ...data } : doc)));
        } catch (err) {
            setError(err.message);
        }
    };

    const deleteDocument = async (id) => {
        try {
            const docRef = doc(db, collectionName, id);
            await deleteDoc(docRef);
            setDocuments(prev => prev.filter(doc => doc.id !== id));
        } catch (err) {
            setError(err.message);
        }
    };

    return { documents, loading, error, addDocument, updateDocument, deleteDocument };
};

export default useFirestore;
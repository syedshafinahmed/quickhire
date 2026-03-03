import React, { Children, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import { AuthContext } from './AuthContext';
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile)
  }

  const getToken = async () => {
    if (auth.currentUser) {
      return await auth.currentUser.getIdToken();
    }
    return null;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    })
    return () => {
      unsubscribe();
    }
  }, []);

  const authInfo = {
    user,
    registerUser,
    signInUser,
    signInWithGoogle,
    logOut,
    updateUserProfile,
    loading, setLoading,
    getToken
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>

  );
};

export default AuthProvider;
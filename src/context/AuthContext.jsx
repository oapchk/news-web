import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "./../firebase.js";
import PropTypes from "prop-types";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  deleteDoc,
} from "firebase/firestore";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signup = async (name, email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = auth.currentUser;

    if (user) {
      await user.updateProfile({
        displayName: name,
      });
    }

    return userCredential;
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const saveArticle = async (article) => {
    if (!currentUser) return;
    try {
      await addDoc(collection(db, "wishlists"), {
        uid: currentUser.uid,
        article,
      });
    } catch (error) {
      console.error("Error adding article to wishlist:", error);
    }
  };

  const deleteArticle = async (articleUrl) => {
    if (!currentUser) return;
    try {
      const q = query(
        collection(db, "wishlists"),
        where("uid", "==", currentUser.uid),
        where("article.url", "==", articleUrl)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (docSnapshot) => {
        const docRef = doc(db, "wishlists", docSnapshot.id);
        await deleteDoc(docRef);
      });
      console.log("Article deleted:", articleUrl);
    } catch (error) {
      console.error("Error deleting article from wishlist:", error);
    }
  };

  const getWishlist = async () => {
    if (!currentUser) return [];
    const q = query(
      collection(db, "wishlists"),
      where("uid", "==", currentUser.uid)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => doc.data().article);
  };

  const value = {
    currentUser,
    signup,
    login,
    logout,
    saveArticle,
    deleteArticle,
    getWishlist,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

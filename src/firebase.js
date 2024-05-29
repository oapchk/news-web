import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyD1uWSzs4GwaZhf49JFfx1T2T7vvvZn43g",
  authDomain: "front-news-end.firebaseapp.com",
  projectId: "front-news-end",
  storageBucket: "front-news-end.appspot.com",
  messagingSenderId: "361688447081",
  appId: "1:361688447081:web:9306c5cb0576da28144af8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY ?? "",
  authDomain: "artify-f893b.firebaseapp.com",
  projectId: "artify-f893b",
  storageBucket: "artify-f893b.appspot.com",
  messagingSenderId: "285770654532",
  appId: "1:285770654532:web:6bfac869d8501af00e6d11",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const POST_COLLECTION_NAME = "artify-post";
export const IMAGES_FOLDER_NAME = "images";

import { doc, getDoc } from "firebase/firestore";
import { db, POST_COLLECTION_NAME } from "@/utils/firebase-config";
import { Post } from "@/types";

const getPostById = async (id: string) => {
  const docRef = doc(db, POST_COLLECTION_NAME, id);
  const docSnap = await getDoc(docRef);

  return docSnap.exists() ? ({ ...docSnap.data(), id } as Post) : null;
};

export default getPostById;

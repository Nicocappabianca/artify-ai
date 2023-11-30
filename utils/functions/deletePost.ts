import { doc, deleteDoc, getDoc } from "firebase/firestore";
import { db, POST_COLLECTION_NAME, storage } from "@/utils/firebase-config";
import { ref, deleteObject } from "firebase/storage";

const deletePost = async (id: string) => {
  const postRef = doc(db, POST_COLLECTION_NAME, id);

  try {
    const docSnap = await getDoc(postRef);

    if (!docSnap.exists()) {
      throw new Error(`Document with ID ${id} not found.`);
    }

    const postData = docSnap.data();

    await deleteDoc(postRef);

    if (postData?.image) {
      const imageUrl = postData.image;
      const imagePath = decodeURIComponent(imageUrl.split("/").pop() as string).split("?alt")[0];

      const imageRef = ref(storage, imagePath);
      await deleteObject(imageRef);
    } else {
      console.log(`Document with ID ${id} deleted successfully, but no associated image found.`);
    }
  } catch (error) {
    throw new Error(`Error deleting document with ID ${id}`);
  }
};

export default deletePost;

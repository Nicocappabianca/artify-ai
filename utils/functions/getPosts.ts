import {
  CollectionReference,
  DocumentData,
  Query,
  WhereFilterOp,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db, POST_COLLECTION_NAME } from "@/utils/firebase-config";
import { Post } from "@/types";

type QueryFilter = {
  fieldName: keyof Omit<Post, "id">;
  opStr: WhereFilterOp;
  value: unknown;
};

const getPosts = async (filter?: QueryFilter) => {
  let postRef: Query<DocumentData> | CollectionReference<DocumentData>;

  if (filter) {
    const { fieldName, opStr, value } = filter;
    postRef = query(collection(db, POST_COLLECTION_NAME), where(fieldName, opStr, value));
  } else {
    postRef = collection(db, POST_COLLECTION_NAME);
  }

  const data = await getDocs(postRef);
  const posts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[];

  return posts;
};

export default getPosts;

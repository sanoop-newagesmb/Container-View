import { COMMENTS, LIKES, POSTS, USERS } from "./data";

export const createApi = async (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
};

export const getPosts = () => createApi(POSTS);

export const getPostByID = (id) => createApi(POSTS.find((p) => p.id == id));

export const updatePost = (id, data) => {
  const index = POSTS.findIndex((p) => p.id == id);
  POSTS[index] = data;
  return createApi(POSTS);
};

export const deletePost = (id) => {
  const index = POSTS.findIndex((p) => p.id == id);
  POSTS.splice(index, 1);
  return createApi(POSTS);
};

export const getComments = () => createApi(COMMENTS);

export const getCommentsByPostId = (id) =>
  createApi(COMMENTS.filter((c) => c.postId == id));

export const getUsers = () => createApi(USERS);

export const getLikes = () => createApi(LIKES);

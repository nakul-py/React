import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  uploadedFile: [],
  loading: false,
  error: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.$id !== action.payload);
    },
    uploadFile: (state, action) => {
      state.uploadedFile.push(action.payload);
    },
    deleteFile: (state, action) => {
      state.uploadedFile = state.uploadedFile.filter(
        (file) => file.$id !== action.payload
      );
    },
  },
});

export const { setPosts, addPost, deleteFile, deletePost, uploadFile } =
  postSlice.actions;
export default postSlice.reducer;

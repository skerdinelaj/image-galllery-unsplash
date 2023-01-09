import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import photoApi from "../../api/photoApi";
import { APIKey } from "../../api/PhotosApiKey";

export const fetchAsyncPhotos = createAsyncThunk(
  "photos/fetchAsyncPhotos",
  async () => {
    const response = await photoApi.get(`?client_id=${APIKey}`);
    return response.data;
  }
);

export const fetchAsyncPhotoBio = createAsyncThunk(
  "photoBio/fetchAsyncPhotoBio",
  async (id) => {
    const response = await photoApi.get(`${id}?client_id=${APIKey}`);
    return response.data;
  }
);

export const fetchAsyncPhotoLike = createAsyncThunk(
  "photoLike/fetchAsyncPhotoBio",
  async (id) => {
    const response = await photoApi.post(`${id}/like/?client_id=${APIKey}`);
    return response.data;
  }
);

const initialState = {
  photos: [],
  selectPhoto: [],
  photoLike: false,
};

const photoSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    removeSelectPhoto: (state) => {
      state.selectPhoto = [];
    },
  },
  extraReducers: {
    [fetchAsyncPhotos.pending]: () => {},
    [fetchAsyncPhotos.fulfilled]: (state, { payload }) => {
      return { ...state, photos: payload };
    },
    [fetchAsyncPhotos.rejected]: () => {},
    [fetchAsyncPhotoBio.fulfilled]: (state, { payload }) => {
      return { ...state, selectPhoto: payload };
    },
    [fetchAsyncPhotoLike.fulfilled]: (state, { payload }) => {
      return { ...state, photoLike: payload };
    },
  },
});

export const { removeSelectPhoto } = photoSlice.actions;
export const getAllPhotos = (state) => state.photos.photos;
export const getSelectPhoto = (state) => state.photos.selectPhoto;
export default photoSlice.reducer;

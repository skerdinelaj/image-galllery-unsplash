import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaEye, FaThumbsUp, FaDownload } from "react-icons/fa";
import Pagination from "./Pagination";
import {
  getSelectPhoto,
  getAllPhotos,
  fetchAsyncPhotos,
} from "../features/photos/photosSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncPhotoBio,
  removeSelectPhoto,
  fetchAsyncPhotoLike,
} from "../features/photos/photosSlice";
export default function PhotoBio() {
  const [zoom, setZoom] = useState(false);
  const postPerPage = 1;

  const dispatch = useDispatch();
  const { id } = useParams();
  const photoSelect = useSelector(getSelectPhoto);
  useEffect(() => {
    dispatch(fetchAsyncPhotos());
  }, []);
  useEffect(() => {
    dispatch(fetchAsyncPhotoBio(id));
    return () => {
      dispatch(removeSelectPhoto());
    };
  }, [dispatch, id]);
  const photos = useSelector(getAllPhotos);

  return (
    <>
      {photoSelect.length === 0 ? (
        <span className="loader"></span>
      ) : (
        <div className="relative min-h-screen bg-white shadow-md">
          <img
            src={photoSelect.urls.raw}
            alt={photoSelect.user.name}
            className={`object-cover w-full ${
              !zoom ? "profile-image cursor-zoom-in" : "cursor-zoom-out"
            }  object-fit`}
            onClick={() => setZoom((prev) => !prev)}
          />

          <Link
            to="/"
            className="absolute px-6 py-2 text-3xl font-bold tracking-wide text-white uppercase rounded-full top-2 md:text-4xl lg:text-5xl xl:text-6xl hover:bg-black"
          >
            &larr;
          </Link>
          <div className="p-3">
            <div className="flex items-center justify-between">
              <h3>Photographer: {photoSelect.user.name}</h3>
              <div className="flex items-center ">
                <FaThumbsUp onClick={() => dispatch(fetchAsyncPhotoLike(id))} />
                <span className="pl-1 pr-3">{photoSelect.likes}</span>
                <FaEye /> <span className="pl-1 pr-3">{photoSelect.views}</span>
                <FaDownload />
                <span className="pl-1 pr-3">{photoSelect.downloads}</span>
              </div>
            </div>
            <p>Photographer Bio: {photoSelect.user.bio}</p>
          </div>
          <Pagination
            totalPosts={photos.length}
            postPerPage={postPerPage}
            setCurrentPage={(id) => {
              const lastPostIndex = id * postPerPage;
              const firstPostIndex = lastPostIndex - postPerPage;
              const currentPost = photos.slice(firstPostIndex, lastPostIndex);
              window.location.href = `/${
                currentPost.map((post) => post.id)[0]
              }`;
            }}
          />
        </div>
      )}
    </>
  );
}

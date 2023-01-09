import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPhotos, fetchAsyncPhotos } from "../features/photos/photosSlice";
import Article from "./Article";
import Filter from "./Filter";

export default function GetImages() {
  const [photoFilter, setPhotoFilter] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncPhotos());
  }, [dispatch]);
  const photos = useSelector(getAllPhotos);
  const handleFilter = (e) => {
    setPhotoFilter(e.target.value);
  };
  const filter = photos.filter((photo) => {
    if (photoFilter === "all") {
      return photo;
    } else if (photoFilter === "hot") {
      return photo.likes > 100;
    } else if (photoFilter === "top") {
      return photo.likes > 10 && photo.likes <= 100;
    } else if (photoFilter === "user") {
      return photo.likes <= 10;
    }
    return photo;
  });
  return (
    <>
      <div className="container px-5 mx-auto 2xl:px-0">
        <Filter handleFilter={handleFilter} photoFilter={photoFilter} />
        {!photos ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          <section className="grid grid-cols-1 gap-5 pb-20 md:grid-cols-2 xl:grid-cols-3 lg:container">
            {filter.map((image) => (
              <Article key={image.id} {...image} />
            ))}
          </section>
        )}
      </div>
    </>
  );
}

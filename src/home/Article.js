import React from "react";
import { useNavigate } from "react-router-dom";

export default function Article({ id, urls, user, alt_description }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="pb-3 transition bg-white shadow-md cursor-pointer rounded-3xl hover:scale-105"
        onClick={() => navigate(id)}
      >
        <article key={id} className="rounded-3xl">
          <img
            src={urls.regular}
            alt={user.username}
            className="object-cover w-full h-52 object-fit lg:h-80 rounded-t-3xl"
          />
          <div className="flex flex-col items-start justify-between p-5 pb-0 md:flex-row md:items-center">
            <article className="flex items-center justify-start">
              <p>{alt_description ?? "Click for more info"}</p>
            </article>
          </div>
        </article>
      </div>
    </>
  );
}

import React from "react";
import service from "../appwrite/awconfig.js";
import { Link } from "react-router-dom";

function Postcard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-400 px-4 rounded-xl">
        <div className="w-full justify-center mb-4"></div>
        <img src={service.getFilePreview(featuredImage)} alt={title} 
        className="rounded-xl" />
      </div>
      <h2 className=" font-bold text-xl">{title}</h2>
    </Link>
  );
}

export default Postcard;

import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";

import BackButton from "../components/BackButton";

import { useParams } from "react-router-dom";
import axios from "axios";

const ShowBook = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />

      <h1 className="text-3xl my-4"> Show Book </h1>

      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col bg-[#FFDB58]/50 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 font-semibold">ID</span>
            <span>{book._id}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 font-semibold">Title</span>
            <span>{book.title}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 font-semibold">Author</span>
            <span>{book.author}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 font-semibold">PublishYear</span>
            <span>{book.publishYear}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 font-semibold">Created Time</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;

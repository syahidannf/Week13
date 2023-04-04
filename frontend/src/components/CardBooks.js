import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { HiPlusCircle } from "react-icons/hi";

export default function CardBooks() {
  const [bookList, setBookList] = useState();

  return (
    <div className="container my-5">
      <a href="" className="btn btn-primary btn-sm mb-4 flex flex-row align-items-center justify-content-center text-center">
        <HiPlusCircle /> Add Books
      </a>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

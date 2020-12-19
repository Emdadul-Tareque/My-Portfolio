import React from "react";
import "./Blogs.css";

const AllBlogs = (props) => {
  const { title, img, link } = props.blog;
  return (
    <div className="col-md-4 col-12 d-flex align-items-center justify-content-center">
      <div className="Card mt-3 mb-5">
        <div className="image">
          <img src={img} alt="" />
        </div>
        <div className="Card-Body p-3">
          <div className="title">
            <h6>{title}</h6>
          </div>

          <div className="text-center">
            <a href={link} target="blank"> <button className="btn btn-secondary">Read</button> </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;

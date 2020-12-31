import React from "react";
const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-lg-3 col-sm-8  card m-3 p-0 shadow">
        <img src={props.imgsrc} className="card-img-top " alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.content}</p>
        </div>
        <div class="card-footer text-center">
          <a href={props.link} className="btn btn-primary">
            View
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;

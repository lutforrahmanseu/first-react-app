import React from "react";

const AllGunCard = ({ gun, handleClick }) => {
  const { img, name, bullet, action } = gun;
  return (
    <div className="card  w-full bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="gun" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions ">
          <div className="badge badge-outline">{action}</div>
          <div className="badge badge-outline">{bullet}</div>
        </div>
        <div className="mt-4">
          <button onClick={() => handleClick()} className="btn btn-sm mr-3">
            Add To Card
          </button>
          <button className="btn btn-sm">Details</button>
        </div>
      </div>
    </div>
  );
};

export default AllGunCard;

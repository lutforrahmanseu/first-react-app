import React, { useState } from "react";
import Modal from "../Modal/Modal";

const AllGunCard = ({ gun, handleClick }) => {
  const [modalData, setModalData] = useState({});
  const { img, name, bullet, action } = gun;
  return (
    <div className="card  w-full bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="gun" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">New</div>
        </h2>

        <div className="card-actions ">
          <div className="badge badge-outline">{action}</div>
          <div className="badge badge-outline">{bullet}</div>
        </div>
        <div className="mt-4">
          <button onClick={() => handleClick()} className="btn btn-sm mr-3">
            Add To Card
          </button>
          <label
            onClick={() => setModalData(gun)}
            htmlFor="my-modal-3"
            className="btn btn-sm modal-button btn-success"
          >
            Details
          </label>
          {/* <button className="btn btn-sm">Details</button> */}
          {modalData && <Modal data={modalData} setData={setModalData}></Modal>}
        </div>
      </div>
    </div>
  );
};

export default AllGunCard;

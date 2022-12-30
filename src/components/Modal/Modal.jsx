import React from "react";

const Modal = ({ data, setData }) => {
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => setData(null)}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{data.name}</h3>
          <p className="py-4">{data.action}</p>
          <h1>Price:{data.price}</h1>
        </div>
      </div>
    </div>
  );
};

export default Modal;

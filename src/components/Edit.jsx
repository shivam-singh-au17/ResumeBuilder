import React from "react";
import "./style.css";
import EditUserDetails from "./EditUserDetails";

const Edit = () => {
  return (
    <>
      <div className="row maxWidth">
        <div className="col-4">
          <EditUserDetails/>
        </div>
        <div className="col-8">
          <div className="PersonalDetailsBox">
            <div className="mt-5 fs-5">
              <h1 className="my-1">Edit Personal Details</h1>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="name" className="form-control" id="name" />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input type="text" className="form-control" id="address" />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input type="text" className="form-control" id="phone" />
              </div>

              <button
                type="button"
                className="btn btn-primary px-5 btn-lg float-end"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;

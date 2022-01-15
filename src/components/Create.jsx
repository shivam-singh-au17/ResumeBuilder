import React, { useState } from "react";
import "./style.css";
import UserDetails from "./UserDetails";

const Create = () => {
   const [btnState, setBtnState] = useState(false);

   const handleClick = () => {
     setBtnState(true);
     console.log(666666);
   };
  return (
    <>
      <div className="row maxWidth">
        <div className="col-4">
          <UserDetails />
        </div>
        <div className="col-8">
          <div className="PersonalDetailsBox">
            <div className="mt-5 fs-5">
              <h1 className="my-1">Personal Details</h1>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Address"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Phone"
                />
              </div>

              <button
                type="button"
                className="btn btn-primary px-5 btn-lg float-end"
                disabled={btnState}
                onClick={handleClick}
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

export default Create;

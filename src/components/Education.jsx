import React from 'react'
import "./style.css";
import UserDetails from "./UserDetails";


const Education = () => {
    return (
      <>
        <div className="row maxWidth">
          <div className="col-4">
            <UserDetails />
          </div>
          <div className="col-8">
            <div className="PersonalDetailsBox">
              <div className="mt-5 fs-5">
                <h1 className="my-3">Education</h1>

                <div className="mb-3">
                  <label htmlFor="Institute" className="form-label">
                    Institute
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Institute"
                    placeholder="Institute"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="startYear" className="form-label">
                    Start Year
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="startYear"
                    placeholder="Start Year"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="endYear" className="form-label">
                    End Year
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="endYear"
                    placeholder="End Year"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="degree" className="form-label">
                    Degree
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="degree"
                    placeholder="Degree"
                  />
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
}

export default Education

import React from "react";
import { useBasicInfo } from "../Context/StatesProvider";

const BasicInfo = () => {
  const { basicInfo, setBasicInfo, setImage } = useBasicInfo();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBasicInfo({ ...basicInfo, [name]: value });
  };
  return (
    <>
      <div className="basicinfo">
        <div className="basicinfo_header">
          <h2 className="colorh">Basic Info</h2>
          <p className="text-muted">
            Include at minimum your email and phone number.
          </p>
        </div>
        <div className="basicinfo_body">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="form-floating mb-3">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control fancyinput"
                  id="name"
                  // value={basicInfo.name}
                  name="name"
                  placeholder="FullName"
                />
                <label htmlFor="name">FullName</label>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              {/* --------------- image --------------- */}
              <label
                htmlFor="image"
                className="u-f-b bgcolorful text-white pop fw-bold ls-1 mx-2 shadow-btn"
              >
                <i className="fas fa-circle-plus p-2"></i>
                Upload Image
                <input
                  onChange={(e) => {
                    setImage(URL.createObjectURL(e.target.files[0]));
                  }}
                  type="file"
                  className="form-control u-f-b"
                  id="image"
                  name="image"
                  placeholder="Image"
                  accept="image/*"
                />
              </label>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-12">
              {" "}
              <div className="form-floating mb-3">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="profession"
                  // value={basicInfo.profession}
                  name="profession"
                  placeholder="
          Profession"
                />
                <label htmlFor="profession">Profession</label>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="form-floating mb-3">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="email"
                  // value={basicInfo.email}
                  name="email"
                  placeholder="
          Email"
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
          </div>

          <div className="form-floating mb-3">
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              id="address"
              // value={basicInfo.address}
              name="address"
              placeholder="
          Address"
            />
            <label htmlFor="address">Address</label>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="form-floating mb-3">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="city"
                  // value={basicInfo.city}
                  name="city"
                  placeholder="
          City"
                />
                <label htmlFor="city">City</label>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="form-floating mb-3">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="state"
                  // value={basicInfo.state}
                  name="state"
                  placeholder="
          State"
                />
                <label htmlFor="state">State</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              {" "}
              <div className="form-floating mb-3">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="phone"
                  // value={basicInfo.phone}
                  name="phone"
                  placeholder="
          Phone"
                />
                <label htmlFor="phone">Phone</label>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="form-floating mb-3">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="zip"
                  name="zip"
                  // value={basicInfo.zip}
                  placeholder="
          ZipCode"
                />
                <label htmlFor="zip">Zip Code</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicInfo;

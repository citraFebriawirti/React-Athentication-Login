import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../Style";

export default function Register() {
  const [id, idChange] = useState("");
  const [name, nameChange] = useState("");
  const [password, passwordChange] = useState("");
  const [email, emailChange] = useState("");
  const [phone, phoneChange] = useState("");
  const [country, countryChange] = useState("");
  const [address, addressChange] = useState("");
  const [gender, genderChange] = useState("male");

  const navigate = useNavigate();

  const handlesubmit = (el) => {
    el.preventDefault();
    let reg = { id, name, password, email, phone, country, address, gender };
    console.log(reg);

    fetch("http://localhost:8000/user", {
      method: "POST",
      header: { "content-type": "application/json" },
      body: JSON.stringify(reg),
    })
      .then((res) => {
        toast.success("Register Succesfull.");
        navigate("/login");
      })
      .catch((err) => {
        toast.error("Failed." + err.message);
      });
  };
  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handlesubmit}>
          <div className="card">
            <div className="card-header">
              <h2>Halaman Register</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      User Name
                      <span className={`${register.error_massage}`}>*</span>
                    </label>
                    <input
                      value={id}
                      onChange={(el) => idChange(el.target.value)}
                      required
                      type="text"
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Password
                      <span className={`${register.error_massage}`}>*</span>
                    </label>
                    <input
                      value={password}
                      onChange={(el) => passwordChange(el.target.value)}
                      required
                      type="password"
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Full Name
                      <span className={`${register.error_massage}`}>*</span>
                    </label>
                    <input
                      value={name}
                      onChange={(el) => nameChange(el.target.value)}
                      required
                      type="text"
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Email
                      <span className={`${register.error_massage}`}>*</span>
                    </label>
                    <input
                      value={email}
                      onChange={(el) => emailChange(el.target.value)}
                      required
                      type="email"
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Phone
                      <span className={`${register.error_massage}`}>*</span>
                    </label>
                    <input
                      value={phone}
                      onChange={(el) => phoneChange(el.target.value)}
                      required
                      type="number"
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Country
                      <span className={`${register.error_massage}`}>*</span>
                    </label>
                    <select
                      className="form-control"
                      value={country}
                      onChange={(el) => countryChange(el.target.value)}
                      required
                    >
                      <option value="indonesia">Indonesia</option>
                      <option value="singapura">Singapura</option>
                      <option value="malaysia">Malaysia</option>
                      <option value="jepang">Jepang</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      value={address}
                      onChange={(el) => addressChange(el.target.value)}
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Gender</label>
                    <div className="d-flex ">
                      <div className="form-check me-5">
                        <input
                          checked={gender == "male"}
                          onChange={(el) => genderChange(el.target.value)}
                          className="form-check-input "
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          for="flexRadioDefault1"
                        >
                          Male
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          checked={gender == "female"}
                          onChange={(el) => genderChange(el.target.value)}
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label
                          className="form-check-label"
                          for="flexRadioDefault2"
                        >
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary me-3">
                Register
              </button>
              <a className="btn btn-danger ">Back</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

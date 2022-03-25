import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import {
  loadingToggleAction,
  signupAction,
} from "../../store/actions/AuthActions";
import axios from "axios";
// image
//import logo from "../../images/logo-full.png";

function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordcon, setPasswordcon] = useState("");
  let errorsObj = { email: "", password: "" };
  const [errors, setErrors] = useState(errorsObj);
  const [dataOwner, setDataOwner] = useState([]);
  const [saveData, setSaveData] = useState([]);
  const [createValue, setCreateValue] = useState("");

  const dispatch = useDispatch();

  const onChangeCreate = (event) => {
    setDataOwner({ ...createValue, [event.target.name]: event.target.value });
    if (dataOwner.userName != null) saveData.userName = dataOwner.userName;
    if (dataOwner.password != null) saveData.password = dataOwner.password;
    if (dataOwner.fullName != null) saveData.fullName = dataOwner.fullName;
    if (dataOwner.dob != null) saveData.dob = dataOwner.dob;
    if (dataOwner.phone != null) saveData.phone = dataOwner.phone;
    if (dataOwner.email != null) saveData.email = dataOwner.email;
    if (dataOwner.address != null) saveData.address = dataOwner.address;
  };

  console.log("SPA_DATA: ", saveData)

  saveData.code = Math.floor(Math.random() * 999) + 100;
  const onCreate = () => {
    axios
      .post(
        "http://bookings3v1.somee.com/api/v1.0/register/dangkyspaowner",
        {
          userName: saveData.userName,
          password: saveData.password,
          code: `${saveData.code}`,
          fullName: saveData.fullName,
          phone: saveData.phone,
          email: saveData.email,
          address: saveData.address,
          status: false,
          roleId: 3,
        }
        // {
        //   userName: 'BTD312',
        //   password: '59304683',
        //   code: `${saveData.code}`,
        //   // dob: '20-12-2004',
        //   fullName: 'Bùi Tiến Dũng',
        //   phone: '35465223',
        //   email: 'THH@gmail.com',
        //   address: 'HN',
        //   status: false,
        //   roleId: 2,
        // }
      )
      .then((item) => {
        // console.log(dataCreate);
      });
  };

  function onSignUp() {
    let error = false;
    const errorObj = { ...errorsObj };
    if (dataOwner.userName === "") {
      errorObj.email = "Email is Required";
      error = true;
    }
    if (dataOwner.password=== "") {
      errorObj.password = "Password is Required";
      error = true;
    }
    if (password !== passwordcon) {
      errorObj.password = "Password incorest password confirm";
      error = true;
    }
    setErrors(errorObj);
    if (error) return;
    dispatch(loadingToggleAction(true));
    dispatch(signupAction(email, password, props.history));
  }
  return (
    <div className="authincation h-100 p-meddle">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-md-6">
            <div className="authincation-content">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <div className="auth-form">
                    <div className="text-center mb-3">
                      {/* <Link to="/login">
							<img src={logo} alt="" />
						</Link> */}
                    </div>
                    <h4 className="text-center mb-4 ">
                      Sign up Spa-owner account
                    </h4>
                    {props.errorMessage && (
                      <div className="">{props.errorMessage}</div>
                    )}
                    {props.successMessage && (
                      <div className="">{props.successMessage}</div>
                    )}
                    <form onSubmit={onSignUp}>
                      <div className="form-group mb-1">
                        <label className="mb-1 ">
                          <strong>User Name</strong>
                        </label>
                        <input
                          type="text"
                          name="userName"
                          className="form-control"
                          value={dataOwner.userName}
                          onChange={onChangeCreate}
                        />
                      </div>
                      {errors.email && <div>{errors.email}</div>}
                      <div className="form-group mb-1">
                        <label className="mb-1 ">
                          <strong>FullName</strong>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          className="form-control"
                          value={dataOwner.fullName}
                          onChange={onChangeCreate}
                        />
                      </div>
                      {/* <div className="form-group mb-3">
                        <label className="mb-1 ">
                          <strong>UserName</strong>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={dataOwner.userName}
                          onChange={onChangeCreate}
                        />
                      </div> */}
                      <div className="form-group mb-1">
                        <label className="mb-1 ">
                          <strong>Address</strong>
                        </label>
                        <input
                          type="text"
                          name="address"
                          className="form-control"
                          value={dataOwner.address}
                          onChange={onChangeCreate}
                        />
                      </div>
                      <div className="form-group mb-1">
                        <label className="mb-1 ">
                          <strong>Phone</strong>
                        </label>
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          value={dataOwner.phone}
                          onChange={onChangeCreate}
                        />
                      </div>
                      <div className="form-group mb-1">
                        <label className="mb-8 ">
                          <strong>Dob</strong>
                        </label>
                        <input
                          type="text"
                          name="dob"
                          className="form-control"
                          value={dataOwner.dob}
                          onChange={onChangeCreate}
                        />
                      </div>

                      <div className="form-group mb-1">
                        <label className="mb-9 ">
                          <strong>Email</strong>
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          value={dataOwner.email}
                          onChange={onChangeCreate}
                        />
                      </div>
                      {errors.email && <div>{errors.email}</div>}
                      <div className="form-group mb-3">
                        <label className="mb-1 ">
                          <strong>Password</strong>
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          value={dataOwner.password}
                          onChange={onChangeCreate}
                        />
                      </div>
                      <div className="form-group mb-1">
                        <label className="mb-1 ">
                          <strong>Password Confirm</strong>
                        </label>
                        <input
                          type="password"
                          name="confirmPass"
                          className="form-control"
                          value={dataOwner.confirmPass}
                          onChange={onChangeCreate}
                        />
                      </div>
                      {errors.password && <div>{errors.password}</div>}
                      <div className="text-center mt-1">
                      <Link to={`/login`}>
                            <button
                              type="submit"
                              className="btn btn-primary"
                              onClick={onCreate}
                            >
                              Sig me up
                            </button>
                          </Link>
                      </div>
                    </form>
                    <div className="new-account mt-1">
                      <p className="">
                        Already have an account?{" "}
                        <Link className="text-primary" to="/login">
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
    successMessage: state.auth.successMessage,
    showLoading: state.auth.showLoading,
  };
};

export default connect(mapStateToProps)(Register);

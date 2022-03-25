import React, { useState, useRef, useEffect } from "react";
import {  Dropdown } from "react-bootstrap";

import { Link } from "react-router-dom";
// import data from "./tableData.js";

const PatientTable = () => {
  const [data, setData] = useState(
    document.querySelectorAll("#patientTable_basic_table tbody tr")
  );
  const sort = 5;
  const activePag = useRef(0);
  const [test, settest] = useState(0);

  // Active data
  const chageData = (frist, sec) => {
    for (var i = 0; i < data.length; ++i) {
      if (i >= frist && i < sec) {
        data[i].classList.remove("d-none");
      } else {
        data[i].classList.add("d-none");
      }
    }
  };
  // use effect
  useEffect(() => {
    setData(document.querySelectorAll("#patientTable_basic_table tbody tr"));
   // chackboxFun();
  }, [test]);

  // Active pagginarion
  activePag.current === 0 && chageData(0, sort);
  // paggination
  let paggination = Array(Math.ceil(data.length / sort))
    .fill()
    .map((_, i) => i + 1);

  // Active paggination & chage data
  const onClick = (i) => {
    activePag.current = i;
    chageData(activePag.current * sort, (activePag.current + 1) * sort);
    settest(i);
  };
  const chackbox = document.querySelectorAll(".sorting_1 input");
  const motherChackBox = document.querySelector(".sorting_asc input");
  const chackboxFun = (type) => {
    for (let i = 0; i < chackbox.length; i++) {
      const element = chackbox[i];
      if (type === "all") {
        if (motherChackBox.checked) {
          element.checked = true;
        } else {
          element.checked = false;
        }
      } else {
        if (!element.checked) {
          motherChackBox.checked = false;
          break;
        } else {
          motherChackBox.checked = true;
        }
      }
    }
  };
  return (
    <div className="col-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Booking Table</h4>
          <div className="table-search">
								<div className="input-group search-area mb-xxl-0 mb-4">
									<input type="text" className="form-control" placeholder="Search here" />
									<span className="input-group-text"><Link to={"#"}><i className="flaticon-381-search-2"></i></Link></span>
								</div>
							</div>
        </div>
        
        <div className="card-body">
          <div className="w-100 table-responsive">
            <div id="patientTable_basic_table" className="dataTables_wrapper">
              <table
                id="example5"
                className="display dataTable no-footer w-100"
                style={{ minWidth: 845 }}
                role="grid"
                aria-describedby="example5_info"
              >
                <thead>
                  <tr role="row">
                    <th
                      className="sorting_asc"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-sort="ascending"
                      aria-label=": activate to sort column descending"
                      style={{ width: 32 }}
                    >
                      <div className="form-check custom-checkbox">
                        <input
                          type="checkbox"
                          onClick={() => chackboxFun("all")}
                          className="form-check-input"
                          id="checkAll"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkAll"
                        />
                      </div>
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Patient ID: activate to sort column ascending"
                      style={{ width: 73 }}
                    >
                      Customer ID
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Patient Name: activate to sort column ascending"
                      style={{ width: 100 }}
                    >
                      Customer Name
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Date Check in: activate to sort column ascending"
                      style={{ width: 100 }}
                    >
                      Time Check In
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Doctor Assgined: activate to sort column ascending"
                      style={{ width: 120 }}
                    >
                     Type Service
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Disease: activate to sort column ascending"
                      style={{ width: 62 }}
                    >
                      Service
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Status: activate to sort column ascending"
                      style={{ width: 106 }}
                    >
                      Status
                    </th>
                    <th
                      className="text-center"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Action: activate to sort column ascending"
                      style={{ width: 47 }}
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" className="odd">
                    <td className="sorting_1">
                      <div className="form-check custom-checkbox ">
                        <input
                          type="checkbox"
                          onClick={() => chackboxFun()}
                          className="form-check-input"
                          id="customCheckBox2"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox2"
                        />
                      </div>
                    </td>
                    <td>#P-00001</td>
                    <td>LiemChao</td>
                    <td>26/02/2020 12:42 AM</td>
                    <td>Massage</td>
                    <td>Massage body</td>
                    <td>
                    <span className="badge light badge-warning">
                        <i className="fa fa-circle text-warning me-1" />
                      {/* <span className="badge light badge-danger">
                        <i className="fa fa-circle text-danger me-1" /> */}
                       Pending
                      </span>
                    </td>
                    <td>
                    <div className="d-flex flex-row">
                      {/* <button className="p-2">liem</button>
                      <button className="p-1">liem</button> */}
												<div className="p-1">	<Link to={"#"} className="review-icon rounded-circle btn-success me-3"><i className="far fa-check-circle"></i></Link></div>
                          <div className="p-2"><Link to={"#"} className="review-icon rounded-circle btn-danger"><i className="far fa-times-circle"></i></Link></div>
												</div>
      
                    </td>
          
                  </tr>
                  <tr role="row" className="even">
                    <td className="sorting_1">
                      <div className="form-check custom-checkbox ">
                        <input
                          type="checkbox"
                          onClick={() => chackboxFun()}
                          className="form-check-input"
                          id="customCheckBox3"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox3"
                        />
                      </div>
                    </td>
                    <td>#P-00002</td>
                    <td>Anh Tuấn</td>
                    <td>26/03/2020 13:42 PM</td>
                    <td>Sauna</td>
                    <td>Sleep Sauna</td>
                    <td>
                      <span className="badge light badge-warning">
                        <i className="fa fa-circle text-warning me-1" />
                        Pending
                      </span>
                    </td>
                  
                    <td>
                    <div className="d-flex flex-row">
                      {/* <button className="p-2">liem</button>
                      <button className="p-1">liem</button> */}
												<div className="p-1">	<Link to={"#"} className="review-icon rounded-circle btn-success me-3"><i className="far fa-check-circle"></i></Link></div>
                          <div className="p-2"><Link to={"#"} className="review-icon rounded-circle btn-danger"><i className="far fa-times-circle"></i></Link></div>
												</div>
      
                    </td>
                  </tr>
                  <tr role="row" className="odd">
                    <td className="sorting_1">
                      <div className="form-check custom-checkbox ">
                        <input
                          type="checkbox"
                          onClick={() => chackboxFun()}
                          className="form-check-input"
                          id="customCheckBox4"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox4"
                        />
                      </div>
                    </td>
                    <td>#P-00003</td>
                    <td>TranTa</td>
                    <td>26/03/2020  &13:42 PM</td>
                    <td>Hair</td>
                    <td>Cut hair</td>
                    <td>
                      <span className="badge light badge-success">
                        <i className="fa fa-circle text-success me-1" />
                        Accepted
                      </span>
                    </td>
                   
                    <td>
                    <div className="d-flex flex-row">
                      {/* <button className="p-2">liem</button>
                      <button className="p-1">liem</button> */}
												<div className="p-1">	<Link to={"#"} className="review-icon rounded-circle btn-success me-3"><i className="far fa-check-circle"></i></Link></div>
                          <div className="p-2"><Link to={"#"} className="review-icon rounded-circle btn-danger"><i className="far fa-times-circle"></i></Link></div>
												</div>
      
                    </td>
                   
                  </tr>
                </tbody>
              </table>

              <div className="d-sm-flex text-center justify-content-between align-items-center mt-3">
                <div className="dataTables_info">
                  Showing {activePag.current * sort + 1} to{" "}
                  {data.length > (activePag.current + 1) * sort
                    ? (activePag.current + 1) * sort
                    : data.length}{" "}
                  of {data.length} entries
                </div>
                <div
                  className="dataTables_paginate paging_simple_numbers"
                  id="example5_paginate"
                >
                  <Link
                    className="paginate_button previous disabled"
                    to="/payment-table"
                    onClick={() =>
                      activePag.current > 0 && onClick(activePag.current - 1)
                    }
                  >
                    <i className="fa fa-angle-double-left" aria-hidden="true"></i>
                  </Link>
                  <span>
                    {paggination.map((number, i) => (
                      <Link
                        key={i}
                        to="/payment-table"
                        className={`paginate_button  ${
                          activePag.current === i ? "current" : ""
                        } `}
                        onClick={() => onClick(i)}
                      >
                        {number}
                      </Link>
                    ))}
                  </span>
                  <Link
                    className="paginate_button next"
                    to="/payment-table"
                    onClick={() =>
                      activePag.current + 1 < paggination.length &&
                      onClick(activePag.current + 1)
                    }
                  >
                    <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientTable;

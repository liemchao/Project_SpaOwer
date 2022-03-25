import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Tab, Nav } from "react-bootstrap";
import axios from "axios";

//import pic11 from './../../../images/hotel/pic11.jpg';
import AccountCaro from "../Booking/AccountCaro";

const Room = () => {
  const [data, setData] = useState(
    document.querySelectorAll("#room_wrapper tbody tr")
  );
  const sort = 10;
  const activePag = useRef(0);
  const [test, settest] = useState(0);
  const [dataTable2, setDataTable] = useState([]);
  const [searchValue, setSearchValue] = useState("");
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

  const onSearch = () => {
    console.log(searchValue);
    //api http://bookings3v1.somee.com/api/users?search=
    axios
      .get(
        `http://bookings3v1.somee.com/api/users?role=spa&search=${searchValue}`)
      .then((item) => {
        console.log(item.data);
        setDataTable(item.data.data);
        console.log(dataTable2);
      });
  };
  const onChangeSearch = (event) => {
    console.log(event);
    setSearchValue(event.target.value);
  };
  // use effect
  useEffect(() => {
    setData(document.querySelectorAll("#room_wrapper tbody tr"));
    axios
      .get("http://bookings3v1.somee.com/api/users?role=spa&PAGE_SIZE=10")
      .then((item1) => {
        setDataTable(item1.data.data);
      });
    //chackboxFun();
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

  const chackbox = document.querySelectorAll(".sorting_7 input");
  const motherChackBox = document.querySelector(".sorting_asc_7 input");
  // console.log(document.querySelectorAll(".sorting_1 input")[0].checked);
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
    <>
      <Tab.Container defaultActiveKey="All">
        <div className="row">
          <div className="col-xl-12">
            <div className="d-flex mb-4 justify-content-between align-items-center flex-wrap">
              <div className="card-tabs mt-3 mt-sm-0 mb-xxl-0 mb-4">
                <Nav as="ul" className="nav nav-tabs" role="tablist">
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link className="nav-link" eventKey="All">
                      All Account
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link className="nav-link" eventKey="Available">
                      Available Account{" "}
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link className="nav-link" eventKey="Booked">
                      No Activity Account
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <div className="table-search">
                <div className="input-group search-area mb-xxl-0 mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search here"
                    value={searchValue}
                    onChange={onChangeSearch}
                  />
                  <span className="input-group-text">
                    <div onClick={onSearch}>
                      <i className="flaticon-381-search-2"></i>
                    </div>
                  </span>
                </div>
              </div>
              <Link
                to={"create-account-spa"}
                className="btn btn-primary mb-xxl-0 mb-4"
              >
                <i className="far fa-file-word me-2"></i>Create
              </Link>
            </div>
            <Tab.Content>
              <Tab.Pane eventKey="All">
                <div className="table-responsive">
                  <div
                    id="room_wrapper"
                    className="dataTables_wrapper no-footer"
                  >
                    <table className="table card-table display mb-4 dataTablesCard booking-table room-list-tbl dataTable no-footer">
                      <thead>
                        <tr role="row">
                          <th className="sorting_asc_7 bg-none">
                            <div className="form-check  style-1">
                              <input
                                type="checkbox"
                                onClick={() => chackboxFun("all")}
                                className="form-check-input"
                                id="checkAll"
                                required=""
                              />
                            </div>
                          </th>
                          <th>User Name</th>
                          <th>Address</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Note</th>
                          <th>Status</th>
                          <th className="text-center">Action</th>
                          <th className="bg-none"></th>
                        </tr>
                      </thead>
                      <tbody id="accountSpa">
                        {dataTable2.map((item1) => {
                          return (
                            <tr role="row" className="odd">
                              <td className="sorting_7">
                                <div className="form-check   style-1">
                                  <input
                                    type="checkbox"
                                    onClick={() => chackboxFun()}
                                    className="form-check-input"
                                    id="customCheckBox21"
                                    required=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="guest-bx">
                                  <div
                                    id="carouselExampleControls"
                                    className="carousel slide me-3"
                                  >
                                    <div className="carousel-inner">
                                      <AccountCaro />
                                    </div>
                                  </div>
                                  <div>
                                    <span className="text-primary">
                                      {item1.id}
                                    </span>
                                    <h4 className="mb-0 mt-1">
                                      <Link
                                        className="text-black"
                                        to={"customer-detail"}
                                      >
                                        {item1.userName}
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <span className="fs-16">{item1.address}</span>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <span className="fs-16">{item1.email}</span>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <span className="fs-16">{item1.phone}</span>
                                </div>
                              </td>
                              <td>
                                {" "}
                                <div>
                                  <span className="text-warning">Working</span>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <span className="text-success">
                                    {item1.status}
                                  </span>
                                </div>
                              </td>
                              <td>
                                <button  class="btn btn-success"> Ban</button>
                                <button class="btn btn-warning" >UnBan</button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Available">
                <div className="table-responsive">
                  <div id="" className="dataTables_wrapper no-footer">
                    <table className="table card-table display mb-4 dataTablesCard booking-table room-list-tbl dataTable no-footer">
                      <thead>
                        <tr role="row">
                          <th className="sorting_asc_7 bg-none">
                            <div className="form-check  style-1">
                              <input
                                type="checkbox"
                                onClick={() => chackboxFun("all")}
                                className="form-check-input"
                                id="checkAll"
                                required=""
                              />
                            </div>
                          </th>
                          <th>User Name</th>
                          <th>Address</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Note</th>
                          <th>Status</th>
                          <th className="text-center">Action</th>
                          <th className="bg-none"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="odd">
                          <td className="sorting_7">
                            <div className="form-check   style-1">
                              <input
                                type="checkbox"
                                onClick={() => chackboxFun()}
                                className="form-check-input"
                                id="customCheckBox21"
                                required=""
                              />
                            </div>
                          </td>
                          <td>
                            <div className="guest-bx">
                              <div
                                id="carouselExampleControls"
                                className="carousel slide me-3"
                              >
                                <div className="carousel-inner">
                                  <AccountCaro />
                                </div>
                              </div>
                              <div>
                                <span className="text-primary">123</span>
                                <h4 className="mb-0 mt-1">
                                  <Link
                                    className="text-black"
                                    to={"customer-detail"}
                                  >
                                    Liem Thanh
                                  </Link>
                                </h4>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div>
                              <span className="fs-16">Q9,HCM</span>
                            </div>
                          </td>
                          <td>
                            <div>
                              <span className="fs-16">liemro9x@gmail.com</span>
                            </div>
                          </td>
                          <td>
                            <div>
                              <span className="fs-16">0123456</span>
                            </div>
                          </td>
                          <td>
                            {" "}
                            <div>
                              <span className="text-warning">Good</span>
                            </div>
                          </td>
                          <td>
                            <div>
                              <span className="text-success">Avaliable</span>
                            </div>
                          </td>
                          <td>
                          <button class="btn btn-success"> Ban</button>
                                <button class="btn btn-danger" >UnBan</button>
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
                        className="dataTables_paginate paging_simple_numbers mb-0"
                        id="example2_paginate"
                      >
                        <Link
                          className="paginate_button previous disabled"
                          to="/guest-list"
                          onClick={() =>
                            activePag.current > 0 &&
                            onClick(activePag.current - 1)
                          }
                        >
                          <i className="fa fa-angle-double-left"></i> Previous
                        </Link>
                        <span>
                          {paggination.map((number, i) => (
                            <Link
                              key={i}
                              to="/customer-detail"
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
                          to="/guest-list"
                          onClick={() =>
                            activePag.current + 1 < paggination.length &&
                            onClick(activePag.current + 1)
                          }
                        >
                          Next <i className="fa fa-angle-double-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Booked">
                <div className="table-responsive">
                  <div id="" className="dataTables_wrapper no-footer">
                    <table className="table card-table display mb-4 dataTablesCard booking-table room-list-tbl dataTable no-footer">
                      <thead>
                        <tr role="row">
                          <th className="sorting_asc_7 bg-none">
                            <div className="form-check  style-1">
                              <input
                                type="checkbox"
                                onClick={() => chackboxFun("all")}
                                className="form-check-input"
                                id="checkAll"
                                required=""
                              />
                            </div>
                          </th>
                          <th>User Name</th>
                          <th>Address</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Note</th>
                          <th>Status</th>
                          <th className="text-center">Action</th>
                          <th className="bg-none"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="odd">
                          <td className="sorting_7">
                            <div className="form-check   style-1">
                              <input
                                type="checkbox"
                                onClick={() => chackboxFun()}
                                className="form-check-input"
                                id="customCheckBox21"
                                required=""
                              />
                            </div>
                          </td>
                          <td>
                            <div className="guest-bx">
                              <div
                                id="carouselExampleControls"
                                className="carousel slide me-3"
                              >
                                <div className="carousel-inner">
                                  <AccountCaro />
                                </div>
                              </div>
                              <div>
                                <span className="text-primary">123</span>
                                <h4 className="mb-0 mt-1">
                                  <Link
                                    className="text-black"
                                    to={"customer-detail"}
                                  >
                                    Liem Thanh
                                  </Link>
                                </h4>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div>
                              <span className="fs-16">Q9,HCM</span>
                            </div>
                          </td>
                          <td>
                            <div>
                              <span className="fs-16">liemro9x@gmail.com</span>
                            </div>
                          </td>
                          <td>
                            <div>
                              <span className="fs-16">0123456</span>
                            </div>
                          </td>
                          <td>
                            {" "}
                            <div>
                              <span className="text-info">Don't do</span>
                            </div>
                          </td>
                          <td>
                            <div>
                              <span className="text-danger">Not Activity</span>
                            </div>
                          </td>
                          <td>
                          <button class="btn btn-success"> Ban</button>
                           <button class="btn btn-danger" >UnBan</button>
                          </td>
                        </tr>
                        <tr className="even">
                          <td className="sorting_7">
                            <div className="form-check   style-1">
                              <input
                                type="checkbox"
                                onClick={() => chackboxFun()}
                                className="form-check-input"
                                id="customCheckBox22"
                                required=""
                              />
                            </div>
                          </td>
                          <td>
                            <div className="guest-bx">
                              <div
                                id="carouselExampleControls"
                                className="carousel slide me-3"
                              >
                                <div className="carousel-inner">
                                  <AccountCaro />
                                </div>
                              </div>
                              <div>
                                <span className="text-primary">#0002</span>
                                <h4 className="mb-0 mt-1">
                                  <Link
                                    className="text-black"
                                    to={"customer-detail"}
                                  >
                                    Deluxe B-0004
                                  </Link>
                                </h4>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div>
                              <span className="fs-16">Double Bed</span>
                            </div>
                          </td>
                          <td>
                            <div>
                              <span className="fs-16">Floor G-05</span>
                            </div>
                          </td>
                          <td>
                            <div>
                              <span className="fs-16">
                                AC, Shower, Double Bed, Towel, Bathup,
                                <br /> Coffee Set, LED TV, Wifi
                              </span>
                            </div>
                          </td>
                          <td>
                            <div>
                              <span className="text-danger d-block">
                                Booked
                              </span>
                              <span className="fs-14 ">Oct 24th - 26th</span>
                            </div>
                          </td>
                          <td>
                          <button class="btn btn-success"> Ban</button>
                           <button class="btn btn-danger" >UnBan</button>
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
                        className="dataTables_paginate paging_simple_numbers mb-0"
                        id="example2_paginate"
                      >
                        <Link
                          className="paginate_button previous disabled"
                          to="/customer-detail"
                          onClick={() =>
                            activePag.current > 0 &&
                            onClick(activePag.current - 1)
                          }
                        >
                          <i className="fa fa-angle-double-left"></i> Previous
                        </Link>
                        <span>
                          {paggination.map((number, i) => (
                            <Link
                              key={i}
                              to="/customer-detail"
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
                          to="/guest-list"
                          onClick={() =>
                            activePag.current + 1 < paggination.length &&
                            onClick(activePag.current + 1)
                          }
                        >
                          Next <i className="fa fa-angle-double-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </>
  );
};
export default Room;

import React from "react";
import PageTitle from "../../../layouts/PageTitle";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductOrder = () => {
  const motherChackBox = document.querySelector(".product_order_single");
  const chackbox = document.querySelectorAll(".product_order");
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
    <div className="h-80">
      <PageTitle activeMenu="Product Order" motherMenu="Shop" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body " style={{ padding: "1.25rem" }}>
              <div className="table-responsive">
                <table className="table table-sm mb-0 table-responsive-lg ">
                  <thead>
                    <tr>
                      <th className="align-middle">
                        <div className="form-check custom-checkbox ms-1">
                          <input
                            type="checkbox"
                            onClick={() => chackboxFun("all")}
                            className="form-check-input  product_order_single"
                            id="checkAll"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkAll"
                          />
                        </div>
                      </th>
                      <th className="align-middle">Order</th>
                      <th className="align-middle pr-7">Date Checkin</th>
                      <th className="align-middle minw200">Service Type</th>
                      <th className="align-middle minw200">Service</th>
                      <th className="align-middle text-right">Amount</th>
                      <th className="align-middle text-right">Status</th>
                      <th className="align-middle text-right">Action</th>
                      <th className="no-sort" />
                    </tr>
                  </thead>
                  <tbody id="orders">
                    <tr className="btn-reveal-trigger">
                      <td className="py-2">
                        <div className="form-check custom-checkbox checkbox-success">
                          <input
                            type="checkbox"
                            onClick={() => chackboxFun()}
                            className="form-check-input product_order"
                            id="checkbox"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkbox"
                          />
                        </div>
                      </td>
                      <td className="py-2">
                        <Link to="/ecom-product-order">
                        </Link>{" "}
                         <strong>Liem Troll</strong>
                        <br />
                        <a href="mailto:ricky@example.com">ricky@example.com</a>
                      </td>
                      <td className="py-2">20/04/2020</td>
                      <td className="py-2">
                        Victomess of the masage body for you
                        <p className="mb-0 text-500">Via Flat Rate</p>
                      </td>
                      <td className="py-2 text-right">Massage</td>
                      <td className="py-2 text-right">$99</td>
                      <td className="py-2 text-right">
                        <span className="badge badge-success">
                          Completed
                          <span className="ms-1 fa fa-check" />
                        </span>
                      </td>
                  
                      <td className="py-2 text-right">
                        <Dropdown className="dropdown text-sans-serif">
                          <Dropdown.Toggle
                            variant=""
                            className="btn btn-primary i-false tp-btn-light sharp"
                            type="button"
                            id="order-dropdown-0"
                            data-toggle="dropdown"
                            data-boundary="viewport"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="18px"
                                height="18px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <rect x={0} y={0} width={24} height={24} />
                                  <circle fill="#000000" cx={5} cy={12} r={2} />
                                  <circle
                                    fill="#000000"
                                    cx={12}
                                    cy={12}
                                    r={2}
                                  />
                                  <circle
                                    fill="#000000"
                                    cx={19}
                                    cy={12}
                                    r={2}
                                  />
                                </g>
                              </svg>
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            className="dropdown-menu dropdown-menu-right border py-0"
                            aria-labelledby="order-dropdown-0"
                          >
                            <div className="py-2">
                              <Link
                                className="dropdown-item"
                                to="/ecom-product-order"
                              >
                                Completed
                              </Link>
                              <Link
                                className="dropdown-item"
                                to="/ecom-product-order"
                              >
                                Processing
                              </Link>
                             
                             
                              <Link
                                className="dropdown-item"
                                to="/ecom-product-order"
                              >
                                Pending
                              </Link>
                              <div className="dropdown-divider" />
                              <Link
                                className="dropdown-item text-danger"
                                to="/ecom-product-order"
                              >
                                Delete
                              </Link>
                            </div>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr className="btn-reveal-trigger">
                      <td className="py-2">
                        <div className="form-check custom-checkbox ">
                          <input
                            type="checkbox"
                            onClick={() => chackboxFun()}
                            className="form-check-input product_order"
                            id="checkbox1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkbox1"
                          />
                        </div>
                      </td>
                      <td className="py-2">
                        <Link to="/ecom-product-order">
                          <strong>#182</strong>
                        </Link>{" "}
                        by <strong>Kin Rossow</strong>
                        <br />
                        <a href="mailto:kin@example.com">kin@example.com</a>
                      </td>
                      <td className="py-2">20/04/2020</td>
                      <td className="py-2">
                        To make skin is very nice
                        <p className="mb-0 text-500">Via Free Shipping</p>
                      </td>
                      <td className="py-2 text-right">
                       SkinCare
                      </td>
                      <td className="py-2 text-right">$120</td>
                      <td>
                      <span className="badge badge-primary">
                          Processing
                          <span className="ms-1 fa fa-redo" />
                        </span>
                        </td>
                      <td className="py-2 text-right">
                        <Dropdown className="dropdown text-sans-serif">
                          <Dropdown.Toggle
                            variant=""
                            className="btn btn-primary i-false tp-btn-light sharp"
                            type="button"
                            id="order-dropdown-0"
                            data-toggle="dropdown"
                            data-boundary="viewport"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="18px"
                                height="18px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <rect x={0} y={0} width={24} height={24} />
                                  <circle fill="#000000" cx={5} cy={12} r={2} />
                                  <circle
                                    fill="#000000"
                                    cx={12}
                                    cy={12}
                                    r={2}
                                  />
                                  <circle
                                    fill="#000000"
                                    cx={19}
                                    cy={12}
                                    r={2}
                                  />
                                </g>
                              </svg>
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            className="dropdown-menu dropdown-menu-right border py-0"
                            aria-labelledby="order-dropdown-0"
                          >
                            <div className="py-2">
                              <Link
                                className="dropdown-item"
                                to="/ecom-product-order"
                              >
                                Completed
                              </Link>
                              <Link
                                className="dropdown-item"
                                to="/ecom-product-order"
                              >
                                Processing
                              </Link>
                              <Link
                                className="dropdown-item"
                                to="/ecom-product-order"
                              >
                                On Hold
                              </Link>
                              <Link
                                className="dropdown-item"
                                to="/ecom-product-order"
                              >
                                Pending
                              </Link>
                              <div className="dropdown-divider" />
                              <Link
                                className="dropdown-item text-danger"
                                to="/ecom-product-order"
                              >
                                Delete
                              </Link>
                            </div>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr className="btn-reveal-trigger">
                      <td className="py-2">
                        <div className="form-check custom-checkbox checkbox-secondary">
                          <input
                            type="checkbox"
                            onClick={() => chackboxFun()}
                            className="form-check-input product_order"
                            id="checkbox2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkbox2"
                          />
                        </div>
                      </td>
                      <td className="py-2">
                        <Link to="/ecom-product-order">
                          <strong>#183</strong>
                        </Link>{" "}
                        by <strong>Merry Diana</strong>
                        <br />
                        <a href="mailto:merry@example.com">merry@example.com</a>
                      </td>
                      <td className="py-2">30/04/2020</td>
                      <td className="py-2">
                      Massage for this time to relase with homie
                        <p className="mb-0 text-500">Via Link Road</p>
                      </td>
                      <td>Sasua</td>
                      <td className="py-2 text-right">$70</td>
                      <td className="py-2 text-right">
                        <span className="badge badge-secondary">
                          On Hold
                          <span className="ms-1 fa fa-ban" />
                        </span>
                      </td>
                      <td className="py-2 text-right">
                        <Dropdown className="dropdown text-sans-serif">
                          <Dropdown.Toggle
                            variant=""
                            className="btn btn-primary i-false tp-btn-light sharp"
                            type="button"
                            id="order-dropdown-0"
                            data-toggle="dropdown"
                            data-boundary="viewport"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="18px"
                                height="18px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <rect x={0} y={0} width={24} height={24} />
                                  <circle fill="#000000" cx={5} cy={12} r={2} />
                                  <circle
                                    fill="#000000"
                                    cx={12}
                                    cy={12}
                                    r={2}
                                  />
                                  <circle
                                    fill="#000000"
                                    cx={19}
                                    cy={12}
                                    r={2}
                                  />
                                </g>
                              </svg>
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            className="dropdown-menu dropdown-menu-right border py-0"
                            aria-labelledby="order-dropdown-0"
                          >
                            <div className="py-2">
                              <Link
                                className="dropdown-item"
                                to="/ecom-product-order"
                              >
                                Completed
                              </Link>
                              <Link
                                className="dropdown-item"
                                to="/ecom-product-order"
                              >
                                Processing
                              </Link>
                              <Link
                                className="dropdown-item"
                                to="/ecom-product-order"
                              >
                                On Hold
                              </Link>
                              <Link
                                className="dropdown-item"
                                to="/ecom-product-order"
                              >
                                Pending
                              </Link>
                              <div className="dropdown-divider" />
                              <Link
                                className="dropdown-item text-danger"
                                to="/ecom-product-order"
                              >
                                Delete
                              </Link>
                            </div>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr className="btn-reveal-trigger">
                      <td className="py-2">
                        <div className="form-check custom-checkbox  checkbox-warning">
                          <input
                            type="checkbox"
                            onClick={() => chackboxFun()}
                            className="form-check-input product_order"
                            id="checkbox3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkbox3"
                          />
                        </div>
                      </td>
                      <td className="py-2">
                        <Link to="/ecom-product-order">
                          <strong>#184</strong>
                        </Link>{" "}
                        by <strong>Bucky Robert</strong>
                        <br />
                        <a href="mailto:bucky@example.com">bucky@example.com</a>
                      </td>
                      <td className="py-2">30/04/2020</td>
                      <td className="py-2">
                        Cut for Men
                        <p className="mb-0 text-500">Via Free Shipping</p>
                      </td>
                    <td>Cut Hair</td>
                      <td className="py-2 text-right">$92</td>
                      <td className="py-2 text-right">
                        <span className="badge badge-warning">
                          Pending
                          <span className="ms-1 fas fa-stream" />
                        </span>
                      </td>
                      <td className="py-2 text-right">
                        <Dropdown className="dropdown text-sans-serif">
                          <Dropdown.Toggle
                            variant=""
                            className="btn btn-primary i-false tp-btn-light sharp"
                            type="button"
                            id="order-dropdown-0"
                            data-toggle="dropdown"
                            data-boundary="viewport"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="18px"
                                height="18px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <rect x={0} y={0} width={24} height={24} />
                                  <circle fill="#000000" cx={5} cy={12} r={2} />
                                  <circle
                                    fill="#000000"
                                    cx={12}
                                    cy={12}
                                    r={2}
                                  />
                                  <circle
                                    fill="#000000"
                                    cx={19}
                                    cy={12}
                                    r={2}
                                  />
                                </g>
                              </svg>
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            className="dropdown-menu dropdown-menu-right border py-0"
                            aria-labelledby="order-dropdown-0"
                          >
                            <div className="py-2">
                              <Link
                                className="dropdown-item"
                                to="/ecom-product-order"
                              >
                                Completed
                              </Link>
                              <Link
                                className="dropdown-item"
                                to="/ecom-product-order"
                              >
                                Processing
                              </Link>
                              <Link
                                className="dropdown-item"
                                to="/ecom-product-order"
                              >
                                On Hold
                              </Link>
                              <Link
                                className="dropdown-item"
                                to="/ecom-product-order"
                              >
                                Pending
                              </Link>
                              <div className="dropdown-divider" />
                              <Link
                                className="dropdown-item text-danger"
                                to="/ecom-product-order"
                              >
                                Delete
                              </Link>
                            </div>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                    
                  
                    
                   
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOrder;

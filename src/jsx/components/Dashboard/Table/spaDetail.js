import React from 'react';
import {Link} from 'react-router-dom';

///Images

import BookingSlider from '../../Dashboard/CustomerDetal/BookingSlider';
import SpaDetail from '../../Dashboard/CustomerDetal/SeviceList';


const SpaDetails = () =>{
	return(
		<>
			<div className="row">
				<div className="col-xl-9 col-xxl-8">
					<div className="card">	
						<div className="card-header border-0 pb-0">
							<h4 className="card-title">This Hot Service</h4>
						</div>
						<div className="card-body">
							<BookingSlider />
							<div className="d-flex mt-4 flex-wrap">
								<h4 className="card-title me-auto">Service Type</h4>
								<h5 className="card-title">Skincare, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</h5>
							</div>
						</div>
						<div className="card-body d-flex pt-0 align-items-center flex-wrap">
							<div className="d-flex align-items-center me-5 pe-4 mb-xxl-0 mb-2">
								<span className="key-icon me-3">
									<svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1585 6.41671C16.8932 2.80354 20.0899 0.0833735 23.9168 0.0833737C28.2868 0.0833739 31.8335 3.63004 31.8335 8.00004C31.8335 12.3685 28.2868 15.9167 23.9168 15.9167C20.0899 15.9167 16.8932 13.195 16.1585 9.58337L9.66683 9.58337L9.66683 12.75C9.66683 13.6225 8.9575 14.3334 8.0835 14.3334C7.2095 14.3334 6.50016 13.6225 6.50016 12.75L6.50016 9.58337L3.3335 9.58337L3.3335 12.75C3.3335 13.6225 2.62416 14.3334 1.75016 14.3334C0.876161 14.3334 0.166828 13.6225 0.166828 12.75L0.166828 8.00004C0.166828 7.12446 0.876162 6.41671 1.75016 6.41671L16.1585 6.41671ZM28.6668 8.00004C28.6668 10.6205 26.5388 12.75 23.9168 12.75C21.2948 12.75 19.1668 10.6205 19.1668 8.00004C19.1668 5.37804 21.2948 3.25004 23.9168 3.25004C26.5388 3.25004 28.6668 5.37804 28.6668 8.00004Z" fill="white"/>
									</svg>
								</span>
								<div>
									<h5 className="text-primary">Spa ID: #0052466623</h5>
									<h4 className="card-title mb-0">Liem Spa</h4>
								</div>
							</div>
							<div className="d-sm-flex d-block align-items-center">
								<div className="me-5 mb-sm-0 mb-3">
									<p className="mb-2"><i className="far fa-user scale3 me-3"></i>Employer</p>
									<h4 className="mb-0 card-title">20 Person</h4>
								</div>
								<div className="me-5 mb-sm-0 mb-3">
									<p className="mb-2"><i className="fas fa-bed scale3 me-3"></i>Sevice</p>
									<h4 className="mb-0 card-title">Nomarl</h4>
								</div>
								<div>
									<p className="mb-2"><i className="far fa-calendar-minus scale3 me-3"></i>Booking Date</p>
									<h4 className="mb-0 card-title">Oct 20, 2022</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-xxl-4">
					<div className="card profile-card">
						<div className="card-body">
							<div className="d-flex align-items-center">
								<img src="https://img.thuthuatphanmem.vn/uploads/2018/10/13/anh-dai-dien-dep-de-thuong-nhat_041803834.jpg" alt="" className="rounded profile-img me-4" />
								<div>
									<h5 className="text-primary">Spa Ower</h5>
									<h4 className="mb-0">Liem Chao</h4>
								</div>
							</div>
							<div className="row mt-4 pt-3">
								<div className="col-8">
									<Link to={"#"} className="btn btn-dark light btn-block">Edit Profile</Link>
								</div>
								<div className="col-4">
									<Link to={"#"} className="btn btn-danger btn-block"><i className="far fa-times-circle scale3"></i></Link>
								</div>
							</div>
							<ul className="user-info-list">
								<li>
									<i className="fas fa-phone-volume"></i>
									<span>+12 3456 678</span>
								</li>
								<li>
									<i className="far fa-envelope"></i>
									<span className="overflow-hidden">liemchao9x@mail.com</span>
								</li>
								<li>
									<i className="fas fa-map-marker-alt"></i>
									<span>Q9,Tp HCM, VietNamese</span>
								</li>
                                
							</ul>
						</div>
					</div>
				</div>
				<div className="col-xl-12">
					<div className="d-flex align-items-center rooms flex-wrap">
						<h4 className="me-auto mb-3">Service  Spa Ower</h4>
						<div className="mb-3">
							<Link to={"create-service"} className="btn btn-primary"><i className="far fa-file-word me-2"></i>Create Service</Link>	
						</div>
					</div>
					<SpaDetail />
				</div>	
			</div>	
		</>
	)
}
export default SpaDetails;
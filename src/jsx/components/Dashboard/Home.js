
import React, { Fragment } from "react";
import PageTitle from "../../layouts/PageTitle";
import PatientTable from "./Table/PatientTable";
 
const Home = () => {
	return(
		 <Fragment>
      <PageTitle
        activeMenu="Booking"
        motherMenu="Spa-ower"
        pageContent="Booking"
      />
      <div className="row"> 
        <PatientTable />  
      </div>
    </Fragment>
   
	);
};
export default Home;
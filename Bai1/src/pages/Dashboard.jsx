import React from "react";
import Overview from "../coponent/Overview";
import Datatable from "../coponent/Datatable";

const Dashboard = () => {
    return(
        <div className="content col-span-4 bg-white bg-opacity-80 p-2 border border-gray-300">

            <Overview></Overview>
            <Datatable></Datatable>
        </div>
    )
}
export default Dashboard;
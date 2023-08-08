import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Dashboard({users, setUsers}) {

  let navigate = useNavigate();

  // let handleDelete = (i)=>{
  //   let newArray = [...users]
  //   newArray.splice(i,1)
  //   setUsers(newArray)
  // }
  return <>
     <div id="content-wrapper" className="d-flex flex-column">

{/* <!-- Main Content --> */}
<div id="content">

    {/* <!-- Begin Page Content --> */}
    <div className="container-fluid">

        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Student & Teacher Management</h1>
            <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
              <i className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div> 

    </div>
    
</div>

</div>
  </>
}

export default Dashboard
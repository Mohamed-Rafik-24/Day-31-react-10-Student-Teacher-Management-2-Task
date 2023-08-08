import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Sidebar() {
    let navigate = useNavigate();
  return <>
     <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar"> 

{/* <!-- Divider --> */}
<hr className="sidebar-divider my-0"/>

{/* <!-- Nav Item - Dashboard --> */}
<Link to='./dashboard'>
<li className="nav-item active">
    <div className="nav-link">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></div>
</li>
</Link>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

{/* <!-- Heading --> */}
<div className="sidebar-heading">
    Interface
</div>

{/* <!-- Nav Item - Pages Collapse Menu --> */}

<Link to='./student-list'>
<li className="nav-item">
    <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i className="fa-solid fa-address-card"></i>
        <span>Student List</span>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>
            <a className="collapse-item" href="buttons.html">Buttons</a>
            <a className="collapse-item" href="cards.html">Cards</a>
        </div>
    </div>
</li>
</Link>

<Link to='./teacher-list'>
<li className="nav-item">
    <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
         <i className="fa-solid fa-address-card"></i>
        <span>Teacher List</span>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>
            <a className="collapse-item" href="buttons.html">Buttons</a>
            <a className="collapse-item" href="cards.html">Cards</a>
        </div>
    </div>
</li>
</Link>

<Link to='./add-student'>
<li className="nav-item">
    <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i className="fa-solid fa-user-plus"></i>
        <span>Add Student</span>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>
            <a className="collapse-item" href="buttons.html">Buttons</a>
            <a className="collapse-item" href="cards.html">Cards</a>
        </div>
    </div>
</li>
</Link>

<Link to='./add-teacher'>
<li className="nav-item">
    <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i className="fa-solid fa-user-plus"></i>
        <span>Add Teacher</span>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>
            <a className="collapse-item" href="buttons.html">Buttons</a>
            <a className="collapse-item" href="cards.html">Cards</a>
        </div>
    </div>
</li>
</Link>








</ul>
  </>
}

export default Sidebar
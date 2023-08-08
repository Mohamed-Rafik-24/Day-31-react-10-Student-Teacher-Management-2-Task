import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function TeacherList({teacher, setTeacher}) {

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
        <div style={{fontWeight:'bold'}}>Student Lists</div>
        <div className='container-fluid'>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>SL.NO</th>
          <th>Name</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>Expertise</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {
        teacher.map((e,i)=>{
          return <tr key={i}>
            <td>{i+1}</td>
            <td>{e.name}</td>
            <td>{e.phone}</td>
            <td>{e.email}</td>
            <td>{e.expertise}</td>
            <td>
            <Button variant="primary" onClick={()=>navigate(`/edit-teacher/${i}`)}>Edit</Button>{" "}
            <Button variant="danger" onClick={()=>{
              let newArray = [...teacher]
              newArray.splice(i,1)
              setTeacher(newArray)
            }}>Delete</Button>
            </td>
          </tr>
        })
       }
      </tbody>
    </Table>
        </div>

        

    </div>
    
</div>

</div>
  </>
}

export default TeacherList
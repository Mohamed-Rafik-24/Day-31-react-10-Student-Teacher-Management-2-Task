import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';

function AddStudent({users, setUsers}) {

  let navigate = useNavigate()
  let params = useParams();
  

  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [phone, setPhone] = useState("")
  let [course, setCourse] = useState("")
  let [batch, setBatch] = useState("")
  let [mentor, setMentor] = useState("")

  let handleSubmit = ()=>{
    let newUser = {name, email, phone, course, batch, mentor}
    let newArray = [...users]
    if (params.id !== undefined) {
          newArray.splice(params.id,1,newUser)
    }else {
      newArray.push(newUser)
    }
    setUsers(newArray)
    navigate("/dashboard")
  }



useEffect(()=>{
   if (params.id !== undefined) {
    setName(users[params.id].name)
    setEmail(users[params.id].email)
    setPhone(users[params.id].phone)
    setCourse(users[params.id].course)
    setBatch(users[params.id].batch)
    setMentor(users[params.id].mentor)
   }
},[])

  return <>
    <div className='container-fluid'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" placeholder="Enter Phone No" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Course</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={course} onChange={(e)=>setCourse(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={batch} onChange={(e)=>setBatch(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mentor</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={mentor} onChange={(e)=>setMentor(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
    </div>
  </>
}

export default AddStudent
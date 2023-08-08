import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';

function AddTeachers({teacher, setTeacher}) {

  let navigate = useNavigate()
  let params = useParams();
  

  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [phone, setPhone] = useState("")
  let [expertise, setExpertise] = useState("")

  let handleSubmit = ()=>{
    let newUser = {name, phone, email, expertise}
    let newArray = [...teacher]
    if (params.id !== undefined) {
          newArray.splice(params.id,1,newUser)
    }else {
      newArray.push(newUser)
    }
    setTeacher(newArray)
    navigate("/dashboard")
  }



useEffect(()=>{
   if (params.id !== undefined) {
    setName(teacher[params.id].name)
    setEmail(teacher[params.id].email)
    setPhone(teacher[params.id].phone)
    setExpertise(teacher[params.id].expertise)
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
        <Form.Label>mobile</Form.Label>
        <Form.Control type="number" placeholder="Enter Phone No" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Expertise</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={expertise} onChange={(e)=>setExpertise(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
    </div>
  </>
}

export default AddTeachers
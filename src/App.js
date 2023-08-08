import Sidebar from "./component/Sidebar";
import Dashboard from "./component/Dashboard"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import AddStudent from "./component/AddStudent";
import StudentList from "./component/StudentList";
import TeacherList from "./component/TeacherList";
import AddTeachers from "./AddTeachers";


function App() {
  let [users, setUsers] = useState([
    {
      name: 'mohamed',
      email: 'mohamed@gmail.com',
      phone: '987553235',
      course: 'FSD',
      batch: 'B53',
      mentor: 'mark',
      mentor_email: 'mark@gmail.com',
      mentor_mobile: '89075634577',
      expertise: 'full-stack'
      
    },
    {
      name: 'rafik',
      email: 'rafik@gmail.com',
      phone: '987587989',
      course: 'UI&UX',
      batch: 'B52',
      mentor: 'zef',
      mentor_email: 'zef@gmail.com',
      mentor_mobile: '8642342098',
      expertise: 'UI Design'
    },
    {
      name: 'arun',
      email: 'arun@gmail.com',
      phone: '9874366735',
      course: 'Data Science',
      batch: 'B51',
      mentor: 'tim',
      mentor_email: 'tim@gmail.com',
      mentor_mobile: '987653468',
      expertise: 'data science'
    },
    {
      name: 'david',
      email: 'david@gmail.com',
      phone: '987589063',
      course: 'AI',
      batch: 'B50',
      mentor: 'elon',
      mentor_email: 'elon@gmail.com',
      mentor_mobile: '111100009999',
      expertise: 'Artificial inteligence'
    },
  ])

  let [teacher, setTeacher] = useState([
      {
        name: 'mark',
        email: 'mark@gmail.com',
        phone: '89075634577',
        expertise: 'full-stack'
      },
      {
        name: 'zef',
        email: 'zef@gmail.com',
        phone: '8642342098',
        expertise: 'UI Design'
      },
      {
        name: 'tim',
        email: 'tim@gmail.com',
        phone: '987653468',
        expertise: 'data science'
      },
      {
        name: 'elon',
        email: 'elon@gmail.com',
        phone: '111100009999',
        expertise: 'Artificial inteligence'
      }

  ])
  return <>
  <BrowserRouter>
  <div id="wrapper">
    <Sidebar/>
    <Routes>
      <Route path="/dashboard" element={<Dashboard users={users} setUsers={setUsers}/>}/>
      <Route path="/student-list" element={<StudentList users={users} setUsers={setUsers}/>}/>
      <Route path="/teacher-list" element={<TeacherList teacher={teacher} setTeacher={setTeacher}/>}/>
      <Route path="add-student" element={<AddStudent users={users} setUsers={setUsers}/>}/>
      <Route path="edit-user/:id" element={<AddStudent users={users} setUsers={setUsers}/>}/>
      <Route path="add-teacher" element={<AddTeachers teacher={teacher} setTeacher={setTeacher}/>}/>
      <Route path="edit-teacher/:id" element={<AddTeachers teacher={teacher} setTeacher={setTeacher}/>}/>
      <Route path='*' element={<Navigate to='./dashboard'/>}/>
    </Routes>
  </div>
  </BrowserRouter>
  </>
}

export default App;

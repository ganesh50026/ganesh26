import {Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import StudentList from "./components/StudentList"
import Attendance from "./components/Attendance"
import AttendanceRecord from "./components/AttendanceRecord"
import About from "./components/About"
import Navbar from "./components/Navbar"
import "./css/Style.css"
import { useState } from "react"

const App = () => {
  const[attendance,setAttendance]=useState([])
  const updateAttendance=(updatedList)=>{
    setAttendance(updatedList)
  }
  return (
    <div>
      <h1 className="logo">STUDENT ATTENDANCE SYSTEM</h1>
      <Navbar />
      <div className="name">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/studentlist" element={<StudentList />}/>
          <Route path="/attendance" element={<Attendance updateAttendance={setAttendance} />}/>
          <Route path="/atrecord" element={<AttendanceRecord attendance={attendance} />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
        </div>
      
    </div>
  )
}
export default App
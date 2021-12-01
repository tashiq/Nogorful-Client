
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home/Home';
import AuthProvider from './Context/AuthProvider';
import Login from './Pages/Login/Login';
import SignIn from './Pages/SignIn/SignIn';
import Teachers from './Pages/Teachers/Teachers';
import Students from './Pages/Students/Students';
import Student from './Pages/Student/Student';
import Teacher from './Pages/Teacher/Teacher'
import AddStudent from './Pages/Add/AddStudent/AddStudent'
import UpdateStudent from './Pages/Update/UpdateStudent/UpdateStudent'
import AddTeacher from './Pages/Add/AddTeacher/AddTeacher';
import UpdateTeacher from './Pages/Update/UpdateTeacher/UpdateTeacher';
import AddBranch from './Pages/Add/AddBranch/AddBranch';
import UpdateBranches from './Pages/Update/UpdateBranches/UpdateBranches';
import AddEvent from './Pages/Add/AddEvent/AddEvent';
import Attendance from './Pages/Attendance/Attendance';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AttendanceDetails from './Pages/Dashboard/AttendanceDetails/AttendanceDetails';
import Branches from './Pages/Home/Branches/Branches';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} >
            <Route path="addevent" element={<AddEvent />} />
            <Route path="addbranch" element={<AddBranch />} />
            <Route path="addstudent" element={<AddStudent />} />
            <Route path="addteacher" element={<AddTeacher />} />
            <Route path="attendance/details" element={<AttendanceDetails />} />
            <Route path="update/student/:id" element={<UpdateStudent />} />
            <Route path="update/teacher/:id" element={<UpdateTeacher />} />
            <Route path="update/branches/" element={<Branches>Data</Branches>} />
            <Route path="update/branches/:id" element={<UpdateBranches />} />
          </Route>
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/students" element={<Students />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/students/:id" element={<Student />} />
          <Route path="/teachers/:id" element={<Teacher />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

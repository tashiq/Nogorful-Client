
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
import Branches from './Pages/Home/Branches/Branches';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AdminRoute from './AdminRoute/AdminRoute'
import MakeAdmin from './Pages/Dashboard/MakeAnAdmin/MakeAdmin';
import AttendanceHistory from './Pages/Dashboard/AttendanceDetails/AttendanceHistory';
import AddOCOD from './Pages/Add/AddOCOD/AddOCOD';
import AddWholeEvent from './Pages/Add/AddWholeEvent/AddWholeEvent';
import Chilren from './Pages/View/Children/Chilren';
import Donors from './Pages/View/Donors/Donors';
import ViewEvent from './Pages/View/vEvent/ViewEvent';
import Vevents from './Pages/View/VEvents/Vevents';
import Uevent from './Pages/Update/Uevent/Uevent';
import Vguest from './Pages/View/Vguest/Vguest';
import Uchild from './Pages/Update/Uchild/Uchild';
import Udonor from './Pages/Update/Udonor/Udonor';
import Uguest from './Pages/Update/Uguest/Uguest';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route element={<AdminRoute />}>
            <Route path="/dashboard" element={<Dashboard />} >
              <Route path="addevent" element={<AddEvent />} />
              <Route path="cmpltevent" element={<AddWholeEvent />} />
              <Route path="addbranch" element={<AddBranch />} />
              <Route path="addstudent" element={<AddStudent />} />
              <Route path="addteacher" element={<AddTeacher />} />
              <Route path="addocod" element={<AddOCOD />} />
              <Route path="update/branches/" element={<Branches>Data</Branches>} />
              <Route path="update/guest/:phone" element={<Uguest />} />
              <Route path="update/event/:name" element={<Uevent />} />
              <Route path="update/children/:id" element={<Uchild></Uchild>} />
              <Route path="update/donor/:phone" element={<Udonor />} />
              <Route path="view/guest/" element={<Vguest />} />
              <Route path="view/event/" element={<ViewEvent />} />
              <Route path="view/wholeevent/" element={<Vevents />} />
              <Route path="view/child/" element={<Chilren />} />
              <Route path="view/donor/" element={<Donors />} />
              <Route path="update/branches/:id" element={<UpdateBranches />} />
              <Route path="makeadmin" element={<MakeAdmin />} />
            </Route>
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/students" element={<Students />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/students/:id" element={<Student />} />
            <Route path="/teachers/:id" element={<Teacher />} />
            <Route path="update/student/:id" element={<UpdateStudent />} />
            <Route path="update/teacher/:id" element={<UpdateTeacher />} />
            <Route path="attendance-history" element={<AttendanceHistory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

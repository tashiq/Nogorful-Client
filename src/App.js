
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Shared/Footer/Footer';
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
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:id" element={<Student />} />
          <Route path="/teachers/:id" element={<Teacher />} />
          <Route path="/update/student/:id" element={<UpdateStudent />} />
          <Route path="/add/student" element={<AddStudent />} />
          <Route path="/add/teacher" element={<AddTeacher />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

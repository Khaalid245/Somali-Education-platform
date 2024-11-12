import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';  // Use the new Header component
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Courses from './pages/Courses';
import Settings from './pages/Settings';
import UploadCourse from './pages/UploadCourse';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header /> {/* Use the new Header component */}
          <div className="p-6">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/upload-course" element={<UploadCourse />} />
              
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

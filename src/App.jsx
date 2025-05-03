import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navbar';
import Student from './components/Student/Student';
import Viewer from './components/Viewer/Viewer';
import Faculty from './components/Faculty/Faculty';
import Admin from './components/Admin/Admin';
import Management from './components/Management/Management';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

const App = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Viewer />} />
                <Route path="/viewer" element={<Viewer />} />
                <Route path="/student" element={<Student />} />
                <Route path="/faculty" element={<Faculty />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/management" element={<Management />} />
            </Routes>
        </Router>
    );
};

export default App; 
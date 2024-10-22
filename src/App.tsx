import './App.css';
import Header from './components/Header.tsx';
import NavBar from './components/Nav.tsx';
import HomePage from './components/Home';
import ReferencesPage from "./components/Refrences.tsx";
import EmployeePage from "./components/Employment.tsx";
import AchievementPage from "./components/Achievements.tsx";
import EducationPage from "./components/Education.tsx";
import Calculator from "./components/Project.tsx";
import FooterPage from "./components/Footer.tsx";
import { createBrowserRouter, Route, Routes, RouterProvider, Link } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Employment" element={<EmployeePage />} />
                <Route path="/References" element={<ReferencesPage />} />
                <Route path="/Achievements" element={<AchievementPage />} />
                <Route path="/Education" element={<EducationPage />} />
                <Route path="/Project" element={<Calculator />} />
                <Route path="/Footer" element={<FooterPage />} />
            </Routes>
            <footer>
                <p>All rights reserved, <Link to="/Footer">© Copyright Credits</Link></p>
            </footer>
        </div>
    );
}

const router = createBrowserRouter(
    [{ path: "*", Component: Root }]
);

export default function App() {
    return (
        <RouterProvider router={router} />
    );
}

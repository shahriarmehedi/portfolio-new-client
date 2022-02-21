
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/home/HomePage';
import ProjectDetails from './components/home/Projects/ProjectDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />

          <Route path="*" element={<main style={{ padding: "1rem" }}><p>404 Nothing Found</p></main>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

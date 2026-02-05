import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';

function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: '50px', color: 'blue' }}>
        <h1>REACT IS MOUNTED</h1>
        <Routes>
          <Route path="/" element={<div>HOME COMPONENT LOADED</div>} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;

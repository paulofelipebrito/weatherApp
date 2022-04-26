import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Examples from './components/Examples';
import About from './components/About';
import Main from './components/Main';
import Weather from './components/Weather';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="about" element={<About />}/>
          <Route path="examples" element={<Examples />} />
          <Route index element={<Weather />} />
        </Routes>
    </Router>
  );
}

export default App;

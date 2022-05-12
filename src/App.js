
import './App.css';
import Navigation from './Components/Navigation'
import Home from './Components/Home';
import Docs from './Components/Docs';
import Products from './Components/Products';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
   <Router>
      <div className="App">
      <Navigation />
      <Routes>
      <Route exact path="/" element={<Home />} />
      {/* <Home /> */}
      <Route  path="/products" element={ <Products />} />
      <Route  path="/docs" element={<Docs />} />

      </Routes>
    </div>
   </Router>
  );
}

export default App;

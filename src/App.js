import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<h1>GHP4</h1>}/>
          <Route path="/perro" element={<img src="https://www.laguiadelvaron.com/wp-content/uploads/2018/03/facebook-omnitrix7-1520172526.jpg"></img>}/>
        </Routes>
      </Router>
    </div>
  );
}

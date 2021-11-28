import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './app.scss';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Mypage from './pages/mypage/Mypage';

export default function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/mypage" element={<Mypage/>} />
        </Routes>
      </div>
    </Router>
  )
}

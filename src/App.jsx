import './App.scss'
import { BrowserRouter, Routes, Route,Link} from "react-router-dom";
import Landing from './pages/Landing/Landing'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import LearnMore from './pages/LearnMore/LearnMore';
import Events from './pages/Events/Events';
import Test from './components/Header/Test';

function App() {
  return (
    <>
      {/* <Header></Header>
      <Test></Test> */}
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path = "/information" element={<LearnMore/>}/>
          <Route path = "/events" element={<Events/>}/>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;

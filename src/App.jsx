import './App.scss'
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Landing from './pages/Landing/Landing'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
     <Header></Header>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          {/* <Route path = "/information" element={<LearnMore/>}/> */}
        </Routes>
      </BrowserRouter>
     <Footer></Footer>
    </>
  )
}

export default App

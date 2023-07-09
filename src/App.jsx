import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"

function App() {

  return (
    <main className="mx-auto max-w-[1080px] bg-prime-bg h-screen flex flex-col justify-between">
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  )
}

export default App

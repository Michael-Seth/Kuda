import { Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import About from "./pages/About"
import Accounts from "./pages/Accounts"
import Borrow from "./pages/Borrow"
import Budget from "./pages/Budget"
import Card from "./pages/Card"
import Contact from "./pages/Contact"
import Help from "./pages/Help"
import Home from "./pages/Home"
import Investments from "./pages/Investments"
import Legal from "./pages/Legal"
import Payments from "./pages/Payments"
import Security from "./pages/Security"
import SignIn from "./pages/SignIn"
import Signup from "./pages/Signup"
import Spend from "./pages/Spend"

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/borrow" element={<Borrow />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/help" element={<Help />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/security" element={<Security />} />
        <Route path="/joinKuda" element={<Signup />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/spend" element={<Spend />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </Layout>
  )
}

export default App

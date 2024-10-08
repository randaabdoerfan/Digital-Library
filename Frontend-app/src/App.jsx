

import {Route, Routes} from "react-router-dom"
import Home from "./home/Home"
import About from "./componentrs/About"
import Contact from "./componentrs/Contact"
import Books from "./componentrs/Books/Books"
import SignUp from "./componentrs/SignUp"

function App() {
  return (
    <> 
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="books" element={<Books/>}/>
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="signup" element={<SignUp/>}/>
     </Routes>
    </>
  )
}

export default App

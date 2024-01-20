 import {BrowserRouter, Router, Routes, Route, Link} from "react-router-dom"


 const Home = () => {
    return <div>Home</div>
 }

 const About = () => {
    return <div>About</div>
 }

 const Contact = () => {
    return <div>Contact</div>
 }


 const RouterContainer = () => {
    return(<div>
        <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </BrowserRouter>
    </div>)
 }

 export default RouterContainer
import { BrowserRouter, Routes, Route } from "react-router-dom"


import Home from "../pages/Home"
import NotFound from "../pages/NotFound/NotFound"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"


export default function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}


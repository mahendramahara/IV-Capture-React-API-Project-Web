import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Images } from "./pages/images";
import { Videos } from "./pages/videos";
import { Copyright } from "./pages/copyright";
import { About } from "./pages/about";
import { VideoProps } from "./props/videoProps";

export const MyRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <MainLayout />
                }>
                    <Route path="/" element={
                        <Images/>
                    } />
                    <Route path="/video" element={
                        <Videos/>
                    } />
                    <Route path="/copyright" element={
                        <Copyright/>
                    } />
                    <Route path="/about" element={
                        <About/>
                    } />
                    <Route path="/demo" element={
                        <VideoProps/>
                    } />
                </Route>
            </Routes>
        </Router>
    )
}
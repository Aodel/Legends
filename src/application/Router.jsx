import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import DetailPage from "../pages/DetailPage";



export default function Router() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/legends/:id" element={<DetailPage />}/>
        </Routes>
    </BrowserRouter>
    )
}
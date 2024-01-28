import { BrowserRouter, Route, Routes } from "react-router-dom";
import Options from "../games/options";
import Hub from "../games/hub";

export default function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" index element={<Options />} />
                <Route path="/hub" index element={<Hub />} />
            </Routes>
        </BrowserRouter>
    )
}
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { Catalog } from "./pages/Catalog";
import { Cart } from "./pages/Cart";
import { UseState } from "./pages/UseState";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/cart" element={<Cart />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/" element={<UseState />} />
            </Routes>
        </Router>
    )
}
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import Login from "../views/Login";
import Base from "../components/Base";

export default function RouteList() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={
                <Auth>
                    <Base />
                </Auth>
            } 
            />
            <Route
            path="/"
            element={<Navigate to="/sample" />}
            />
        </Routes>
      </BrowserRouter>
    )
}

function Auth({ children }) {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    return children;
}
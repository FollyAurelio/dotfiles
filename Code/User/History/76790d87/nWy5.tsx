import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/auth-context";

export default function PublicRoute() {
    const { user } = useAuth();

    if (user) {
        return <Navigate to="/dashboard" replace />;
    }

    return <Outlet />;
}

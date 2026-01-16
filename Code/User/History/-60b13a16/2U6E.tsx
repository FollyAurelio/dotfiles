// src/routes/ProtectedRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/auth-context";

import { Spinner } from "@/components/ui/shadcn-io/spinner";

export default function ProtectedRoute() {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}>
                <Spinner />
            </div>
        );

    }

    if (!user) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}

// src/components/AdminDashboard.jsx
import { Outlet } from "react-router-dom";
import "../styles/Admin.scss";

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <Outlet />
    </div>
  );
}

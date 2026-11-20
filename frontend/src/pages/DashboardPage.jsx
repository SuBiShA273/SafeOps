import { useAuth } from '../context/AuthContext';
import AdminDashboard from './dashboards/AdminDashboard';
import MaintenanceManagerDashboard from './dashboards/MaintenanceManagerDashboard';
import TechnicianDashboard from './dashboards/TechnicianDashboard';
import SafetyOfficerDashboard from './dashboards/SafetyOfficerDashboard';

export default function DashboardPage() {
  const { user } = useAuth();
  switch (user?.role) {
    case 'ADMIN': return <AdminDashboard />;
    case 'MAINTENANCE_MANAGER': return <MaintenanceManagerDashboard />;
    case 'TECHNICIAN': return <TechnicianDashboard />;
    case 'SAFETY_OFFICER': return <SafetyOfficerDashboard />;
    default: return <div className="empty-state"><p>Unknown role. Please contact administrator.</p></div>;
  }
}

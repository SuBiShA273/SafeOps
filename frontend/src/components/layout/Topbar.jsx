import { useAuth } from '../../context/AuthContext';
import { useLocation } from 'react-router-dom';

const pageTitles = {
  '/dashboard': 'Dashboard',
  '/equipment': 'Equipment Management',
  '/maintenance-requests': 'Maintenance Requests',
  '/work-orders': 'Work Orders',
  '/preventive-maintenance': 'Preventive Maintenance',
  '/technician-records': 'Technician Records',
  '/safety': 'Safety Management',
  '/analytics': 'Analytics & Reports',
  '/users': 'User Management',
  '/profile': 'My Profile',
};

function getRoleLabel(role) {
  const labels = {
    ADMIN: 'Administrator',
    MAINTENANCE_MANAGER: 'Maintenance Manager',
    TECHNICIAN: 'Technician',
    SAFETY_OFFICER: 'Safety Officer',
  };
  return labels[role] || role;
}

export default function Topbar() {
  const { user } = useAuth();
  const location = useLocation();
  const title = pageTitles[location.pathname] || 'SafeOps';

  const initials = user?.fullName
    ? user.fullName.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()
    : '?';

  return (
    <header className="topbar">
      <div className="topbar-left">
        <span className="page-title">{title}</span>
      </div>
      <div className="topbar-right">
        <div className="topbar-user-info">
          <span className="topbar-user-name">{user?.fullName}</span>
          <span className="topbar-user-role">{getRoleLabel(user?.role)}</span>
        </div>
        <div className="topbar-avatar" title={user?.fullName}>{initials}</div>
      </div>
    </header>
  );
}

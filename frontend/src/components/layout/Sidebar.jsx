import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BuildIcon from '@mui/icons-material/Build';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EventNoteIcon from '@mui/icons-material/EventNote';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleIcon from '@mui/icons-material/People';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LogoutIcon from '@mui/icons-material/Logout';

const navItems = [
  { label: 'Dashboard', icon: DashboardIcon, path: '/dashboard', roles: ['ADMIN', 'MAINTENANCE_MANAGER', 'TECHNICIAN', 'SAFETY_OFFICER'] },
  { label: 'Equipment', icon: BuildIcon, path: '/equipment', roles: ['ADMIN', 'MAINTENANCE_MANAGER', 'TECHNICIAN', 'SAFETY_OFFICER'] },
  { label: 'Maintenance Requests', icon: AssignmentIcon, path: '/maintenance-requests', roles: ['ADMIN', 'MAINTENANCE_MANAGER', 'TECHNICIAN'] },
  { label: 'Work Orders', icon: EngineeringIcon, path: '/work-orders', roles: ['ADMIN', 'MAINTENANCE_MANAGER', 'TECHNICIAN'] },
  { label: 'Preventive Maintenance', icon: EventNoteIcon, path: '/preventive-maintenance', roles: ['ADMIN', 'MAINTENANCE_MANAGER'] },
  { label: 'Technician Records', icon: BarChartIcon, path: '/technician-records', roles: ['ADMIN', 'MAINTENANCE_MANAGER', 'TECHNICIAN'] },
  { label: 'Safety Management', icon: HealthAndSafetyIcon, path: '/safety', roles: ['ADMIN', 'SAFETY_OFFICER'] },
  { label: 'Analytics', icon: BarChartIcon, path: '/analytics', roles: ['ADMIN', 'MAINTENANCE_MANAGER'] },
  { label: 'User Management', icon: PeopleIcon, path: '/users', roles: ['ADMIN'] },
];

export default function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const visibleItems = navItems.filter(item => item.roles.includes(user?.role));

  return (
    <nav className="sidebar">
      <div className="sidebar-brand">
        <span className="sidebar-brand-name">SafeOps</span>
        <span className="sidebar-brand-company">Aegis Manufacturing Ltd.</span>
      </div>

      <div className="sidebar-nav">
        <span className="sidebar-section-label">Navigation</span>
        {visibleItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `sidebar-nav-item${isActive ? ' active' : ''}`}
            >
              <Icon className="nav-icon" fontSize="small" />
              {item.label}
            </NavLink>
          );
        })}
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        <LogoutIcon fontSize="small" />
        Sign Out
      </button>
    </nav>
  );
}

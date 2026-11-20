import { useState, useEffect } from 'react';
import { dashboardApi } from '../../services/api';
import BuildIcon from '@mui/icons-material/Build';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EngineeringIcon from '@mui/icons-material/Engineering';
import EventNoteIcon from '@mui/icons-material/EventNote';
import WarningIcon from '@mui/icons-material/Warning';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function MaintenanceManagerDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dashboardApi.maintenanceManagerStats()
      .then(res => setStats(res.data))
      .catch(() => setStats({ totalEquipment: 0, pendingRequests: 0, openWorkOrders: 0, upcomingMaintenance: 0, overdueMaintenance: 0 }))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <div className="page-header">
        <h1>Maintenance Manager Dashboard</h1>
        <p>Plant-wide maintenance operations, dispatch queue, and equipment oversight</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card ocean">
          <div className="stat-card-header">
            <span className="stat-card-label">Total Equipment</span>
            <div className="stat-card-icon-wrap ocean">
              <BuildIcon fontSize="small" />
            </div>
          </div>
          <div className="stat-card-body">
            <div className="stat-card-value">{loading ? '—' : stats?.totalEquipment ?? 0}</div>
            <div className="stat-card-footer">
              <span className="stat-card-badge ocean">Assets</span>
              <span className="stat-card-sub">Monitored plant machinery</span>
            </div>
          </div>
        </div>

        <div className="stat-card cobalt">
          <div className="stat-card-header">
            <span className="stat-card-label">Pending Requests</span>
            <div className="stat-card-icon-wrap cobalt">
              <AssignmentIcon fontSize="small" />
            </div>
          </div>
          <div className="stat-card-body">
            <div className="stat-card-value">{loading ? '—' : stats?.pendingRequests ?? 0}</div>
            <div className="stat-card-footer">
              <span className="stat-card-badge cobalt">Awaiting</span>
              <span className="stat-card-sub">Requests needing approval</span>
            </div>
          </div>
        </div>

        <div className="stat-card navy">
          <div className="stat-card-header">
            <span className="stat-card-label">Open Work Orders</span>
            <div className="stat-card-icon-wrap navy">
              <EngineeringIcon fontSize="small" />
            </div>
          </div>
          <div className="stat-card-body">
            <div className="stat-card-value">{loading ? '—' : stats?.openWorkOrders ?? 0}</div>
            <div className="stat-card-footer">
              <span className="stat-card-badge navy">Active</span>
              <span className="stat-card-sub">Currently assigned technicians</span>
            </div>
          </div>
        </div>

        <div className="stat-card steel">
          <div className="stat-card-header">
            <span className="stat-card-label">Upcoming Maintenance</span>
            <div className="stat-card-icon-wrap steel">
              <EventNoteIcon fontSize="small" />
            </div>
          </div>
          <div className="stat-card-body">
            <div className="stat-card-value">{loading ? '—' : stats?.upcomingMaintenance ?? 0}</div>
            <div className="stat-card-footer">
              <span className="stat-card-badge steel">Scheduled</span>
              <span className="stat-card-sub">Due in next 7 business days</span>
            </div>
          </div>
        </div>

        <div className="stat-card sapphire">
          <div className="stat-card-header">
            <span className="stat-card-label">Overdue Service</span>
            <div className="stat-card-icon-wrap sapphire">
              <WarningIcon fontSize="small" />
            </div>
          </div>
          <div className="stat-card-body">
            <div className="stat-card-value">{loading ? '—' : stats?.overdueMaintenance ?? 0}</div>
            <div className="stat-card-footer">
              <span className="stat-card-badge sapphire">Urgent</span>
              <span className="stat-card-sub">Past due PM schedules</span>
            </div>
          </div>
        </div>
      </div>

      <div className="coming-soon-banner">
        <InfoOutlinedIcon className="banner-icon" />
        <div>
          <strong>Phase Implementation Notice:</strong> Equipment management, maintenance request approvals, and technician dispatch will be implemented in Day 2–3.
        </div>
      </div>
    </div>
  );
}

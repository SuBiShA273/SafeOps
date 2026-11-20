import { useState, useEffect } from 'react';
import { dashboardApi } from '../../services/api';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function TechnicianDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dashboardApi.technicianStats()
      .then(res => setStats(res.data))
      .catch(() => setStats({ assignedWorkOrders: 0, pendingActivities: 0, completedActivities: 0 }))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <div className="page-header">
        <h1>Technician Dashboard</h1>
        <p>Your active assignments, maintenance checkpoints, and completed tasks</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card navy">
          <div className="stat-card-header">
            <span className="stat-card-label">Assigned Work Orders</span>
            <div className="stat-card-icon-wrap navy">
              <EngineeringIcon fontSize="small" />
            </div>
          </div>
          <div className="stat-card-body">
            <div className="stat-card-value">{loading ? '—' : stats?.assignedWorkOrders ?? 0}</div>
            <div className="stat-card-footer">
              <span className="stat-card-badge navy">Assigned</span>
              <span className="stat-card-sub">Active orders assigned to you</span>
            </div>
          </div>
        </div>

        <div className="stat-card cobalt">
          <div className="stat-card-header">
            <span className="stat-card-label">Pending Activities</span>
            <div className="stat-card-icon-wrap cobalt">
              <HourglassEmptyIcon fontSize="small" />
            </div>
          </div>
          <div className="stat-card-body">
            <div className="stat-card-value">{loading ? '—' : stats?.pendingActivities ?? 0}</div>
            <div className="stat-card-footer">
              <span className="stat-card-badge cobalt">In Queue</span>
              <span className="stat-card-sub">Checklists awaiting execution</span>
            </div>
          </div>
        </div>

        <div className="stat-card azure">
          <div className="stat-card-header">
            <span className="stat-card-label">Completed Activities</span>
            <div className="stat-card-icon-wrap azure">
              <CheckCircleOutlineIcon fontSize="small" />
            </div>
          </div>
          <div className="stat-card-body">
            <div className="stat-card-value">{loading ? '—' : stats?.completedActivities ?? 0}</div>
            <div className="stat-card-footer">
              <span className="stat-card-badge azure">Verified</span>
              <span className="stat-card-sub">Work successfully signed off</span>
            </div>
          </div>
        </div>
      </div>

      <div className="coming-soon-banner">
        <InfoOutlinedIcon className="banner-icon" />
        <div>
          <strong>Phase Implementation Notice:</strong> Work order logging, safety checklists, and equipment history retrieval will be active from Day 3 onwards.
        </div>
      </div>
    </div>
  );
}

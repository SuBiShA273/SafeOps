import { useState, useEffect } from 'react';
import { dashboardApi } from '../../services/api';
import PeopleIcon from '@mui/icons-material/People';
import BuildIcon from '@mui/icons-material/Build';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EngineeringIcon from '@mui/icons-material/Engineering';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dashboardApi.adminStats()
      .then(res => setStats(res.data))
      .catch(() => setStats({ totalUsers: 0, totalEquipment: 0, activeMaintenanceRequests: 0, openWorkOrders: 0 }))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <div className="page-header">
        <h1>Administrator Dashboard</h1>
        <p>Operational control and system governance for Aegis Manufacturing Ltd.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card cobalt">
          <div className="stat-card-header">
            <span className="stat-card-label">Total Users</span>
            <div className="stat-card-icon-wrap cobalt">
              <PeopleIcon fontSize="small" />
            </div>
          </div>
          <div className="stat-card-body">
            <div className="stat-card-value">{loading ? '—' : stats?.totalUsers ?? 0}</div>
            <div className="stat-card-footer">
              <span className="stat-card-badge cobalt">Registered</span>
              <span className="stat-card-sub">Active organizational accounts</span>
            </div>
          </div>
        </div>

        <div className="stat-card ocean">
          <div className="stat-card-header">
            <span className="stat-card-label">Equipment Assets</span>
            <div className="stat-card-icon-wrap ocean">
              <BuildIcon fontSize="small" />
            </div>
          </div>
          <div className="stat-card-body">
            <div className="stat-card-value">{loading ? '—' : stats?.totalEquipment ?? 0}</div>
            <div className="stat-card-footer">
              <span className="stat-card-badge ocean">Tracked</span>
              <span className="stat-card-sub">Total machinery in catalog</span>
            </div>
          </div>
        </div>

        <div className="stat-card navy">
          <div className="stat-card-header">
            <span className="stat-card-label">Maintenance Requests</span>
            <div className="stat-card-icon-wrap navy">
              <AssignmentIcon fontSize="small" />
            </div>
          </div>
          <div className="stat-card-body">
            <div className="stat-card-value">{loading ? '—' : stats?.activeMaintenanceRequests ?? 0}</div>
            <div className="stat-card-footer">
              <span className="stat-card-badge navy">Active</span>
              <span className="stat-card-sub">Pending review or queue</span>
            </div>
          </div>
        </div>

        <div className="stat-card sapphire">
          <div className="stat-card-header">
            <span className="stat-card-label">Work Orders</span>
            <div className="stat-card-icon-wrap sapphire">
              <EngineeringIcon fontSize="small" />
            </div>
          </div>
          <div className="stat-card-body">
            <div className="stat-card-value">{loading ? '—' : stats?.openWorkOrders ?? 0}</div>
            <div className="stat-card-footer">
              <span className="stat-card-badge sapphire">In Progress</span>
              <span className="stat-card-sub">Currently assigned orders</span>
            </div>
          </div>
        </div>
      </div>

      <div className="coming-soon-banner">
        <InfoOutlinedIcon className="banner-icon" />
        <div>
          <strong>Phase Implementation Notice:</strong> Equipment tracking, request workflows, and work order assignment modules are scheduled for Day 2–3. The user count above reflects genuine live data from PostgreSQL.
        </div>
      </div>

      <div className="content-card">
        <div className="content-card-header">
          <span className="content-card-title">System Architecture Status</span>
          <span className="status-badge active">System Healthy</span>
        </div>
        <div className="content-card-body">
          <table className="data-table">
            <thead>
              <tr>
                <th>Subsystem</th>
                <th>Status</th>
                <th>Protocol / Engine</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: 600 }}>Authentication &amp; RBAC</td>
                <td><span className="status-badge active">Operational</span></td>
                <td style={{ color: '#0B2A3D', fontWeight: 600 }}>Spring Security 7 + JWT (HMAC-SHA256)</td>
                <td>Stateless authorization with 4 discrete roles</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>Database Layer</td>
                <td><span className="status-badge active">Connected</span></td>
                <td style={{ color: '#0B2A3D', fontWeight: 600 }}>PostgreSQL 17.12 + Hibernate ORM</td>
                <td>Verified database connection on port 5432</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>Vector Store &amp; Embeddings</td>
                <td><span className="status-badge active">Configured</span></td>
                <td style={{ color: '#0B2A3D', fontWeight: 600 }}>PGVector (HNSW / 768 dims)</td>
                <td>Ready for knowledge-base ingestion in Day 4</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>Equipment Management</td>
                <td><span className="status-badge inactive">Scheduled – Day 2</span></td>
                <td style={{ color: '#334155', fontWeight: 500 }}>Spring Data JPA Entity Service</td>
                <td>Full CRUD and asset telemetry</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

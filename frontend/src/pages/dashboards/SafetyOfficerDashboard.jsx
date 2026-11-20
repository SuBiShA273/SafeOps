import { useState, useEffect } from 'react';
import { dashboardApi } from '../../services/api';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import WarningIcon from '@mui/icons-material/Warning';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function SafetyOfficerDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dashboardApi.safetyOfficerStats()
      .then(res => setStats(res.data))
      .catch(() => setStats({ pendingSafetyReviews: 0, reportedHazards: 0, documentationGaps: 0 }))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <div className="page-header">
        <h1>Safety Officer Dashboard</h1>
        <p>Plant safety governance, hazard tracking, and compliance checklist audits</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card ocean">
          <div className="stat-card-header">
            <span className="stat-card-label">Pending Safety Reviews</span>
            <div className="stat-card-icon-wrap ocean">
              <HealthAndSafetyIcon fontSize="small" />
            </div>
          </div>
          <div className="stat-card-body">
            <div className="stat-card-value">{loading ? '—' : stats?.pendingSafetyReviews ?? 0}</div>
            <div className="stat-card-footer">
              <span className="stat-card-badge ocean">Audit</span>
              <span className="stat-card-sub">Operations awaiting safety signoff</span>
            </div>
          </div>
        </div>

        <div className="stat-card sapphire">
          <div className="stat-card-header">
            <span className="stat-card-label">Reported Hazards</span>
            <div className="stat-card-icon-wrap sapphire">
              <WarningIcon fontSize="small" />
            </div>
          </div>
          <div className="stat-card-body">
            <div className="stat-card-value">{loading ? '—' : stats?.reportedHazards ?? 0}</div>
            <div className="stat-card-footer">
              <span className="stat-card-badge sapphire">Open Issues</span>
              <span className="stat-card-sub">Shop floor hazards needing action</span>
            </div>
          </div>
        </div>

        <div className="stat-card cobalt">
          <div className="stat-card-header">
            <span className="stat-card-label">Documentation Gaps</span>
            <div className="stat-card-icon-wrap cobalt">
              <FindInPageIcon fontSize="small" />
            </div>
          </div>
          <div className="stat-card-body">
            <div className="stat-card-value">{loading ? '—' : stats?.documentationGaps ?? 0}</div>
            <div className="stat-card-footer">
              <span className="stat-card-badge cobalt">Missing SOPs</span>
              <span className="stat-card-sub">Identified compliance documentation gaps</span>
            </div>
          </div>
        </div>
      </div>

      <div className="coming-soon-banner">
        <InfoOutlinedIcon className="banner-icon" />
        <div>
          <strong>Phase Implementation Notice:</strong> AI-powered safety checklist generation, hazard reports, and RAG SOP validation will be implemented in Day 5.
        </div>
      </div>
    </div>
  );
}

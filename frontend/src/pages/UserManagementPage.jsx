import { useState, useEffect } from 'react';
import { userApi } from '../services/api';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';

const ROLES = ['ADMIN', 'MAINTENANCE_MANAGER', 'TECHNICIAN', 'SAFETY_OFFICER'];

function getRoleLabel(role) {
  const labels = {
    ADMIN: 'Administrator',
    MAINTENANCE_MANAGER: 'Maintenance Manager',
    TECHNICIAN: 'Technician',
    SAFETY_OFFICER: 'Safety Officer',
  };
  return labels[role] || role;
}

export default function UserManagementPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ fullName: '', email: '', password: '', role: 'TECHNICIAN' });
  const [formError, setFormError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const fetchUsers = () => {
    setLoading(true);
    userApi.getAll()
      .then(res => setUsers(res.data))
      .catch(() => setUsers([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchUsers(); }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    setFormError('');
    if (!form.fullName || !form.email || !form.password) {
      setFormError('All fields are required.'); return;
    }
    setSubmitting(true);
    try {
      await userApi.create(form);
      setShowModal(false);
      setForm({ fullName: '', email: '', password: '', role: 'TECHNICIAN' });
      fetchUsers();
    } catch (err) {
      setFormError(err.response?.data?.message || 'Failed to create user.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleToggleStatus = async (user) => {
    try {
      await userApi.updateStatus(user.id, !user.enabled);
      fetchUsers();
    } catch {}
  };

  return (
    <div>
      <div className="page-header">
        <h1>User Management</h1>
        <p>Manage system user accounts and role assignments</p>
      </div>

      <div className="content-card">
        <div className="content-card-header">
          <span className="content-card-title">System Users</span>
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>
            <AddIcon fontSize="small" /> Add User
          </button>
        </div>
        <div className="content-card-body" style={{ padding: 0 }}>
          {loading ? (
            <div className="empty-state">
              <div className="spinner" style={{ borderTopColor: '#4682B4', borderColor: 'rgba(70,130,180,0.3)', width: 32, height: 32 }}></div>
            </div>
          ) : users.length === 0 ? (
            <div className="empty-state">
              <PersonIcon className="empty-state-icon" style={{ fontSize: 48 }} />
              <h3>No Users Found</h3>
              <p>Create the first user account using the button above.</p>
            </div>
          ) : (
            <div className="data-table-wrapper">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Created</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td style={{ fontWeight: 500 }}>{user.fullName}</td>
                      <td style={{ color: '#5A6A7A' }}>{user.email}</td>
                      <td>
                        <span className={`role-badge ${user.role}`}>{getRoleLabel(user.role)}</span>
                      </td>
                      <td>
                        <span className={`status-badge ${user.enabled ? 'active' : 'inactive'}`}>
                          {user.enabled ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td style={{ color: '#5A6A7A', fontSize: 12.5 }}>
                        {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : '—'}
                      </td>
                      <td>
                        <button
                          className={`btn btn-sm ${user.enabled ? 'btn-secondary' : 'btn-primary'}`}
                          onClick={() => handleToggleStatus(user)}
                        >
                          {user.enabled ? 'Disable' : 'Enable'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}>
          <div className="modal-box">
            <div className="modal-title">Add New User</div>
            {formError && (
              <div className="login-error-message" style={{ marginBottom: 16 }}>
                {formError}
              </div>
            )}
            <form onSubmit={handleCreate}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  className="form-input"
                  value={form.fullName}
                  onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))}
                  placeholder="John Smith"
                  disabled={submitting}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  className="form-input"
                  type="email"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  placeholder="john@aegismanufacturing.com"
                  disabled={submitting}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  className="form-input"
                  type="password"
                  value={form.password}
                  onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                  placeholder="Min. 8 characters"
                  disabled={submitting}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Role</label>
                <select
                  className="form-select"
                  value={form.role}
                  onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
                  disabled={submitting}
                >
                  {ROLES.map(r => (
                    <option key={r} value={r}>{getRoleLabel(r)}</option>
                  ))}
                </select>
              </div>
              <div className="modal-actions">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)} disabled={submitting}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                  {submitting ? <><span className="spinner"></span> Creating...</> : 'Create User'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

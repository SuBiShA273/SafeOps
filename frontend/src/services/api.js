import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('safeops_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('safeops_token');
      localStorage.removeItem('safeops_user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authApi = {
  login: (data) => api.post('/api/auth/login', data),
  me: () => api.get('/api/auth/me'),
};

export const userApi = {
  getAll: () => api.get('/api/users'),
  getById: (id) => api.get(`/api/users/${id}`),
  create: (data) => api.post('/api/users', data),
  updateStatus: (id, enabled) => api.patch(`/api/users/${id}/status`, { enabled }),
  updateRole: (id, role) => api.patch(`/api/users/${id}/role`, { role }),
};

export const dashboardApi = {
  adminStats: () => api.get('/api/dashboard/admin/stats'),
  maintenanceManagerStats: () => api.get('/api/dashboard/maintenance-manager/stats'),
  technicianStats: () => api.get('/api/dashboard/technician/stats'),
  safetyOfficerStats: () => api.get('/api/dashboard/safety-officer/stats'),
};

export default api;

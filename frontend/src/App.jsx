import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import AppLayout from './components/layout/AppLayout';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import UserManagementPage from './pages/UserManagementPage';
import PlaceholderPage from './pages/PlaceholderPage';
import './styles/global.css';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <AppLayout><DashboardPage /></AppLayout>
            </ProtectedRoute>
          } />
          <Route path="/users" element={
            <ProtectedRoute allowedRoles={['ADMIN']}>
              <AppLayout><UserManagementPage /></AppLayout>
            </ProtectedRoute>
          } />
          <Route path="/equipment" element={
            <ProtectedRoute>
              <AppLayout><PlaceholderPage title="Equipment Management" description="Track and manage all industrial equipment assets." scheduledDay="Day 2" /></AppLayout>
            </ProtectedRoute>
          } />
          <Route path="/maintenance-requests" element={
            <ProtectedRoute allowedRoles={['ADMIN', 'MAINTENANCE_MANAGER', 'TECHNICIAN']}>
              <AppLayout><PlaceholderPage title="Maintenance Requests" description="Submit and manage maintenance requests for equipment." scheduledDay="Day 3" /></AppLayout>
            </ProtectedRoute>
          } />
          <Route path="/work-orders" element={
            <ProtectedRoute allowedRoles={['ADMIN', 'MAINTENANCE_MANAGER', 'TECHNICIAN']}>
              <AppLayout><PlaceholderPage title="Work Orders" description="Create, assign, and track maintenance work orders." scheduledDay="Day 3" /></AppLayout>
            </ProtectedRoute>
          } />
          <Route path="/preventive-maintenance" element={
            <ProtectedRoute allowedRoles={['ADMIN', 'MAINTENANCE_MANAGER']}>
              <AppLayout><PlaceholderPage title="Preventive Maintenance" description="Manage scheduled preventive maintenance activities." scheduledDay="Day 4" /></AppLayout>
            </ProtectedRoute>
          } />
          <Route path="/technician-records" element={
            <ProtectedRoute allowedRoles={['ADMIN', 'MAINTENANCE_MANAGER', 'TECHNICIAN']}>
              <AppLayout><PlaceholderPage title="Technician Records" description="View and manage technician maintenance records." scheduledDay="Day 4" /></AppLayout>
            </ProtectedRoute>
          } />
          <Route path="/safety" element={
            <ProtectedRoute allowedRoles={['ADMIN', 'SAFETY_OFFICER']}>
              <AppLayout><PlaceholderPage title="Safety Management" description="Safety checklists, hazard reporting, and safety reviews." scheduledDay="Day 5" /></AppLayout>
            </ProtectedRoute>
          } />
          <Route path="/analytics" element={
            <ProtectedRoute allowedRoles={['ADMIN', 'MAINTENANCE_MANAGER']}>
              <AppLayout><PlaceholderPage title="Analytics & Reports" description="System-wide analytics, maintenance KPIs, and reports." scheduledDay="Day 6" /></AppLayout>
            </ProtectedRoute>
          } />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

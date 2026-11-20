import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import industrialHero from '../assets/industrial-hero.jpg';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ErrorIcon from '@mui/icons-material/Error';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import SecurityIcon from '@mui/icons-material/Security';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      await login(email.trim(), password);
      navigate('/dashboard');
    } catch (err) {
      const msg = err.response?.data?.message || 'Invalid email or password. Please try again.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-split-card">
        {/* Left Side: Industrial Hero Presentation */}
        <div 
          className="login-hero-side"
          style={{ backgroundImage: `linear-gradient(180deg, rgba(11, 42, 61, 0.50) 0%, rgba(11, 42, 61, 0.30) 40%, rgba(11, 42, 61, 0.92) 100%), url(${industrialHero})` }}
        >
          <div className="login-hero-header">
            <div className="login-hero-brand">
              <PrecisionManufacturingIcon className="login-brand-icon" />
              <div className="login-brand-text">
                <span className="login-brand-title">SafeOps</span>
                <span className="login-brand-subtitle">Aegis Manufacturing Ltd.</span>
              </div>
            </div>
            <div className="login-hero-badge">
              <SecurityIcon fontSize="small" />
              <span>Plant Operations</span>
            </div>
          </div>

          <div className="login-hero-content">
            <h2 className="login-hero-heading">AI-Powered Industrial Safety & Maintenance</h2>
            <p className="login-hero-description">
              Intelligent asset tracking, real-time safety compliance, and predictive maintenance management built for modern manufacturing.
            </p>
            <div className="login-hero-indicators">
              <span className="indicator-pill active"></span>
              <span className="indicator-dot"></span>
              <span className="indicator-dot"></span>
            </div>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="login-form-side">
          <div className="login-form-header">
            <div className="login-portal-tag">ENTERPRISE PORTAL</div>
            <h1 className="login-welcome-title">Welcome Back to SafeOps!</h1>
            <p className="login-welcome-subtitle">Sign in to your account to access plant operations</p>
          </div>

          {error && (
            <div className="login-error-message">
              <ErrorIcon fontSize="small" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="login-form">
            <div className="login-form-group">
              <label className="login-form-label" htmlFor="email">Your Email</label>
              <input
                id="email"
                type="email"
                className={`login-form-input${error ? ' error' : ''}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@aegismanufacturing.com"
                autoComplete="email"
                disabled={loading}
              />
            </div>

            <div className="login-form-group">
              <label className="login-form-label" htmlFor="password">Password</label>
              <div className="login-password-wrapper">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  className={`login-form-input${error ? ' error' : ''}`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  disabled={loading}
                />
                <button
                  type="button"
                  className="login-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <VisibilityOffIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />}
                </button>
              </div>
            </div>

            <div className="login-options-row">
              <label className="login-remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember Me</span>
              </label>
              <span className="login-system-tag">ISO 45001 Compliant</span>
            </div>

            <button type="submit" className="login-submit-btn" disabled={loading}>
              {loading ? (
                <span className="login-spinner-container">
                  <span className="spinner"></span> Signing in...
                </span>
              ) : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

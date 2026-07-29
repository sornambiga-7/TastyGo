import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import './Profile.css'

function Profile() {
  const { user, isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/profile' } })
    }
  }, [isAuthenticated, navigate])

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  if (!isAuthenticated || !user) return null

  return (
    <div className="page-wrap">
      <div className="container">
        <div className="profile-card">
          <div className="profile-avatar-large">{user.fullName.charAt(0).toUpperCase()}</div>
          <h1>{user.fullName}</h1>
          <div className="profile-detail-row">
            <span>Email</span>
            <span>{user.email}</span>
          </div>
          {user.phone && (
            <div className="profile-detail-row">
              <span>Phone</span>
              <span>{user.phone}</span>
            </div>
          )}
          <button className="btn-primary profile-logout" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Profile

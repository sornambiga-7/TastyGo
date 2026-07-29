import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import './Auth.css'

function Signup() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({})
  const { signup } = useAuth()
  const navigate = useNavigate()

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const validate = () => {
    const newErrors = {}
    if (!form.fullName.trim()) newErrors.fullName = 'Full name is required.'
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) newErrors.email = 'Enter a valid email address.'
    if (!/^\d{10}$/.test(form.phone.trim())) newErrors.phone = 'Enter a valid 10-digit phone number.'
    if (form.password.length < 6) newErrors.password = 'Password must be at least 6 characters.'
    if (form.confirmPassword !== form.password) newErrors.confirmPassword = 'Passwords do not match.'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    const result = signup({
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      password: form.password,
    })

    if (!result.success) {
      setErrors({ form: result.message })
      return
    }

    navigate('/')
  }

  return (
    <div className="page-wrap auth-page">
      <div className="auth-card">
        <h1>Create your account</h1>
        <p className="auth-subtitle">Sign up to start ordering from TastyGo</p>

        {errors.form && <div className="auth-error">{errors.form}</div>}

        <form onSubmit={handleSubmit} className="auth-form" noValidate>
          <label>
            Full Name
            <input type="text" value={form.fullName} onChange={handleChange('fullName')} placeholder="Jane Doe" />
            {errors.fullName && <span className="field-error">{errors.fullName}</span>}
          </label>

          <label>
            Email
            <input type="email" value={form.email} onChange={handleChange('email')} placeholder="you@example.com" />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </label>

          <label>
            Phone Number
            <input type="tel" value={form.phone} onChange={handleChange('phone')} placeholder="9876543210" />
            {errors.phone && <span className="field-error">{errors.phone}</span>}
          </label>

          <label>
            Password
            <input type="password" value={form.password} onChange={handleChange('password')} placeholder="At least 6 characters" />
            {errors.password && <span className="field-error">{errors.password}</span>}
          </label>

          <label>
            Confirm Password
            <input type="password" value={form.confirmPassword} onChange={handleChange('confirmPassword')} placeholder="Re-enter your password" />
            {errors.confirmPassword && <span className="field-error">{errors.confirmPassword}</span>}
          </label>

          <button type="submit" className="btn-primary auth-submit">Sign Up</button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup

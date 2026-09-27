function EmployeeStats({ count }) {
  return (
    <div className="employee-stat" aria-label={`${count} total employees`}>
      <span className="stat-label">TOTAL EMPLOYEES</span>
      <span className="stat-value">{count.toString().padStart(2, '0')}</span>
      <span className="stat-note"><span className="status-dot" /> Current team</span>
    </div>
  )
}

export default EmployeeStats
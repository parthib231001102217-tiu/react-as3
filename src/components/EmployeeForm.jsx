import { useState } from 'react'

const departments = ['Design', 'Engineering', 'Marketing', 'People', 'Sales', 'Finance']

function EmployeeForm({ employee, onSave, onCancel }) {
  const [form, setForm] = useState({
    name: employee?.name ?? '',
    email: employee?.email ?? '',
    department: employee?.department ?? 'Engineering',
    position: employee?.position ?? '',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSave(form)
  }

  return (
    <section className="form-panel" aria-labelledby="form-title">
      <div className="form-heading">
        <div>
          <p className="eyebrow">TEAM RECORD</p>
          <h2 id="form-title">{employee ? 'Edit employee' : 'Add an employee'}</h2>
        </div>
        <button className="icon-button close-button" type="button" onClick={onCancel} aria-label="Close form">×</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <label className="form-field">
            <span>Full name</span>
            <input name="name" value={form.name} onChange={handleChange} placeholder="e.g. Alex Morgan" required />
          </label>
          <label className="form-field">
            <span>Work email</span>
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="alex@northstar.co" required />
          </label>
          <label className="form-field">
            <span>Department</span>
            <select name="department" value={form.department} onChange={handleChange}>
              {departments.map((option) => <option key={option}>{option}</option>)}
            </select>
          </label>
          <label className="form-field">
            <span>Job title</span>
            <input name="position" value={form.position} onChange={handleChange} placeholder="e.g. Product Designer" required />
          </label>
        </div>
        <div className="form-actions">
          <button className="button button-subtle" type="button" onClick={onCancel}>Cancel</button>
          <button className="button button-primary" type="submit">{employee ? 'Save changes' : 'Add employee'}</button>
        </div>
      </form>
    </section>
  )
}

export default EmployeeForm
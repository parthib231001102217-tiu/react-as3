function getInitials(name) {
  return name.split(' ').map((part) => part[0]).slice(0, 2).join('').toUpperCase()
}

function EmployeeTable({ employees, onEdit, onDelete }) {
  if (employees.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-mark" aria-hidden="true">∅</span>
        <h2>No employees found</h2>
        <p>Try another search or department, or add a new team member.</p>
      </div>
    )
  }

  return (
    <div className="table-scroll">
      <table className="employee-table">
        <thead>
          <tr>
            <th scope="col">Employee</th>
            <th scope="col">Department</th>
            <th scope="col">Job title</th>
            <th scope="col" className="actions-heading"><span className="visually-hidden">Actions</span></th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <div className="person-cell">
                  <span className="avatar" aria-hidden="true">{getInitials(employee.name)}</span>
                  <span className="person-copy">
                    <strong>{employee.name}</strong>
                    <span>{employee.email}</span>
                  </span>
                </div>
              </td>
              <td><span className="department-tag">{employee.department}</span></td>
              <td className="position-cell">{employee.position}</td>
              <td>
                <div className="row-actions">
                  <button className="text-action" type="button" onClick={() => onEdit(employee)}>Edit</button>
                  <button className="text-action delete-action" type="button" onClick={() => onDelete(employee.id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeTable
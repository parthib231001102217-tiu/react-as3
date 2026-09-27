const departments = ['All departments', 'Design', 'Engineering', 'Marketing', 'People', 'Sales', 'Finance']

function EmployeeSearch({ searchTerm, department, onSearchChange, onDepartmentChange }) {
  return (
    <div className="search-toolbar">
      <label className="search-field">
        <span className="search-icon" aria-hidden="true">⌕</span>
        <span className="visually-hidden">Search employees</span>
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search people, roles, email..."
        />
      </label>
      <label className="filter-field">
        <span className="visually-hidden">Filter by department</span>
        <select value={department} onChange={(event) => onDepartmentChange(event.target.value)}>
          {departments.map((option) => <option key={option}>{option}</option>)}
        </select>
      </label>
    </div>
  )
}

export default EmployeeSearch
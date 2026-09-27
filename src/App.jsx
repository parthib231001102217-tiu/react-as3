import { useMemo, useState } from 'react'
import EmployeeForm from './components/EmployeeForm.jsx'
import EmployeeSearch from './components/EmployeeSearch.jsx'
import EmployeeStats from './components/EmployeeStats.jsx'
import EmployeeTable from './components/EmployeeTable.jsx'
import Header from './components/Header.tsx'
import './styles.css'

const initialEmployees = [
  { id: 1, name: 'Amara Johnson', email: 'amara.johnson@northstar.co', department: 'Design', position: 'Product Designer' },
  { id: 2, name: 'Theo Martinez', email: 'theo.martinez@northstar.co', department: 'Engineering', position: 'Frontend Engineer' },
  { id: 3, name: 'Priya Shah', email: 'priya.shah@northstar.co', department: 'Marketing', position: 'Brand Strategist' },
  { id: 4, name: 'Lucas Bennett', email: 'lucas.bennett@northstar.co', department: 'People', position: 'People Partner' },
]

function App() {
  const [employees, setEmployees] = useState(initialEmployees)
  const [searchTerm, setSearchTerm] = useState('')
  const [department, setDepartment] = useState('All departments')
  const [editingEmployee, setEditingEmployee] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const filteredEmployees = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    return employees.filter((employee) => {
      const matchesSearch = [employee.name, employee.email, employee.position]
        .some((value) => value.toLowerCase().includes(normalizedSearch))
      const matchesDepartment = department === 'All departments' || employee.department === department
      return matchesSearch && matchesDepartment
    })
  }, [department, employees, searchTerm])

  function handleSave(employeeDetails) {
    if (editingEmployee) {
      setEmployees((currentEmployees) => currentEmployees.map((employee) => (
        employee.id === editingEmployee.id ? { ...employee, ...employeeDetails } : employee
      )))
    } else {
      setEmployees((currentEmployees) => [
        ...currentEmployees,
        { id: Date.now(), ...employeeDetails },
      ])
    }

    setEditingEmployee(null)
    setIsFormOpen(false)
  }

  function handleEdit(employee) {
    setEditingEmployee(employee)
    setIsFormOpen(true)
  }

  function handleDelete(employeeId) {
    setEmployees((currentEmployees) => currentEmployees.filter((employee) => employee.id !== employeeId))
    if (editingEmployee?.id === employeeId) {
      setEditingEmployee(null)
      setIsFormOpen(false)
    }
  }

  function handleAdd() {
    setEditingEmployee(null)
    setIsFormOpen(true)
  }

  function handleCancel() {
    setEditingEmployee(null)
    setIsFormOpen(false)
  }

  return (
    <div className="app-shell">
      <Header onAddEmployee={handleAdd} />
      <main className="main-content">
        <section className="page-intro" aria-labelledby="page-title">
          <div>
            <p className="eyebrow">PEOPLE OPERATIONS</p>
            <h1 id="page-title">Employee directory</h1>
            <p className="page-subtitle">A clear view of the people building Northstar.</p>
          </div>
          <EmployeeStats count={employees.length} />
        </section>

        {isFormOpen && (
          <EmployeeForm
            key={editingEmployee?.id ?? 'new-employee'}
            employee={editingEmployee}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}

        <section className="directory-panel" aria-label="Employee directory results">
          <EmployeeSearch
            searchTerm={searchTerm}
            department={department}
            onSearchChange={setSearchTerm}
            onDepartmentChange={setDepartment}
          />
          <EmployeeTable
            employees={filteredEmployees}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
          <footer className="table-footer">
            Showing <strong>{filteredEmployees.length}</strong> of <strong>{employees.length}</strong> employees
          </footer>
        </section>
      </main>
    </div>
  )
}

export default App

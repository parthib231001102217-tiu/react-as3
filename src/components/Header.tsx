import type React from 'react'

function Header({ onAddEmployee }: {
  onAddEmployee: any;
}): React.JSX.Element {
  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="QUINFLO home">
        <span className="brand-mark" aria-hidden="true">Q</span>
        <span>quinflo<span className="brand-period">.</span></span>
      </a>
      <div className="topbar-actions">
        <span className="workspace-label">People workspace</span>
        <button className="button button-primary" type="button" onClick={onAddEmployee}>
          <span aria-hidden="true">+</span> Add employee
        </button>
      </div>
    </header>
  )
}

export default Header
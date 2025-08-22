import React from 'react'

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">EducaKids</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><a className="nav-link" href="#">Início</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Atividades</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Relatórios</a></li>
          </ul>
          <a className="btn btn-primary" href="#">Entrar</a>
        </div>
      </div>
    </nav>
  )
}

export function Container({ children, className }) {
  return <div className={`container ${className || ''}`}>{children}</div>
}

export function Card({ children, className }) {
  return <div className={`card shadow-sm ${className || ''}`}>{children}</div>
}

export function CardBody({ children, className }) {
  return <div className={`card-body ${className || ''}`}>{children}</div>
}

export function Button({ children, onClick, className }) {
  return <button className={`btn btn-primary ${className || ''}`} onClick={onClick}>{children}</button>
}

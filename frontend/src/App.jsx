import React from 'react'
import { Navbar, Container, Nav, Button } from './components/UI'
import Home from './pages/Home'

export default function App() {
  return (
    <>
      <Navbar />
      <Container className="py-4">
        <Home />
      </Container>
      <footer className="text-center text-muted py-4">
        <small>Plataforma Interativa de Apoio à Educação Infantil — Projeto Acadêmico</small>
      </footer>
    </>
  )
}

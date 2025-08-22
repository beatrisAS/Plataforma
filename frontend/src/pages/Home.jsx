import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, CardBody } from '../components/UI'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000'
})

export default function Home() {
  const [children, setChildren] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchChildren() {
      try {
        const { data } = await api.get('/api/children/')
        setChildren(data)
      } catch (e) {
        setError('Não foi possível conectar à API. Verifique se o backend está rodando.')
      }
    }
    fetchChildren()
  }, [])

  return (
    <div className="row g-3">
      <div className="col-12">
        <h1 className="h3 fw-bold">Bem-vindo(a) 👋</h1>
        <p className="text-muted">Este é um esqueleto inicial React + Bootstrap. A lista abaixo virá da API Django.</p>
      </div>

      {error && <div className="alert alert-warning">{error}</div>}

      <div className="col-12">
        <Card>
          <CardBody>
            <h2 className="h5 mb-3">Crianças</h2>
            {children.length === 0 ? (
              <p className="text-muted m-0">Ainda não há registros.</p>
            ) : (
              <ul className="list-group">
                {children.map((c) => (
                  <li key={c.id} className="list-group-item d-flex justify-content-between">
                    <span>{c.first_name} {c.last_name}</span>
                    <small className="text-muted">{c.birth_date || 'sem data'}</small>
                  </li>
                ))}
              </ul>
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

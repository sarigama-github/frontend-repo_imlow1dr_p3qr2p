import React, { useEffect, useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function App() {
  const [apiStatus, setApiStatus] = useState('Loading...')

  useEffect(() => {
    fetch(`${BACKEND_URL}/health`)
      .then(r => r.json())
      .then(data => setApiStatus(`Backend: ${data.status}`))
      .catch(() => setApiStatus('Backend: unreachable'))
  }, [])

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, sans-serif'
    }}>
      <div style={{textAlign:'center'}}>
        <h1 style={{fontSize: 32, fontWeight: 700, marginBottom: 8}}>Vite + React starter</h1>
        <p style={{opacity: 0.8, marginBottom: 16}}>{apiStatus}</p>
        <p>If you still see a white screen, try refreshing the page.</p>
      </div>
    </div>
  )
}

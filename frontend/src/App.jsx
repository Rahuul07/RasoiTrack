
import { useEffect, useState } from 'react'

function App() {
  const [health, setHealth] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/health')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Backend request failed')
        }
        return response.json()
      })
      .then((data) => setHealth(data))
      .catch((err) => setError(err.message))
  }, [])

  return (
    <div>
      <h1>RasoiTrack</h1>
      <h2>Frontend - Backend Connection Test</h2>

      {health && (
        <div>
          <p>Application: {health.application}</p>
          <p>Status: {health.status}</p>
          <p>Message: {health.message}</p>
        </div>
      )}

      {error && <p>Error: {error}</p>}

      {!health && !error && <p>Connecting to backend...</p>}
    </div>
  )
}

export default App

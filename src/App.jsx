import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({x: clientX, y: clientY})
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {(
      window.removeEventListener('pointermove', handleMove))
      setPosition({x: 0, y: 0})
    }
  }, [enabled])

  const handleChangeMouseFollower = () => {
    setEnabled(!enabled)
  }

  return (
    <main className="app">
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }} />
      <h1>Mouse follower in React</h1>
      <button onClick={handleChangeMouseFollower}>
        {enabled ? 'Desactivar mouse follower' : 'Activar mouse follower'}
      </button>
    </main>
  )
}

export default App


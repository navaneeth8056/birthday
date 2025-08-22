import React, { useState, useEffect } from 'react'
import CountdownTimer from './components/CountdownTimer'
import BirthdayMessage from './components/BirthdayMessage'
import FloatingHearts from './components/FloatingHearts'
import './App.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    // Opening animation delay
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const birthdayDate = new Date('2025-09-21T00:00:00')

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      <div className="background-animation">
        <div className="gradient-bg"></div>
        <div className="sparkles"></div>
      </div>
      
      <div className="container">
        <header className="header">
          <h1 className="title">
            <span className="title-icon">💖</span>
            <span className="title-text">Countdown for My Girl's Birthday</span>
            <span className="title-icon">💖</span>
          </h1>
          <p className="subtitle">September 21, 2025</p>
        </header>

        <CountdownTimer targetDate={birthdayDate} onComplete={() => setShowMessage(true)} />
        
        {showMessage && <BirthdayMessage />}
        
        <div className="quotes-section">
          <h2>💝 Special Message for Her 💝</h2>
          <div className="quotes-container">
            <div className="quote-card">
              <p>"You are the kind of person who makes the world a better place just by being in it. Advance Happy Birthday Gowri!"</p>
            </div>
          </div>
        </div>
      </div>

      <FloatingHearts />
    </div>
  )
}

export default App

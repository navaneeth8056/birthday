import React, { useState, useEffect } from 'react'
import './BirthdayMessage.css'

const BirthdayMessage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    const confettiTimer = setTimeout(() => {
      setShowConfetti(true)
    }, 500)

    return () => {
      clearTimeout(timer)
      clearTimeout(confettiTimer)
    }
  }, [])

  return (
    <div className={`birthday-message ${isVisible ? 'visible' : ''}`}>
      <div className="message-container">
        <div className="birthday-cake">🎂</div>
        <h1 className="birthday-title">🎉 HAPPY BIRTHDAY! 🎉</h1>
        <h2 className="birthday-age">22 Years Young!</h2>
        
        <div className="birthday-text">
          <p>Today is your special day, beautiful! 🌟</p>
          <p>May your 22nd year be filled with:</p>
          <ul className="wishes-list">
            <li>✨ Endless joy and laughter</li>
            <li>💕 Love that knows no bounds</li>
            <li>🌟 Dreams that come true</li>
            <li>🎯 Goals that you achieve</li>
            <li>💝 Moments that take your breath away</li>
          </ul>
          <p className="final-wish">
            You deserve all the happiness in the world! 💖
          </p>
        </div>

        <div className="celebration-icons">
          <span className="celebration-icon">🎊</span>
          <span className="celebration-icon">🎈</span>
          <span className="celebration-icon">🎁</span>
          <span className="celebration-icon">💐</span>
          <span className="celebration-icon">🎊</span>
        </div>
      </div>

      {showConfetti && (
        <div className="confetti-container">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="confetti-piece"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  )
}

export default BirthdayMessage

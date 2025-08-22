import React, { useState, useEffect } from 'react'
import './CountdownTimer.css'

const CountdownTimer = ({ targetDate, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [flipStates, setFlipStates] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: false
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate - new Date()
      
      if (difference <= 0) {
        onComplete()
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft()
      
      // Check for changes to trigger flip animations
      Object.keys(newTimeLeft).forEach(unit => {
        if (newTimeLeft[unit] !== timeLeft[unit]) {
          setFlipStates(prev => ({ ...prev, [unit]: true }))
          setTimeout(() => {
            setFlipStates(prev => ({ ...prev, [unit]: false }))
          }, 300)
        }
      })
      
      setTimeLeft(newTimeLeft)
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate, timeLeft, onComplete])

  const TimeUnit = ({ value, label, isFlipping }) => (
    <div className="time-unit">
      <div className="time-value-container">
        <div className={`time-value ${isFlipping ? 'flipping' : ''}`}>
          <div className="time-value-front">{value.toString().padStart(2, '0')}</div>
          <div className="time-value-back">{value.toString().padStart(2, '0')}</div>
        </div>
        <div className="time-value-shadow"></div>
      </div>
      <div className="time-label">{label}</div>
    </div>
  )

  return (
    <div className="countdown-container">
      <div className="countdown-title">
        <h2>⏰ Time Remaining ⏰</h2>
        <p>Until her special day arrives!</p>
      </div>
      
      <div className="countdown-timer">
        <TimeUnit 
          value={timeLeft.days} 
          label="Days" 
          isFlipping={flipStates.days}
        />
        <div className="separator">:</div>
        <TimeUnit 
          value={timeLeft.hours} 
          label="Hours" 
          isFlipping={flipStates.hours}
        />
        <div className="separator">:</div>
        <TimeUnit 
          value={timeLeft.minutes} 
          label="Minutes" 
          isFlipping={flipStates.minutes}
        />
        <div className="separator">:</div>
        <TimeUnit 
          value={timeLeft.seconds} 
          label="Seconds" 
          isFlipping={flipStates.seconds}
        />
      </div>

      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{
            width: `${Math.max(0, Math.min(100, ((targetDate - new Date()) / (targetDate - new Date('2024-09-21'))) * 100))}%`
          }}
        ></div>
      </div>
    </div>
  )
}

export default CountdownTimer

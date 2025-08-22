import React from 'react'
import './FloatingHearts.css'

const FloatingHearts = () => {
  const hearts = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    delay: Math.random() * 25,
    duration: 15 + Math.random() * 15,
    size: 15 + Math.random() * 35,
    left: Math.random() * 100
  }))

  const poppers = Array.from({ length: 20 }, (_, i) => ({
    id: `popper-${i}`,
    delay: Math.random() * 30,
    duration: 20 + Math.random() * 20,
    size: 20 + Math.random() * 40,
    left: Math.random() * 100
  }))

  return (
    <div className="floating-hearts">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            fontSize: `${heart.size}px`
          }}
        >
          {['💖', '💕', '💗', '💓', '💝'][Math.floor(Math.random() * 5)]}
        </div>
      ))}
      
      {poppers.map(popper => (
        <div
          key={popper.id}
          className="floating-popper"
          style={{
            left: `${popper.left}%`,
            animationDelay: `${popper.delay}s`,
            animationDuration: `${popper.duration}s`,
            fontSize: `${popper.size}px`
          }}
        >
          {['🎊', '🎈', '🎉', '✨', '🌟', '💫', '🎊', '🎈'][Math.floor(Math.random() * 8)]}
        </div>
      ))}
    </div>
  )
}

export default FloatingHearts

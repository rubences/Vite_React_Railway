import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

export const CounterBuyComponent = () => {

  const [hoursTens, setHoursTens] = useState(0)
  const [hoursOnes, setHoursOnes] = useState(0)
  const [minutesTens, setMinutesTens] = useState(0)
  const [minutesOnes, setMinutesOnes] = useState(0)
  const [secondsTens, setSecondsTens] = useState(0)
  const [secondsOnes, setSecondsOnes] = useState(0)

  let interval = useRef()
  
  const startTimer = () => {
    // const countdownDate = new Date('October 11, 2022 18:46:00').getTime()
    const countdownDate = new Date().getTime() + 5 * 60 * 60 * 24 * 7
    // if ( countdownDate < new Date().getTime() ) {
    //   clearInterval(interval.current)
    //   countdownDate.Date = new Date().getTime() + 1000
    // }

      interval = setInterval(() => {
      const now = new Date()
      const distance = Math.ceil((countdownDate - now) / 1000)

      // const seconds = seconds
      // const minutes = minutes
      // const hours = hours
      const seconds = distance % 60
      const minutes = Math.floor(distance / 60) % 60
      const hours = Math.floor(distance / 3600)

      if (distance < 0) {
        // if (seconds < 0) {
        // Stop our timer
        clearInterval(interval.current + 1000)
      }else{
        setHoursTens(Math.floor(hours / 10))
        setHoursOnes(hours % 10)
        setMinutesTens(Math.floor(minutes / 10))
        setMinutesOnes(minutes % 10)
        setSecondsTens(Math.floor(seconds / 10))
        setSecondsOnes(seconds % 10)
      }

    }, 1000)

  }

  useEffect(() => {
    startTimer()
    return () => {
      clearInterval(interval.current)
    }
  }, [])
  
  return (
    <>
      <div className="text-center">
                      <p className="text-light fs-4">75% DE DESCUENTO ANTES QUE TERMINE EL CONTADOR</p>
                      <p className="text-danger fs-4">NO TE PIERDAS LA PROMOCION</p>

                      <div className="d-flex justify-content-center container-count">

                        <div className="container-segment">
                            <div className="segment-title">Horas</div>
                            <div className="segment">
                            <div className="flip-card" data-hours-tens>
                                <div className="top">{hoursTens}</div>
                                <div className="bottom">{hoursTens}</div>
                            </div>
                            <div className="flip-card" data-hours-ones>
                                <div className="top">{hoursOnes}</div>
                                <div className="bottom">{hoursOnes}</div>
                            </div>
                            </div>
                        </div>
    
                        <div className="container-segment">
                            <div className="segment-title">Minutos</div>
                            <div className="segment">
                            <div className="flip-card" data-minutes-tens>
                                <div className="top">{minutesTens}</div>
                                <div className="bottom">{minutesTens}</div>
                            </div>
                            <div className="flip-card" data-minutes-ones>
                                <div className="top">{minutesOnes}</div>
                                <div className="bottom">{minutesOnes}</div>
                            </div>
                            </div>
                        </div>
    
                        <div className="container-segment">
                            <div className="segment-title">Segundos</div>
                            <div className="segment">
                            <div className="flip-card" data-seconds-tens>
                                <div className="top">{secondsTens}</div>
                                <div className="bottom">{secondsTens}</div>
                            </div>
                            <div className="flip-card" data-seconds-ones>
                                <div className="top">{secondsOnes}</div>
                                <div className="bottom">{secondsOnes}</div>
                            </div>
                            </div>
                        </div>
              </div>
    
      </div>
    </>
  )
}

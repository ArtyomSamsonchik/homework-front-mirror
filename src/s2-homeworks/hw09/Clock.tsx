import React, { useState } from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import { restoreState } from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
  const [timerId, setTimerId] = useState<number | undefined>()
  // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
  const [date, setDate] = useState(new Date(restoreState('hw9-date', Date.now())))
  const [show, setShow] = useState(false)

  const start = () => {
    // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
    // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
    const timerId = window.setInterval(() => setDate(new Date()))
    setTimerId(timerId)
  }

  const stop = () => {
    // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
    clearInterval(timerId)
    setTimerId(undefined)
  }

  const handleMouseEnter = () => {
    // пишут студенты // показать дату если наведена мышка
    setShow(true)
  }
  const handleMouseLeave = () => {
    // пишут студенты // спрятать дату если мышка не наведена
    setShow(false)
  }

  // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
  const stringTime = date.toLocaleTimeString('ru-RU') || <br />
  // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем
  const stringDate = date.toLocaleDateString('ru-RU') || <br />

  // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
  const stringDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date) || <br /> // пишут студенты
  const stringMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date) || <br /> // пишут студенты

  return (
    <div className={s.clock}>
      <div
        id={'hw9-watch'}
        className={s.watch}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span id={'hw9-day'}>{stringDay}</span>, <strong id={'hw9-time'}>{stringTime}</strong>
      </div>

      <div id={'hw9-more'} className={s.more}>
        {show ? (
          <>
            <span id={'hw9-month'}>{stringMonth}</span>, <span id={'hw9-date'}>{stringDate}</span>
          </>
        ) : (
          <br />
        )}
      </div>

      <div className={s.buttonsContainer}>
        <SuperButton
          id={'hw9-button-start'}
          className={s.button}
          disabled={!!timerId} // пишут студенты // задизэйблить если таймер запущен
          onClick={start}
        >
          start
        </SuperButton>
        <SuperButton
          id={'hw9-button-stop'}
          className={s.button}
          disabled={timerId === undefined} // пишут студенты // задизэйблить если таймер не запущен
          onClick={stop}
        >
          stop
        </SuperButton>
      </div>
    </div>
  )
}

export default Clock

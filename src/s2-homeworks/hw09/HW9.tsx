import React from 'react'
import Clock from './Clock'
import commonS from '../../common/Common.module.css'

/*
 * 1 - в файле Clock.tsx дописать функции stop, start, onMouseEnter, onMouseLeave
 * 2 - в файле Clock.tsx из переменной date вычислить значения stringTime, stringDate, stringDay, stringMonth
 * 3 - в файле Clock.tsx дизэйблить кнопки стоп / старт если таймер не запущен / запущен соответственно
 * 4 - сделать стили в соответствии с дизайном
 * */

const HW9 = () => {
  return (
    <div id={'hw9'}>
      <div className={commonS.headerContainer}>
        <h3 className={commonS.hwHeader}>Homework #9</h3>
      </div>

      <div className={commonS.container}>
        <Clock />
      </div>
    </div>
  )
}

export default HW9

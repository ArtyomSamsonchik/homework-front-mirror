import React, { useState } from 'react'
import s from './HW11.module.css'
import commonS from '../../common/Common.module.css'

import { restoreState } from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'
import { SliderProps } from '@mui/material'

/*
 * 1 - передать значения в оба слайдера
 * 2 - дописать типы и логику функции change
 * 3 - сделать стили в соответствии с дизайном
 * */

function HW11() {
  // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
  const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
  const [value2, setValue2] = useState(restoreState<number>('hw11-value2', 100))

  const handleChange: SliderProps['onChange'] = (_, value) => {
    // пишет студент // если пришёл массив - сохранить значения в оба useState, иначе в первый
    if (Array.isArray(value)) {
      const [value1, value2] = value
      setValue1(value1)
      setValue2(value2)
    } else {
      setValue1(value)
    }
  }

  return (
    <div id="hw11">
      <div className={commonS.headerContainer}>
        <h3 className={commonS.hwHeader}>Homework #11</h3>
      </div>
      <hr />

      <div className={s.hwContainer}>
        <div className={s.container}>
          <div className={s.wrapper}>
            <span id="hw11-value" className={s.number}>
              {value1}
            </span>
            <SuperRange
              id="hw11-single-slider"
              sx={{ width: 'min(250px, 100%)' }}
              // сделать так чтоб value1 изменялось // пишет студент
              value={value1}
              onChange={handleChange}
            />
            <span className={s.number} />
          </div>
          <div className={s.wrapper}>
            <span id="hw11-value-1" className={s.number}>
              {value1}
            </span>
            <SuperRange
              id="hw11-double-slider"
              sx={{ width: 'min(250px, 100%)' }}
              // сделать так чтоб value1/2 изменялось // пишет студент
              value={[value1, value2]}
              onChange={handleChange}
            />
            <span id="hw11-value-2" className={s.number}>
              {value2}
            </span>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default HW11

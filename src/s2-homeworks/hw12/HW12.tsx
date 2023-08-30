import React, { useEffect } from 'react'
import s from './HW12.module.css'
import commonS from '../../common/Common.module.css'

import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import { useDispatch, useSelector } from 'react-redux'
import { changeThemeId } from './bll/themeReducer'

/*
 * 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
 * 2 - получить themeId из редакса
 * 3 - дописать тип и логику функции change
 * 4 - передать пропсы в SuperSelect
 * */

const themes = [
  { id: 1, value: 'light' },
  { id: 2, value: 'blue' },
  { id: 3, value: 'dark' },
]

const HW12 = () => {
  // взять ид темы из редакса
  const themeId = 1

  const change = (id: any) => {
    // дописать функцию
  }

  useEffect(() => {
    document.documentElement.dataset.theme = themeId + ''
  }, [themeId])

  return (
    <div id={'hw12'}>
      <div id={'hw12-text'} className={commonS.headerContainer}>
        <h3>Homework #12</h3>
      </div>

      <div className={commonS.container}>
        <SuperSelect
          id={'hw12-select-theme'}
          className={s.select}
          // сделать переключение тем
        />
      </div>
    </div>
  )
}

export default HW12

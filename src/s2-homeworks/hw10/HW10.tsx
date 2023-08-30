import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppStoreType } from './bll/store'
import { loadingAC } from './bll/loadingReducer'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import commonS from '../../common/Common.module.css'

import { Loader } from './Loader'

/*
 * 1 - в файле loadingReducer.ts дописать типы и логику
 * 2 - получить isLoading из редакса
 * 3 - дописать функцию setLoading
 * 4 - сделать стили в соответствии с дизайном
 * */

const HW10 = () => {
  // useSelector, useDispatch // пишет студент
  const isLoading = false

  const setLoading = () => {
    // пишет студент // показать крутилку на 1,5 секунд
    // dispatch
    // setTimeout
  }

  return (
    <div id={'hw10'}>
      <div className={commonS.headerContainer}>
        <h3 className={commonS.hwHeader}>Homework #10</h3>
      </div>

      <div className={commonS.container}>
        {isLoading ? (
          <div id={'hw10-loading'}>
            <Loader />
          </div>
        ) : (
          <SuperButton id={'hw10-button-start-loading'} onClick={setLoading}>
            Set loading...
          </SuperButton>
        )}
      </div>
    </div>
  )
}

export default HW10

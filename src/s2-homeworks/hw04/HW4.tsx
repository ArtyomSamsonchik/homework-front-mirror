import React from 'react'
import commonS from '../../common/Common.module.css'
import s from './HW4.module.css'
import Stand from './Stand'

/*
 * 1 - понять (и простить) SuperInputText
 * 2 - в зависимости от типа и дизэйбла прицепить нужный класс в SuperButton.tsx (строка 21)
 * 3 - дописать onChangeCallback в SuperCheckbox.tsx чтоб оба чекбокса работали на стенде
 * 4 - сделать стили в соответствии с дизайном
 * */

const HW4 = () => {
  return (
    <div id={'hw4'}>
      <div className={commonS.headerContainer}>
        <h3 className={commonS.hwHeader}>Homework #4</h3>
      </div>
      <hr />
      {/*демонстрация возможностей компонент:*/}
      <div className={s.hwContainer}>
        <Stand />
      </div>
      <hr />
    </div>
  )
}

export default HW4

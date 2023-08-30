import React, { useState } from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import { restoreState, saveState } from './localStorage/localStorage'
import commonS from '../../common/Common.module.css'

import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s from './HW6.module.css'

/*
 * 1 - в файле SuperEditableSpan.tsx дописать логику функций onEnterCallback, onBlurCallback, onDoubleClickCallBack
 * 2 - дописать логику функции restore
 * 3 - сделать стили в соответствии с дизайном
 */

const HW6 = () => {
  const [value, setValue] = useState('')

  const save = () => {
    saveState('hw6-editable-span-value', value)
  }
  const restore = () => {
    // делают студенты
    setValue(restoreState('hw6-editable-span-value', value))
  }

  return (
    <div id={'hw6'}>
      <div className={commonS.headerContainer}>
        <h3 className={commonS.hwHeader}>Homework #6</h3>
      </div>
      <hr />

      {/*демонстрация возможностей компоненты:*/}
      <div className={s.hwContainer}>
        <div className={s.editableSpanContainer}>
          <SuperEditableSpan
            id={'hw6-spanable-input'}
            value={value}
            onChangeText={setValue}
            spanProps={{
              id: 'hw6-editable-span',
              defaultText: 'enter text...',
            }}
          />
        </div>

        <div className={s.buttonsContainer}>
          <SuperButton id={'hw6-save'} onClick={save}>
            Save to ls
          </SuperButton>
          <SuperButton id={'hw6-restore'} onClick={restore} xType={'secondary'}>
            Get from ls
          </SuperButton>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default HW6

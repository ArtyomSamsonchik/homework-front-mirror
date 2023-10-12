import { useState } from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import commonS from '../../common/Common.module.css'
import s from './HW7.module.css'

/*
 * 1 - в файле SuperSelect.tsx дописать логику функции onChangeCallback
 * 2 - в файле SuperRadio.tsx дописать логику функции onChangeCallback
 * 3 - в файле SuperRadio.tsx дописать name, checked, value (узнать для чего в радио name)
 * 4 - сделать стили в соответствии с дизайном
 * */

const arr = [
  { value: 1, label: 'Pre-Junior' },
  { value: 2, label: 'Junior' },
  { value: 3, label: 'Junior +' },
] // label может быть изменено

const HW7 = () => {
  const [value, setValue] = useState(1) // селект и радио должны работать синхронно

  return (
    <div id={'hw7'}>
      <div className={commonS.headerContainer}>
        <h3 className={commonS.hwHeader}>Homework #7</h3>
      </div>
      <hr />

      {/*демонстрация возможностей компонент:*/}
      <div className={s.hwContainer}>
        <SuperSelect
          id={'hw7-super-select'}
          className={s.select}
          options={arr}
          value={value}
          onChangeOption={(value) => setValue(+value)}
        />
        <SuperRadio
          id={'hw7-super-radio'}
          name={'hw7-radio'}
          options={arr}
          value={value}
          onChangeOption={(value) => setValue(+value)}
        />
      </div>
      <hr />
    </div>
  )
}

export default HW7

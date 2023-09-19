import s from './HW12.module.css'
import commonS from '../../common/Common.module.css'

import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import { useDispatch, useSelector } from 'react-redux'
import { changeThemeId } from './bll/themeReducer'
import { AppStoreType } from '../hw10/bll/store'
import { saveState } from '../hw06/localStorage/localStorage'

/*
 * 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
 * 2 - получить themeId из редакса
 * 3 - дописать тип и логику функции change
 * 4 - передать пропсы в SuperSelect
 * */

const themes: { value: number; label: string }[] = [
  { value: 1, label: 'light' },
  { value: 2, label: 'blue' },
  { value: 3, label: 'dark' },
]

const HW12 = () => {
  // взять ид темы из редакса
  const themeId = useSelector((state: AppStoreType) => state.theme.themeId)
  const dispatch = useDispatch()

  const handleThemeChange = (id: string) => {
    // дописать функцию
    dispatch(changeThemeId(+id))
    saveState('theme', id)
  }

  return (
    <div id="hw12">
      <div id="hw12-text" className={commonS.headerContainer}>
        <h3>Homework #12</h3>
      </div>
      <hr />

      <div className={s.hwContainer}>
        <p className={s.caption}>Выберите тему</p>
        <SuperSelect
          id="hw12-select-theme"
          className={s.select}
          // сделать переключение тем
          value={themeId}
          options={themes}
          onChangeOption={handleThemeChange}
        />
      </div>
      <hr />
    </div>
  )
}

export default HW12

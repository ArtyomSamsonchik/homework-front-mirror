import React from 'react'
import s from './App.module.css'
import HW5 from '../s2-homeworks/hw05/HW5'
import useAppTheme from '../hooks/useAppTheme'
import { useSelector } from 'react-redux'
import { AppStoreType } from '../s2-homeworks/hw10/bll/store'

function App() {
  const themeId = useSelector((state: AppStoreType) => state.theme.themeId)

  // homework autotests requires a number-based themeId from redux store.
  // So I introduced themeMap to provide more human-readable data-theme to CSS-selectors
  const themeMap = {
    1: 'light',
    2: 'light-blue',
    3: 'dark',
  }

  useAppTheme(themeId.toString(), themeMap)

  return (
    <div className={s.App}>
      {/*раскомментировать по ходу выполнения*/}
      {/*<HW1 />*/}
      {/*<HW2 />*/}
      {/*<HW3 />*/}
      {/*<HW4 />*/}

      {/*при выполнении дз 5 и более - закомментировать здесь дз 1-4, так как они есть внутри дз 5*/}
      <HW5 />
    </div>
  )
}

export default App

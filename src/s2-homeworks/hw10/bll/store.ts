import { loadingReducer } from './loadingReducer'
import { combineReducers, legacy_createStore } from 'redux'
import { themeReducer } from '../../hw12/bll/themeReducer'
import { restoreState } from '../../hw06/localStorage/localStorage'

const reducers = combineReducers({
  loading: loadingReducer, // hw10
  theme: themeReducer, // hw12
})

const restoreSession = (): AppStoreType => {
  const themeId = restoreState<string>('theme', '1')

  return {
    loading: { isLoading: false },
    theme: { themeId: +themeId },
  }
}

const store = legacy_createStore(reducers, restoreSession())

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev // для того чтобы автотесты видели состояние данных

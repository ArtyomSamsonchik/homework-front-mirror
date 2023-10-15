import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'
import { Layout } from './layout/Layout'

export const PATH = {
  PRE_JUNIOR: 'pre-junior',
  JUNIOR: 'junior',
  JUNIOR_PLUS: 'junior-plus',
} as const

export type AppPath = typeof PATH
export type AppPathValues = AppPath[keyof AppPath]

function Pages() {
  // Routes выбирает первый подходящий роут
  return (
    <Routes>
      {/*роутинг будут писать студенты*/}
      {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
      <Route path="/:flag?" element={<Layout />}>
        <Route index element={<PreJunior />} />

        {/*роуты для /pre-junior, /junior, /junior-plus*/}
        <Route path={PATH.PRE_JUNIOR} element={<PreJunior />} />
        <Route path={PATH.JUNIOR} element={<Junior />} />
        <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus />} />

        {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  )
}

export default Pages

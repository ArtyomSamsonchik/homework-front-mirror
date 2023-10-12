import React, { useState } from 'react'
import { homeWorkReducer } from './bll/homeWorkReducer'
import s from './HW8.module.css'
import commonS from '../../common/Common.module.css'
import { ReactComponent as ArrowUp } from './common/arrow-up.svg'
import { ReactComponent as ArrowDown } from './common/arrow-down.svg'

import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import User from './User'
import {
  SuperTable,
  SuperTableHead,
  SuperTableHeadCell,
} from '../hw15/common/SuperTable/SuperTable'

/*
 * 1 - дописать типы и логику (сортировка по имени, фильтрация по совершеннолетию) homeWorkReducer, проверить тестом
 * 2 - дописать компоненту User
 * 3 - сделать стили в соответствии с дизайном
 * */

export type UserType = {
  _id: number
  name: string
  age: number
}

type SortOrder = 'up' | 'down' | '18'

const initialPeople: UserType[] = [
  // студенты могут поменять имя/возраст/количество объектов, _id должны быть целочисленные
  { _id: 0, name: 'Кот', age: 3 },
  { _id: 1, name: 'Александр', age: 66 },
  { _id: 2, name: 'Коля', age: 16 },
  { _id: 3, name: 'Виктор', age: 44 },
  { _id: 4, name: 'Дмитрий', age: 40 },
  { _id: 5, name: 'Ирина', age: 55 },
]

const HW8 = () => {
  const [people, setPeople] = useState<UserType[]>(initialPeople)
  const [currentSort, setCurrentSort] = useState('' as SortOrder)

  const finalPeople = people.map((u: UserType) => <User key={u._id} u={u} />)

  const handleSortClick = (order: Exclude<SortOrder, '18'>) => () => {
    setPeople(homeWorkReducer(initialPeople, { type: 'sort', payload: order }))
    setCurrentSort(order)
  }

  const check18 = () => {
    setPeople(homeWorkReducer(initialPeople, { type: 'check', payload: 18 })) // совершеннолетние
    setCurrentSort('18')
  }

  const getButtonType = (order: SortOrder) => (order === currentSort ? '' : 'secondary')

  return (
    <div id="hw8">
      <div className={commonS.headerContainer}>
        <h3 className={commonS.hwHeader}>Homework #8</h3>
      </div>
      <hr />
      <div className={s.hwContainer}>
        <div className={s.innerContainer}>
          <div className={s.buttonsContainer}>
            <SuperButton
              id="hw8-button-up"
              className={s.button}
              onClick={handleSortClick('up')}
              xType={getButtonType('up')}
            >
              Sort&nbsp;<span className={s.buttonLabel}>up</span>
              <ArrowUp fill="currentColor" />
            </SuperButton>
            <SuperButton
              id="hw8-button-down"
              className={s.button}
              onClick={handleSortClick('down')}
              xType={getButtonType('down')}
            >
              Sort&nbsp;<span className={s.buttonLabel}>down</span>
              <ArrowDown fill="currentColor" />
            </SuperButton>
            <SuperButton
              id="hw8-button-18"
              className={s.button}
              onClick={check18}
              xType={getButtonType('18')}
            >
              <span className={s.buttonLabel}>Check</span>&nbsp;18+
            </SuperButton>
          </div>

          <SuperTable id="hw8-users" className={s.users}>
            <SuperTableHead>
              <tr>
                <SuperTableHeadCell className={s.headCell}>Name</SuperTableHeadCell>
                <SuperTableHeadCell className={s.headCell}>Age</SuperTableHeadCell>
              </tr>
            </SuperTableHead>

            <tbody>{finalPeople}</tbody>
          </SuperTable>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default HW8

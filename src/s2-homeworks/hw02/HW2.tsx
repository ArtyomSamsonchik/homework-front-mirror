import React, { useState } from 'react'
import Affairs from './affairs/Affairs'
import commonS from '../../common/Common.module.css'
import s from './HW2.module.css'

/*
 * 1 - описать типы AffairPriorityType, AffairType
 * 2 - указать нужный тип для defaultAffairs
 * 3 - дописать типы и логику функции filterAffairs и проверить её тестами
 * 4 - выполнить пункт 3 для функции deleteAffair
 * 5 - указать нужный тип в useState с affairs
 * 6 - дописать тип и логику функции deleteAffairCallback
 * 7 - в файле Affairs.tsx дописать типизацию пропсов
 * 8 - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow
 * 9 - в файле Affair.tsx дописать типизацию пропсов
 * 10 - в файле Affair.tsx дописать функции deleteCallback и использовать
 * 11 - в файле Affair.tsx отобразить приходящие данные
 * */

// types
export type AffairPriorityType = 'high' | 'middle' | 'low' // need to fix any
export type AffairType = {
  _id: number // need to fix any
  name: string // need to fix any
  priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [
  // need to fix any
  { _id: 1, name: 'React', priority: 'high' }, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
  { _id: 2, name: 'anime', priority: 'low' },
  { _id: 3, name: 'games', priority: 'low' },
  { _id: 4, name: 'work', priority: 'high' },
  { _id: 5, name: 'html & css', priority: 'middle' },
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
  // need to fix any
  if (filter === 'all') return affairs

  return affairs.filter((affair) => affair.priority === filter) // need to fix
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
  // need to fix any

  return affairs.filter((affair) => affair._id !== _id) // need to fix
}

function HW2() {
  const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
  const [filter, setFilter] = useState<FilterType>('all')

  const filteredAffairs = filterAffairs(affairs, filter)

  const deleteAffairCallback = (_id: number) => {
    // need to fix any
    // need to fix
    setAffairs(deleteAffair(affairs, _id))
  }

  return (
    <div id={'hw2'}>
      <div className={commonS.headerContainer}>
        <h3 className={commonS.hwHeader}>Homework #2</h3>
      </div>
      <hr />
      <div className={s.hwContainer}>
        <Affairs
          data={filteredAffairs}
          setFilter={setFilter}
          deleteAffairCallback={deleteAffairCallback}
          filter={filter}
        />
      </div>
      <hr />
    </div>
  )
}

export default HW2

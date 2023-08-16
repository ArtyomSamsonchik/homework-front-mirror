import React from 'react'
import Affair from './affair/Affair'
import { AffairType, FilterType } from '../HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
  data: AffairType[] // need to fix any
  setFilter: (filter: FilterType) => void
  deleteAffairCallback: (_id: number) => void
  filter: FilterType
}

function Affairs({ data: affairs, setFilter, deleteAffairCallback, filter }: AffairsPropsType) {
  const setAll = () => {
    // need to fix
    setFilter('all')
  }
  const setHigh = () => {
    // need to fix
    setFilter('high')
  }
  const setMiddle = () => {
    // need to fix
    setFilter('middle')
  }
  const setLow = () => {
    // need to fix
    setFilter('low')
  }

  const cnAll = s.button + ' ' + s.all + (filter === 'all' ? ' ' + s.active : '')
  const cnHigh = s.button + ' ' + s.high + (filter === 'high' ? ' ' + s.active : '')
  const cnMiddle = s.button + ' ' + s.middle + (filter === 'middle' ? ' ' + s.active : '')
  const cnLow = s.button + ' ' + s.low + (filter === 'low' ? ' ' + s.active : '')

  const mappedAffairs = affairs.map((a: AffairType) => (
    <Affair
      key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
      affair={a}
      deleteAffairCallback={deleteAffairCallback}
    />
  ))

  return (
    <div>
      <div className={s.buttonContainer}>
        <button id={'hw2-button-all'} onClick={setAll} className={cnAll}>
          All
        </button>
        <button id={'hw2-button-high'} onClick={setHigh} className={cnHigh}>
          High
        </button>
        <button id={'hw2-button-middle'} onClick={setMiddle} className={cnMiddle}>
          Middle
        </button>
        <button id={'hw2-button-low'} onClick={setLow} className={cnLow}>
          Low
        </button>
      </div>
      <div className={s.affairs}>{mappedAffairs}</div>
    </div>
  )
}

export default Affairs

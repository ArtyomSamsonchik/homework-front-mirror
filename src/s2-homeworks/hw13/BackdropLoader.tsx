import s from './HW13.module.css'
import { Loader } from '../hw10/Loader'
import React from 'react'

export const BackdropLoader = () => {
  return (
    <div className={s.backdropContainer}>
      <div className={s.backdrop}></div>
      <Loader className={s.loader} />
    </div>
  )
}

import s from './BackdropLoader.module.css'
import { Loader } from '../Loader/Loader'
import React from 'react'

export const BackdropLoader = () => {
  return (
    <div className={s.backdropContainer}>
      <div className={s.backdrop}></div>
      <Loader className={s.spinner} />
    </div>
  )
}

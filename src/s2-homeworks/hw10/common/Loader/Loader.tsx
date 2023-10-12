import { ComponentProps } from 'react'
import s from './Loader.module.css'

export const Loader = ({ className, ...props }: ComponentProps<'div'>) => (
  <div className={`${s.loader} ${className || ''}`} {...props} />
)

import { ComponentPropsWithoutRef, FC } from 'react'
import s from './SuperTable.module.css'

export const SuperTable: FC<ComponentPropsWithoutRef<'table'>> = ({ className, ...props }) => {
  const finalClassName = `${s.table} ${className ?? ''}`

  return <table className={finalClassName} {...props} />
}

export const SuperTableHead: FC<ComponentPropsWithoutRef<'thead'>> = ({ className, ...props }) => {
  const finalClassName = `${s.thead} ${className ?? ''}`

  return <thead className={finalClassName} {...props} />
}

export const SuperTableHeadCell: FC<ComponentPropsWithoutRef<'th'>> = ({ className, ...props }) => {
  const finalClassName = `${s.headCell} ${className ?? ''}`

  return <th className={finalClassName} {...props} />
}

export const SuperTableRow: FC<ComponentPropsWithoutRef<'tr'>> = ({ className, ...props }) => {
  const finalClassName = `${s.tbodyRow} ${className ?? ''}`

  return <tr className={finalClassName} {...props} />
}

export const SuperTableCell: FC<ComponentPropsWithoutRef<'td'>> = ({ className, ...props }) => {
  const finalClassName = `${s.cell} ${className ?? ''}`

  return <td className={finalClassName} {...props} />
}

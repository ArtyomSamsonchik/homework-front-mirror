import { ComponentPropsWithoutRef, forwardRef } from 'react'
import s from './SuperTable.module.css'

export const SuperTable = forwardRef<HTMLTableElement, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...props }, ref) => {
    const finalClassName = `${s.table} ${className ?? ''}`

    return <table ref={ref} className={finalClassName} {...props} />
  },
)

export const SuperTableHead = forwardRef<
  HTMLTableSectionElement,
  ComponentPropsWithoutRef<'thead'>
>(({ className, ...props }, ref) => {
  const finalClassName = `${s.thead} ${className ?? ''}`

  return <thead ref={ref} className={finalClassName} {...props} />
})

export const SuperTableHeadCell = forwardRef<HTMLTableCellElement, ComponentPropsWithoutRef<'th'>>(
  ({ className, ...props }, ref) => {
    const finalClassName = `${s.headCell} ${className ?? ''}`

    return <th ref={ref} className={finalClassName} {...props} />
  },
)

export const SuperTableRow = forwardRef<HTMLTableRowElement, ComponentPropsWithoutRef<'tr'>>(
  ({ className, ...props }, ref) => {
    const finalClassName = `${s.tbodyRow} ${className ?? ''}`

    return <tr ref={ref} className={finalClassName} {...props} />
  },
)

export const SuperTableCell = forwardRef<HTMLTableCellElement, ComponentPropsWithoutRef<'td'>>(
  ({ className, ...props }, ref) => {
    const finalClassName = `${s.cell} ${className ?? ''}`

    return <td ref={ref} className={finalClassName} {...props} />
  },
)

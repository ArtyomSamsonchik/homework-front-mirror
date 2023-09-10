import React, { ChangeEvent, ComponentPropsWithoutRef, forwardRef, ElementRef } from 'react'
import s from './SuperSelect.module.css'

type SuperSelectOption = { value: number | string; label: string }

type SuperSelectPropsType = ComponentPropsWithoutRef<'select'> & {
  options?: SuperSelectOption[]
  onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = forwardRef<
  ElementRef<'select'>,
  SuperSelectPropsType
>(({ options = [], className, onChange, onChangeOption, ...restProps }, ref) => {
  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    // делают студенты
    onChange?.(e)
    onChangeOption?.(e.currentTarget.value)
  }

  const finalClassName = `${s.select} ${className || ''}`

  return (
    <div className={s.wrapper}>
      <select ref={ref} className={finalClassName} onChange={onChangeCallback} {...restProps}>
        {options.map((o) => (
          <option id={'hw7-option-' + o.value} className={s.option} key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  )
})

export default SuperSelect

import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан

type SuperButtonPropsType = ComponentPropsWithoutRef<'button'> & {
  xType?: 'red' | 'secondary' | 'default' | (string & {})
}

const SuperButton = forwardRef<ElementRef<'button'>, SuperButtonPropsType>(
  (
    {
      xType,
      className,
      disabled,
      ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    },
    ref,
  ) => {
    // const finalClassName = s.button + (disabled ? s.disabled : xType === 'red' ? s.red : s.default)
    xType ||= 'default'

    // prettier-ignore
    const finalClassName = [
      s[xType as keyof typeof s],
      disabled ? s.disabled : '',
      className
  ].join(' ')

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={finalClassName}
        {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
      />
    )
  },
)

export default SuperButton

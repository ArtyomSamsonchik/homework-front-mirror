import { ChangeEvent, ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import s from './SuperCheckbox.module.css'

// тип пропсов обычного инпута
type SuperCheckboxPropsType = Omit<ComponentPropsWithoutRef<'input'>, 'type'> & {
  onChangeChecked?: (checked: boolean) => void
  inputClassName?: string
  spanClassName?: string
}

const SuperCheckbox = forwardRef<ElementRef<'input'>, SuperCheckboxPropsType>(
  (
    {
      onChange,
      onChangeChecked,
      className,
      spanClassName,
      inputClassName,
      children, // в эту переменную попадёт текст, типизировать не нужно так как он типизирован в React.FC
      id,
      ...restProps // все остальные пропсы попадут в объект restProps
    },
    ref,
  ) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
      // задачка на написание онченджа
      onChange?.(e)
      onChangeChecked?.(e.currentTarget.checked)
    }

    const finalLabelClassName = `${s.label} ${className ?? ''}`
    const finalSpanClassName = `${s.spanClassName} ${spanClassName ?? ''}`

    return (
      <label className={finalLabelClassName}>
        <input
          ref={ref}
          id={id}
          type={'checkbox'}
          className={inputClassName}
          onChange={onChangeCallback}
          {...restProps} // отдаём инпуту остальные пропсы если они есть (checked например там внутри)
        />
        {children && (
          <span id={id ? id + '-span' : undefined} className={finalSpanClassName}>
            {children}
          </span>
        )}
      </label> // благодаря label нажатие на спан передастся в инпут
    )
  },
)

export default SuperCheckbox

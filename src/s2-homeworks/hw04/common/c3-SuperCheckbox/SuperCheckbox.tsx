import { ChangeEvent, forwardRef } from 'react'
import { ReactComponent as CheckedIcon } from './checked.svg'
import s from './SuperCheckbox.module.css'

// тип пропсов обычного инпута
// TODO: add ForwardRef to every super component
type DefaultInputPropsType = JSX.IntrinsicElements['input']

type SuperCheckboxPropsType = Omit<DefaultInputPropsType, 'type'> & {
  onChangeChecked?: (checked: boolean) => void
  inputClassName?: string
  spanClassName?: string
}

const SuperCheckbox = forwardRef<HTMLInputElement, SuperCheckboxPropsType>(
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

import React, {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  KeyboardEvent,
  ReactNode,
} from 'react'
import s from './SuperInputText.module.css'

// тип пропсов обычного инпута
export type SuperInputTextPropsType = Omit<ComponentPropsWithoutRef<'input'>, 'type'> & {
  // и + ещё пропсы которых нет в стандартном инпуте
  onChangeText?: (value: string) => void
  onEnter?: () => void
  error?: ReactNode
  spanClassName?: string
}

const SuperInputText = forwardRef<ElementRef<'input'>, SuperInputTextPropsType>(
  (
    {
      onChange,
      onChangeText,
      onKeyDown,
      onEnter,
      error,
      className,
      spanClassName,
      id,
      ...restProps // все остальные пропсы попадут в объект restProps
    },
    ref,
  ) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e) // если есть пропс onChange, то передать ему е (поскольку onChange не обязателен)

      onChangeText?.(e.currentTarget.value)
    }
    const onKeyDownCallback = (e: KeyboardEvent<HTMLInputElement>) => {
      onKeyDown?.(e)

      e.key === 'Enter' && // и если нажата кнопка Enter
        onEnter?.() // то вызвать его
    }

    const finalSpanClassName = `${s.error} ${spanClassName || ''}`
    // const finalInputClassName = ... // задача на смешивание классов
    const finalInputClassName = `${error ? s.errorInput : s.superInput} ${className ?? ''}`

    return (
      <div className={s.inputWrapper}>
        <span id={id ? id + '-span' : undefined} className={finalSpanClassName}>
          {error}
        </span>
        <input
          ref={ref}
          id={id}
          type={'text'}
          onChange={onChangeCallback}
          onKeyDown={onKeyDownCallback}
          className={finalInputClassName}
          {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
        />
      </div>
    )
  },
)

export default SuperInputText

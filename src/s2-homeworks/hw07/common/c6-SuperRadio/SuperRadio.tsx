import React, { ChangeEvent, ComponentPropsWithoutRef, RefCallback, RefObject } from 'react'
import s from './SuperRadio.module.css'

type SuperRadioOption = { value: number | string; label: string }
type SuperRadioOptionsRef = RefObject<Map<SuperRadioOption['value'], HTMLInputElement>>

type SuperRadioPropsType = Omit<ComponentPropsWithoutRef<'input'>, 'type'> & {
  options?: SuperRadioOption[]
  optionsRef?: SuperRadioOptionsRef
  onChangeOption?: (value: string) => void
  spanProps?: ComponentPropsWithoutRef<'span'> // пропсы для спана
}

const SuperRadio: React.FC<SuperRadioPropsType> = ({
  id,
  name,
  className,
  options = [],
  optionsRef,
  value,
  onChange,
  onChangeOption,
  spanProps: { className: spanClassName, ...spanProps } = {},
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    // делают студенты
    onChange?.(e)
    onChangeOption?.(e.currentTarget.value)
  }

  const finalRadioClassName = `${s.radio} ${className || ''}`
  const finalSpanClassName = `${s.span} ${spanClassName || ''}`

  const inputRefCallback =
    (value: SuperRadioOption['value']): RefCallback<HTMLInputElement> =>
    (node) => {
      if (!optionsRef?.current) return

      if (node) optionsRef.current.set(value, node)
      else optionsRef.current.delete(value)
    }

  return (
    <div className={s.options}>
      {options.map((o) => (
        <label key={name + '-' + o.value} className={s.label}>
          <input
            ref={inputRefCallback(o.value)}
            id={id + '-input-' + o.value}
            className={finalRadioClassName}
            type="radio"
            // name, checked, value делают студенты
            name="superRadio"
            value={o.value}
            checked={Number(value) === o.value}
            onChange={onChangeCallback}
            {...restProps}
          />
          <span id={id + '-span-' + o.value} className={finalSpanClassName} {...spanProps}>
            {o.label}
          </span>
        </label>
      ))}
    </div>
  )
}

export default SuperRadio

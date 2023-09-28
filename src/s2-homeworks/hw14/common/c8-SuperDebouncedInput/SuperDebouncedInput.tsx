import React, { useRef } from 'react'
import SuperInputText, {
  SuperInputTextPropsType,
} from '../../../hw04/common/c1-SuperInputText/SuperInputText'

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута, кроме type
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
export type SuperDebouncedInputPropsType = SuperInputTextPropsType & {
  // илм экспортировать тип SuperInputTextPropsType
  // плюс специальный пропс SuperPagination
  onDebouncedChange?: (value: string) => void
}

const SuperDebouncedInput: React.FC<SuperDebouncedInputPropsType> = ({
  onChangeText,
  onDebouncedChange,
  ...restProps // все остальные пропсы попадут в объект restProps
}) => {
  const timerRef = useRef<number | undefined>(undefined)

  const onChangeTextCallback = (value: string) => {
    onChangeText?.(value)

    if (onDebouncedChange) {
      // делает студент
      // остановить предыдущий таймер
      // запустить новый на 1500ms, в котором вызовется функция

      clearTimeout(timerRef.current)

      timerRef.current = window.setTimeout(() => {
        onDebouncedChange(value)
      }, 1500)
    }
  }

  return <SuperInputText onChangeText={onChangeTextCallback} {...restProps} />
}

export default SuperDebouncedInput

import React, { PropsWithChildren } from 'react'
// добавить в проект иконки и импортировать
import { ReactComponent as SortDownIcon } from '../icons/sort-down.svg'
import { ReactComponent as SortUpIcon } from '../icons/sort-up.svg'
import { ReactComponent as NoSortIcon } from '../icons/no-sort.svg'

export type SuperSortPropsType = PropsWithChildren<{
  id?: string
  className?: string
  sort: string
  value: string
  onSortChange: (newSort: string) => void
}>

export const pureChange = (sort: string, down: string, up: string) => {
  // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
  if (sort === down) sort = up
  else if (sort === up) sort = ''
  else sort = down

  return sort // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = ({
  sort,
  value,
  className,
  onSortChange,
  id = 'hw15',
  children,
}) => {
  const up = '0' + value
  const down = '1' + value

  const handleClick = () => {
    onSortChange(pureChange(sort, down, up))
  }

  const Icon = sort === down ? SortDownIcon : sort === up ? SortUpIcon : NoSortIcon

  return (
    <span id={id + '-sort-' + value} className={className} onClick={handleClick}>
      {children}&nbsp;
      {/*сделать иконку*/}
      <Icon id={id + '-icon-' + sort} />
    </span>
  )
}

export default SuperSort

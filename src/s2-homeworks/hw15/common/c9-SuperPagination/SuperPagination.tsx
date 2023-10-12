import React, { ChangeEvent } from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import Pagination from '@mui/material/Pagination'
import { paginationItemClasses as pItemClasses } from '@mui/material/PaginationItem'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
  id?: string
  page: number
  itemsCountForPage: number
  totalCount: number
  onChange: (page: number, count: number) => void
}

// TODO: add Forward ref for SuperPagination element if it's possible
const SuperPagination: React.FC<SuperPaginationPropsType> = ({
  page,
  itemsCountForPage,
  totalCount,
  onChange,
  id = 'hw15',
}) => {
  const handlePageChange = (e: ChangeEvent<unknown>, page: number) => {
    // пишет студент
    onChange(page, itemsCountForPage)
  }

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    // пишет студент
    onChange(page, +e.currentTarget.value)
  }

  const pagesTotalCount = Math.ceil(totalCount / itemsCountForPage)

  return (
    <div className={s.pagination}>
      <Pagination
        id={id + '-pagination'}
        shape="rounded"
        sx={{
          [`& .${pItemClasses.text}`]: {
            margin: '0 4px',
            minWidth: '2rem',
            height: '2rem',
            borderRadius: 'var(--border-radius-sm)',
            fontSize: '1rem',
            color: 'inherit',

            [`&.${pItemClasses.selected}`]: {
              backgroundColor: 'var(--blue-400)',
              color: 'var(--bg-primary)',
              [`&:hover`]: {
                backgroundColor: 'var(--blue-500)',
              },
            },
          },
          [`& .${pItemClasses.ellipsis}`]: {
            height: 'auto',
          },
        }}
        page={page}
        count={pagesTotalCount}
        onChange={handlePageChange}
        hideNextButton
        hidePrevButton
      />

      <div className={s.selectContainer}>
        <span className={s.text1}>показать</span>
        <SuperSelect
          id={id + '-pagination-select'}
          value={itemsCountForPage}
          options={[
            { value: 4, label: '4' },
            { value: 7, label: '7' },
            { value: 10, label: '10' },
          ]}
          onChange={handleSelectChange}
        />
        <span className={s.text2}>строк в таблице</span>
      </div>
    </div>
  )
}

export default SuperPagination

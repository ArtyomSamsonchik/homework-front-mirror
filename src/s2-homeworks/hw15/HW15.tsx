import React, { useEffect, useState } from 'react'
import commonS from '../../common/Common.module.css'

import s from './HW15.module.css'
import axios from 'axios'
import SuperPagination from './common/c9-SuperPagination/SuperPagination'
import { useSearchParams } from 'react-router-dom'
import SuperSort from './common/c10-SuperSort/SuperSort'
import {
  SuperTable,
  SuperTableCell,
  SuperTableHead,
  SuperTableHeadCell,
  SuperTableRow,
} from './common/SuperTable/SuperTable'
import { BackdropLoader } from '../hw10/common/BackdropLoader/BackdropLoader'

/*
 * 1 - дописать SuperPagination
 * 2 - дописать SuperSort
 * 3 - проверить pureChange тестами
 * 3 - дописать sendQuery, onChangePagination, onChangeSort в HW15
 * 4 - сделать стили в соответствии с дизайном
 * 5 - добавить HW15 в HW5/pages/JuniorPlus
 * */

type Response = {
  techs: TechType[]
  totalCount: number
  errorText: string
}

type TechType = {
  id: number
  tech: string
  developer: string
}

type ParamsType = {
  sort: string
  page: number
  count: number
}

const getTechs = async (params: ParamsType): Promise<Response | undefined> => {
  try {
    const { data } = await axios.get<Response>(
      'https://samurai.it-incubator.io/api/3.0/homework/test3',
      { params },
    )

    return data
  } catch (e) {
    let message = 'Some network error occurred! Retry later.'

    if (axios.isAxiosError(e)) {
      const data = e.response?.data as Response
      message = data.errorText
    } else if (e instanceof Error) {
      message = e.message
    }

    alert(message)
  }
}

const HW15 = () => {
  const [isLoading, setLoading] = useState(false)
  const [totalCount, setTotalCount] = useState(100)
  const [searchParams, setSearchParams] = useSearchParams()
  const [techs, setTechs] = useState<TechType[]>([])

  const sort = searchParams.get('sort') ?? ''
  const page = searchParams.get('page') ?? '1'
  const count = searchParams.get('count') ?? '4'

  const sendQuery = async (params: ParamsType) => {
    // делает студент
    // сохранить пришедшие данные
    setLoading(true)
    const data = await getTechs(params)

    if (data) {
      setTechs(data.techs)
      setTotalCount(data.totalCount)
    }
    setLoading(false)
  }

  const onChangePagination = (newPage: number, newCount: number) => {
    // делает студент
    setSearchParams((params) => {
      params.set('page', newPage.toString())
      params.set('count', newCount.toString())

      return params
    })

    sendQuery(searchParams as unknown as ParamsType)
  }

  const onChangeSort = (newSort: string) => {
    // делает студент
    // setPage(1) // при сортировке сбрасывать на 1 страницу
    setSearchParams((params) => {
      params.set('page', '1')
      params.set('sort', newSort)

      return params
    })

    sendQuery(searchParams as unknown as ParamsType)
  }

  useEffect(() => {
    sendQuery({ page: +page, count: +count, sort })
  }, [])

  const mappedTechs = techs.map((t) => (
    <SuperTableRow key={t.id}>
      <SuperTableCell id={'hw15-tech-' + t.id} className={s.tCell}>
        {t.tech}
      </SuperTableCell>
      <SuperTableCell id={'hw15-developer-' + t.id} className={s.tCell}>
        {t.developer}
      </SuperTableCell>
    </SuperTableRow>
  ))

  return (
    <div id="hw15">
      <div className={commonS.headerContainer}>
        <h3 className={commonS.hwHeader}>Homework #15</h3>
      </div>
      <hr />

      <div className={s.hwContainer}>
        <div className={s.contentWrapper}>
          {isLoading && (
            <div id="hw15-loading">
              <BackdropLoader />
            </div>
          )}
          <div className={s.paginationContainer}>
            <SuperPagination
              page={+page}
              itemsCountForPage={+count}
              totalCount={totalCount}
              onChange={onChangePagination}
            />
          </div>

          <div className={s.tableWrapper}>
            <SuperTable className={s.table}>
              <SuperTableHead className={s.tableHead}>
                <tr>
                  <SuperTableHeadCell>
                    <SuperSort
                      sort={sort}
                      className={s.sort}
                      value="tech"
                      onSortChange={onChangeSort}
                    >
                      tech
                    </SuperSort>
                  </SuperTableHeadCell>
                  <SuperTableHeadCell>
                    <SuperSort
                      sort={sort}
                      className={s.sort}
                      value="developer"
                      onSortChange={onChangeSort}
                    >
                      developer
                    </SuperSort>
                  </SuperTableHeadCell>
                </tr>
              </SuperTableHead>

              <tbody>{mappedTechs}</tbody>
            </SuperTable>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default HW15

import React, { useEffect, useState } from 'react'
import commonS from '../../common/Common.module.css'

import s from './HW14.module.css'
import axios from 'axios'
import SuperDebouncedInput from './common/c8-SuperDebouncedInput/SuperDebouncedInput'
import { useSearchParams } from 'react-router-dom'

/*
 * 1 - дописать функцию onChangeTextCallback в SuperDebouncedInput
 * 2 - дописать функцию sendQuery в HW14
 * 3 - дописать функцию onChangeText в HW14
 * 4 - сделать стили в соответствии с дизайном
 * 5 - добавить HW14 в HW5/pages/JuniorPlus
 * */

type Response = {
  techs: string[]
  errorText: string
}

const getTechs = async (find: string): Promise<Response | void> => {
  try {
    const { data } = await axios.get<Response>(
      'https://samurai.it-incubator.io/api/3.0/homework/test2',
      { params: { find } },
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

const HW14 = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [isLoading, setLoading] = useState(false)
  const [techs, setTechs] = useState<string[]>([])
  // Use local state for input instead of direct mutating of search params
  // to avoid unnecessary renders on inputs value change
  const [text, setText] = useState('')

  const find = searchParams.get('find') ?? text

  const sendQuery = async (value: string) => {
    setLoading(true)
    // делает студент
    // сохранить пришедшие данные
    const data = await getTechs(value)

    if (data) setTechs(data.techs)

    setLoading(false)
  }

  const handleDebouncedChange = (value: string) => {
    setSearchParams((params) => {
      params.set('find', value)
      return params
    })

    sendQuery(value)
  }

  useEffect(() => {
    sendQuery(find)
  }, [])

  const mappedTechs = techs.map((t) => (
    <li key={t} id={'hw14-tech-' + t} className={s.tech}>
      {t}
    </li>
  ))

  return (
    <div id={'hw14'}>
      <div className={commonS.headerContainer}>
        <h3 className={commonS.hwHeader}>Homework #14</h3>
      </div>
      <hr />

      <div className={s.hwContainer}>
        <div className={s.wrapper}>
          <SuperDebouncedInput
            id={'hw14-super-debounced-input'}
            value={text}
            disabled={isLoading}
            onChangeText={setText}
            onDebouncedChange={handleDebouncedChange}
          />
          <div id={'hw14-loading'} className={s.loading}>
            {isLoading ? '...ищем' : <br />}
          </div>
        </div>

        <ul className={s.techsList}>{!isLoading && mappedTechs}</ul>
      </div>
      <hr />
    </div>
  )
}

export default HW14

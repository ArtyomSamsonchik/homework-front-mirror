import React, { useState } from 'react'
import commonS from '../../common/Common.module.css'

import s from './HW13.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import axios from 'axios'
import success200 from './images/200.svg'
import error400 from './images/400.svg'
import error500 from './images/500.svg'
import errorUnknown from './images/error.svg'
import { BackdropLoader } from './BackdropLoader'

type Response = {
  errorText: string
  info: string
}

const isResponseObject = (res: unknown): res is Response =>
  typeof res === 'object' && res !== null && 'errorText' in res && 'info' in res

/*
 * 1 - дописать функцию send
 * 2 - дизэйблить кнопки пока идёт запрос
 * 3 - сделать стили в соответствии с дизайном
 * */

const initialCardData = {
  code: '',
  errorText: '',
  info: '',
  image: '',
  isLoading: false,
}

const HW13 = () => {
  const [cardData, setCardData] = useState(initialCardData)

  const send = (x?: boolean | null) => () => {
    const url =
      x === null
        ? 'https://xxxxxx.ccc' // имитация запроса на не корректный адрес
        : 'https://samurai.it-incubator.io/api/3.0/homework/test'

    setCardData({ ...cardData, isLoading: true })

    axios
      .post<Response>(url, { success: x })
      .then(({ data: { errorText, info } }) => {
        // дописать
        setCardData({
          code: 'Код 200!',
          image: success200,
          errorText,
          info,
          isLoading: false,
        })
      })
      .catch((e) => {
        if (axios.isAxiosError(e) && e.response && isResponseObject(e.response.data)) {
          const {
            status,
            data: { errorText, info },
          } = e.response

          switch (status) {
            case 400: {
              setCardData({
                code: 'Ошибка 400!',
                image: error400,
                errorText,
                info,
                isLoading: false,
              })
              return
            }
            case 500: {
              setCardData({
                code: 'Ошибка 500!',
                image: error500,
                errorText,
                info,
                isLoading: false,
              })
              return
            }
          }
        }

        if (e instanceof Error) {
          setCardData({
            code: 'Error!',
            image: errorUnknown,
            errorText: e.message,
            info: e.name,
            isLoading: false,
          })

          return
        }

        console.error('Unhandled fetch error', e)
      })
  }

  return (
    <div id={'hw13'}>
      <div className={commonS.headerContainer}>
        <h3 className={commonS.hwHeader}>Homework #13</h3>
      </div>
      <hr />

      <div className={s.hwContainer}>
        <div className={s.buttonsContainer}>
          <SuperButton
            id={'hw13-send-true'}
            onClick={send(true)}
            xType={'secondary'}
            className={s.button}
            // дописать
            disabled={cardData.isLoading}
          >
            Send true
          </SuperButton>
          <SuperButton
            id={'hw13-send-false'}
            onClick={send(false)}
            xType={'secondary'}
            className={s.button}
            // дописать
            disabled={cardData.isLoading}
          >
            Send false
          </SuperButton>
          <SuperButton
            id={'hw13-send-undefined'}
            onClick={send(undefined)}
            xType={'secondary'}
            className={s.button}
            // дописать
            disabled={cardData.isLoading}
          >
            Send undefined
          </SuperButton>
          <SuperButton
            id={'hw13-send-null'}
            onClick={send(null)} // имитация запроса на не корректный адрес
            xType={'secondary'}
            // дописать
            disabled={cardData.isLoading}
          >
            Send null
          </SuperButton>
        </div>

        <div className={s.responseContainer}>
          {cardData.isLoading && <BackdropLoader />}

          <div className={s.imageContainer}>
            {cardData.image && <img src={cardData.image} className={s.image} alt="status" />}
          </div>

          <div className={s.textContainer}>
            <h6 id={'hw13-code'} className={s.code}>
              {cardData.code}
            </h6>
            <p id={'hw13-text'} className={s.text}>
              {cardData.errorText}
            </p>
            <p id={'hw13-info'} className={s.info}>
              {cardData.info}
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default HW13

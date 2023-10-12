import React from 'react'
import { UserType } from './HW8'
import s from './HW8.module.css'
import { SuperTableCell, SuperTableRow } from '../hw15/common/SuperTable/SuperTable'

// types
type UserPropsType = {
  u: UserType
}

const User: React.FC<UserPropsType> = ({ u }) => {
  return (
    <SuperTableRow id={'hw8-user-' + u._id + '-' + u.age}>
      <SuperTableCell id={'hw8-user-name-' + u._id} className={s.nameCol}>
        {/*отобразить имя*/}
        {u.name}
      </SuperTableCell>
      <SuperTableCell id={'hw8-user-age-' + u._id} className={s.ageCol}>
        {/*отобразить возраст*/}
        {u.age}
      </SuperTableCell>
    </SuperTableRow>
  )
}

export default User

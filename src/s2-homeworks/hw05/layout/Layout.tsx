import React, { FC, ReactNode, useState } from 'react'
import { Header } from '../header/Header'
import { Sidebar } from '../sidebar/Sidebar'
import useScrollLock from '../../../hooks/useScrollLock'

type PropsType = {
  children: ReactNode
}

export const Layout: FC<PropsType> = ({ children }) => {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  useScrollLock(open) // отключает прокрутку при открытом меню

  return (
    <>
      <Sidebar open={open} handleClose={handleClose} />
      <Header handleOpen={handleOpen} />
      {/*страницы*/}
      {children}
    </>
  )
}

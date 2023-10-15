import { FC, useEffect, useState } from 'react'
import { Header } from '../header/Header'
import { Sidebar } from '../sidebar/Sidebar'
import useScrollLock from '../../../hooks/useScrollLock'
import { Outlet, useParams } from 'react-router-dom'

export const Layout: FC = () => {
  const [open, setOpen] = useState(false)
  const { flag } = useParams()

  useEffect(() => {
    if (flag === 'fixed-sidebar') {
      document.body.dataset.fixedSidebar = 'true'
    } else {
      delete document.body.dataset.fixedSidebar
    }
  }, [flag])

  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  useScrollLock(open) // отключает прокрутку при открытом меню

  return (
    <>
      <Header handleOpen={handleOpen} />
      <Sidebar open={open} handleClose={handleClose} />
      <Outlet />
    </>
  )
}

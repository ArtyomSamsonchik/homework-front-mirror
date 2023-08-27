import { useEffect } from 'react'

const useScrollLock = (lockScrollbar: boolean) => {
  useEffect(() => {
    const body = document.body
    const scrollbarWidth = window.innerWidth - body.offsetWidth

    if (lockScrollbar) {
      body.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`)
      body.style.paddingRight = 'var(--scrollbar-width)'
      body.style.overflow = 'hidden'

      body.dataset.lockScroll = 'true'
    }

    return () => {
      body.style.overflow = ''
      body.style.paddingRight = ''

      delete body.dataset.lockScroll
    }
  }, [lockScrollbar])
}

export default useScrollLock

import { useEffect } from 'react'

const useAppTheme = (themeId: string) => {
  useEffect(() => {
    document.documentElement.dataset.theme = themeId
  }, [themeId])
}

export default useAppTheme

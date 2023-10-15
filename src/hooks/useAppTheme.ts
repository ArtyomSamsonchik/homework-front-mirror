import { useEffect } from 'react'

const useAppTheme = (themeId: string, themeMap?: Record<string, string>) => {
  useEffect(() => {
    document.documentElement.dataset.theme = themeMap?.[themeId] ?? themeId
  }, [themeId])
}

export default useAppTheme

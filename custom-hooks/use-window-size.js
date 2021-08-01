import { useCallback, useState, useEffect, useMemo } from 'react'

const useWindowSize = ({ mobileSize = 480, desktopSize = 992 }) => {
  const isClient = typeof window === 'object'

  const getSize = useCallback(
    () => ({
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }),
    [isClient]
  )

  const [windowSizes, setWindowSizes] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return false
    }

    const handleResize = () => {
      setWindowSizes(getSize())
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [getSize, isClient])

  const isMobile = useMemo(() => windowSizes.width < mobileSize, [windowSizes.width])
  const isDesktop = useMemo(() => windowSizes.width >= desktopSize, [windowSizes.width])
  const isTablet = useMemo(() => !isMobile && !isDesktop, [isDesktop, isMobile])

  return { ...windowSizes, isMobile, isDesktop, isTablet }
}

export default useWindowSize

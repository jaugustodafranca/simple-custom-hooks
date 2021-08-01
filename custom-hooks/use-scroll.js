import { useRef, useCallback } from 'react'

const useScroll = ({ elementRef, scrollType = 'smooth' }) => {
  const ref = useRef(window)

  const goTop = useCallback(() => {
    const element = ref.current
    element.scrollTo({
      top: 0,
      behavior: scrollType,
    })
  }, [])

  const goBottom = useCallback(() => {
    const element = ref.current instanceof Window ? document.documentElement : ref.current
    ref.current.scrollTo({
      top: element.scrollHeight,
      behavior: scrollType,
    })
  }, [])

  const goToElement = useCallback(() => {
    elementRef.current.scrollTo({
      top: elementRef.scrollHeight,
      behavior: scrollType,
    })
  }, [])

  return { goTop, goBottom, goToElement }
}

export default useScroll

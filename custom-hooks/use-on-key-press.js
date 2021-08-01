import { useEffect } from 'react'

const useOnKeyPress = (targetKey, callback) => {
  const verifyKey = event => {
    if (event.key === targetKey) {
      callback()
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', verifyKey)

    return () => {
      window.removeEventListener('keydown', verifyKey)
    }
  }, [])
}

export default useOnKeyPress

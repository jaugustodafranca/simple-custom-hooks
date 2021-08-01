import { useState } from 'react'

const useLocalStorage = (key, initialState) => {
  const [data, setData] = useState(() => {
    try {
      const currentData = window.localStorage.getItem(key)
      return currentData ? JSON.parse(currentData) : initialState
    } catch {
      return initialState
    }
  })

  const storeData = value => {
    try {
      const valueToStore = value instanceof Function ? value(data) : value
      setData(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch {
      setData()
    }
  }

  const cleanLocalStorage = () => {
    window.localStorage.removeItem(key)
  }

  return [data, storeData, cleanLocalStorage]
}

export default useLocalStorage

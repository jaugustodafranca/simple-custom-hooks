import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (
  url,
  method = 'GET',
  body = undefined,
  successCallback = undefined,
  errorCallback = undefined
) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      const requestConfig = {
        method,
        url,
        ...(!!body && { data: body }),
      }
      try {
        const response = await axios(requestConfig)
        setData(response)
        setIsLoading(false)

        if (typeof successCallback === 'function') {
          successCallback()
        }
      } catch (serverError) {
        setError(serverError)
        setIsLoading(false)

        if (typeof errorCallback === 'function') {
          errorCallback()
        }
      }
    }

    fetchData()
  }, [url, method, body])

  return [data, isLoading, error]
}

export default useFetch

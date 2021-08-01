import { useState } from 'react'

const useForm = initialState => {
  const [data, setData] = useState(initialState)

  const onChange = (name, value) => {
    setData(prevState => ({ ...prevState, [name]: value }))
  }

  return [data, onChange]
}

export default useForm

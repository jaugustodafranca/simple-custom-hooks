import { useState } from 'react'

const useToggle = (initialState = false) => {
  const [modalOpen, setModalOpen] = useState(initialState)
  const toggle = () => setModalOpen(prevState => !prevState)

  return [modalOpen, toggle, setModalOpen]
}

export default useToggle

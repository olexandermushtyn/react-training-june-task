import './App.css'
import { TableWrapper } from './domains/Table'
import { useState, useEffect } from 'react'
import { useTableContext } from './Context/hooks'

function App() {
  const [recordCollection, setRecordCollection] = useState('records')
  const [isLoading, setIsLoading] = useState(false)
  const { store } = useTableContext()

  useEffect(() => {
    if (store.records) setIsLoading(false)
  }, [store])

  return (
    <TableWrapper
      recordCollection={recordCollection}
      setRecordCollection={setRecordCollection}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
    />
  )
}

export default App

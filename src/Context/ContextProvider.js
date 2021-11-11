import { useReducer } from 'react'
import Context from './Context'
import reducer from './reducer'
import {
  useFetchRecords,
  useFetchFullRecords,
  useSortRecords,
  useUpdateRecords,
  useFilterRecords,
  useClearFilters,
  useSelectUser,
  useAddUser,
} from './hooks'

const ContextProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, {})
  const fetchRecords = useFetchRecords(store, dispatch)
  const fetchFullRecords = useFetchFullRecords(store, dispatch)
  const sortRecords = useSortRecords(store, dispatch)
  const updateRecords = useUpdateRecords(dispatch)
  const filterRecords = useFilterRecords(store, dispatch)
  const clearFilters = useClearFilters(dispatch)
  const selectUser = useSelectUser(dispatch)
  const addUser = useAddUser(dispatch)

  console.log('context store:', store)

  return (
    <Context.Provider
      value={{
        store,
        fetchRecords,
        fetchFullRecords,
        sortRecords,
        updateRecords,
        filterRecords,
        clearFilters,
        selectUser,
        addUser,
      }}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider

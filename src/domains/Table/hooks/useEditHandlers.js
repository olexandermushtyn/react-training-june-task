const handleClearSort = (store, clearFilters, setRecordCollection) => {
  const storeWithoutSort = { ...store }
  delete storeWithoutSort?.sorted
  clearFilters(storeWithoutSort)
  setRecordCollection('records')
}

const handleClearFilters = (store, clearFilters, setRecordCollection) => {
  const storeWithoutFilters = { ...store }
  delete storeWithoutFilters?.filtered
  delete storeWithoutFilters?.sorted
  clearFilters(storeWithoutFilters)
  setRecordCollection('records')
}

const useEditHandlers = () => {
  return {
    handleClearSort,
    handleClearFilters,
  }
}

export default useEditHandlers

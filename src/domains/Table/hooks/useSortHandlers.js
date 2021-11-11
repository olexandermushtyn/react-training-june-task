const sortHandler = (event, sortRecords, setSortDirection, sortDirection) => {
  sortRecords(event.currentTarget.innerHTML, sortDirection)
  setSortDirection(sortDirection === 'growth' ? 'reverse' : 'growth')
}

const useSortHandlers = () => {
  return { sortHandler }
}

export default useSortHandlers

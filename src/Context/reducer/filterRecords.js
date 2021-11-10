const filterRecords = (state, payload) => {
  const filtered = payload
  const stateCopy = { ...state, filtered }
  return stateCopy
}

export default filterRecords

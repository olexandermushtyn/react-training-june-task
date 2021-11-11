const sortRecords = (state, payload) => {
  const sorted = payload
  const stateCopy = { ...state, sorted }
  return stateCopy
}

export default sortRecords

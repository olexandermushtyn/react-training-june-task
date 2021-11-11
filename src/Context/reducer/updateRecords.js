const updateRecords = (state, payload) => {
  let stateCopy = { ...state }

  if (state.records) {
    stateCopy.records = [...stateCopy.records, ...payload]
  } else {
    const records = [...payload]
    stateCopy = { records }
  }

  return stateCopy
}

export default updateRecords

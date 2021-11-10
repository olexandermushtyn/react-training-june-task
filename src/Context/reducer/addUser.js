const addUser = (state, payload) => {
  const user = payload
  const stateCopy = { ...state }
  let records = []
  if (stateCopy.records) {
    records = [...stateCopy.records, user]
  } else records = [...records, user]
  return { ...stateCopy, records }
}

export default addUser

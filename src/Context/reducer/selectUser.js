const selectUser = (state, payload) => {
  const selectedUser = payload
  const stateCopy = { ...state, selectedUser }
  return stateCopy
}

export default selectUser

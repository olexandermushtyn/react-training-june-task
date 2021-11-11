const useAddUser = dispatch => {
  const addUser = user => {
    dispatch({
      type: 'addUser',
      payload: user,
    })
  }
  return addUser
}

export default useAddUser

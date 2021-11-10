const useSelectUser = dispatch => {
  const selectUser = user => {
    dispatch({
      type: 'selectUser',
      payload: user,
    })
  }

  return selectUser
}

export default useSelectUser

const useUpdateRecords = dispatch => {
  const updateRecords = async records => {
    dispatch({
      type: 'updateRecords',
      payload: records,
    })
  }

  return updateRecords
}

export default useUpdateRecords

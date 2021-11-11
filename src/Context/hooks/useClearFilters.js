const useClearFilters = dispatch => {
  const clearFilters = async records => {
    dispatch({
      type: 'clearFilters',
      payload: records,
    })
  }

  return clearFilters
}

export default useClearFilters

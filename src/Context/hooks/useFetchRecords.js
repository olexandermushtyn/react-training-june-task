const useFetchRecords = (store, dispatch) => {
  const fetchRecords = async () => {
    const response = await fetch(
      'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
    )
    const records = await response.json()
    dispatch({
      type: 'updateRecords',
      payload: records,
    })
  }
  return fetchRecords
}

export default useFetchRecords

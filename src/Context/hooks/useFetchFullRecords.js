const useFetchFullRecords = (store, dispatch) => {
  const fetchRecords = async () => {
    if (!store.records) {
      const response = await fetch(
        'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'
      )
      const records = await response.json()
      console.log(records)
      dispatch({
        type: 'updateRecords',
        payload: records,
      })
    } else {
      dispatch({
        type: 'updateRecords',
        payload: store.records,
      })
    }
  }
  return fetchRecords
}

export default useFetchFullRecords

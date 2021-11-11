const compareId = (a, b) => {
  if (a.id < b.id) return -1
  if (a.id > b.id) return 1
  return 0
}

const compareFirstName = (a, b) => {
  if (a.firstName < b.firstName) return -1
  if (a.firstName > b.firstName) return 1
  return 0
}

const compareLastName = (a, b) => {
  if (a.lastName < b.lastName) return -1
  if (a.lastName > b.lastName) return 1
  return 0
}

const compareEmail = (a, b) => {
  if (a.email < b.email) return -1
  if (a.email > b.email) return 1
  return 0
}

const comparePhone = (a, b) => {
  if (a.phone < b.phone) return -1
  if (a.phone > b.phone) return 1
  return 0
}

const compareAddress = (a, b) => {
  if (a.address < b.address) return -1
  if (a.address > b.address) return 1
  return 0
}

const compareDescription = (a, b) => {
  if (a.description < b.description) return -1
  if (a.description > b.description) return 1
  return 0
}

const compareIdReverse = (a, b) => {
  if (a.id < b.id) return 1
  if (a.id > b.id) return -1
  return 0
}

const compareFirstNameReverse = (a, b) => {
  if (a.firstName < b.firstName) return 1
  if (a.firstName > b.firstName) return -1
  return 0
}

const compareLastNameReverse = (a, b) => {
  if (a.lastName < b.lastName) return 1
  if (a.lastName > b.lastName) return -1
  return 0
}

const compareEmailReverse = (a, b) => {
  if (a.email < b.email) return 1
  if (a.email > b.email) return -1
  return 0
}

const comparePhoneReverse = (a, b) => {
  if (a.phone < b.phone) return 1
  if (a.phone > b.phone) return -1
  return 0
}

const compareAddressReverse = (a, b) => {
  if (a.address < b.address) return 1
  if (a.address > b.address) return -1
  return 0
}

const compareDescriptionReverse = (a, b) => {
  if (a.description < b.description) return 1
  if (a.description > b.description) return -1
  return 0
}

const comparedFunctions = {
  growth: {
    id: compareId,
    firstName: compareFirstName,
    lastName: compareLastName,
    email: compareEmail,
    phone: comparePhone,
    address: compareAddress,
    description: compareDescription,
  },
  reverse: {
    id: compareIdReverse,
    firstName: compareFirstNameReverse,
    lastName: compareLastNameReverse,
    email: compareEmailReverse,
    phone: comparePhoneReverse,
    address: compareAddressReverse,
    description: compareDescriptionReverse,
  },
}

const useSortRecords = (store, dispatch) => {
  const sortRecords = async (sortField, direction) => {
    const collection = store.filtered ? 'filtered' : 'records'
    const recordsCopy = [...store[collection]]
    const sortedRecords = recordsCopy.sort(
      comparedFunctions[direction][sortField]
    )
    dispatch({
      type: 'sortRecords',
      payload: sortedRecords,
    })
  }
  return sortRecords
}

export default useSortRecords

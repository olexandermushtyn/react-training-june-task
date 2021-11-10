import updateRecords from './updateRecords'
import sortRecords from './sortRecords'
import filterRecords from './filterRecords'
import clearFilters from './clearFilters'
import selectUser from './selectUser'
import addUser from './addUser'

const reducer = (state, action) => {
  const { type, payload } = action

  const actionMap = {
    updateRecords,
    sortRecords,
    filterRecords,
    clearFilters,
    selectUser,
    addUser,
  }
  return actionMap[type](state, payload)
}

export default reducer

const above = (object, field, value) => {
  return object[field] > value ? true : false
}

const aboveEqual = (object, field, value) => {
  return object[field] >= value ? true : false
}

const less = (object, field, value) => {
  return object[field] < value ? true : false
}

const lessEqual = (object, field, value) => {
  return object[field] <= value ? true : false
}

const equal = (object, field, value) => {
  return object[field] === value ? true : false
}

const notEqual = (object, field, value) => {
  return object[field] !== value ? true : false
}

const filterCollection = (state, params) => {
  const filteredItems = []

  const logicOperands = {
    '>': above,
    '<': less,
    '>=': aboveEqual,
    '<=': lessEqual,
    '==': equal,
    '!=': notEqual,
  }

  state.records.map(object => {
    let flag = true
    params.map(item => {
      flag *= logicOperands[item[1]](object, item[0], item[2])
    })
    if (flag) filteredItems.push(object)
  })

  return filteredItems
}

const useFilterRecords = (state, dispatch) => {
  const filterRecords = async filterRules => {
    const disassembledRules = []
    filterRules.map(item => {
      disassembledRules.push(item.split(' '))
    })
    const filteredElements = filterCollection(state, [...disassembledRules])
    dispatch({ type: 'filterRecords', payload: filteredElements })
  }
  return filterRecords
}

export default useFilterRecords

import { Pagination } from 'react-bootstrap'
import { useState } from 'react'

const TablePagination = ({ numbers, changeMaxItem, changeMinItem }) => {
  const [currentActive, setCurrentActive] = useState(1)
  const getItems = () => {
    const items = []
    for (let number = 1; number <= numbers; number++) {
      items.push(
        <Pagination.Item
          onClick={() => {
            if (number === 1) changeMinItem(0)
            else changeMinItem(prev => 50 * (number - 1))
            changeMaxItem(prev => 50 * number)
            setCurrentActive(number)
          }}
          key={number}
          active={number === currentActive}>
          {number}
        </Pagination.Item>
      )
    }
    return items
  }

  return (
    <div>
      <Pagination>{getItems()}</Pagination>
    </div>
  )
}

export default TablePagination

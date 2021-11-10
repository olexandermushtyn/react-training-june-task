import { useTableContext } from '../../Context'

const TableHead = ({
  sortHandler,
  sortRecords,
  setSortDirection,
  sortDirection,
}) => {
  const { store } = useTableContext()

  return (
    <thead>
      <tr>
        {Object.keys(store.records[0]).map(item => (
          <th
            style={{ cursor: 'pointer' }}
            onClick={event => {
              sortHandler(event, sortRecords, setSortDirection, sortDirection)
            }}
            key={item}>
            {item}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHead

import nextId from 'react-id-generator'
import { useTableContext } from '../../Context'

const TableBody = ({ recordCollection, currentStartItem, nextMaxItem }) => {
  const { store, selectUser } = useTableContext()

  return (
    <tbody>
      {store[recordCollection].map((item, index) => {
        if (index > currentStartItem - 1 && index < nextMaxItem) {
          return (
            <tr onClick={() => selectUser(item)} key={nextId()}>
              {Object.keys(item).map(field => {
                if (field === 'address') {
                  return (
                    <td key={item.id + item[field]}>
                      {Object.keys(item[field]).map(addressField =>
                        item[field][addressField].toString()
                      )}
                    </td>
                  )
                } else
                  return <td key={item[field]}>{item[field].toString()}</td>
              })}
            </tr>
          )
        }
      })}
    </tbody>
  )
}

export default TableBody

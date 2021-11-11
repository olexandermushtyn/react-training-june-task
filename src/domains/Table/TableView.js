import { Table } from 'react-bootstrap'
import { useTableContext } from '../../Context'
import { useState, useEffect } from 'react'
import TablePagination from './TablePagination'
import '../../App.css'
import TableBody from './TableBody'
import TableHead from './TableHead'
import { useSortHandlers } from './hooks'

const TableView = ({ recordCollection, setRecordCollection, isLoading }) => {
  const counter = 50

  const { store, sortRecords } = useTableContext()

  const [currentStartItem, setCurrentStartItem] = useState(0)
  const [nextMaxItem, setNextMaxItem] = useState(counter)
  const [sortDirection, setSortDirection] = useState('growth')

  const { sortHandler } = useSortHandlers()

  useEffect(() => {
    if (store.sorted) setRecordCollection('sorted')
    else if (store.filtered) setRecordCollection('filtered')
    else setRecordCollection('records')
  }, [store])

  useEffect(() => {}, [isLoading])

  if (Object.keys(store).length !== 0) {
    if (isLoading) return <h1>Loading...</h1>
    else
      return (
        <div>
          <Table striped bordered hover>
            <TableHead
              sortHandler={sortHandler}
              sortRecords={sortRecords}
              setSortDirection={setSortDirection}
              sortDirection={sortDirection}
            />
            <TableBody
              recordCollection={recordCollection}
              currentStartItem={currentStartItem}
              nextMaxItem={nextMaxItem}
            />
          </Table>
          <TablePagination
            changeMinItem={setCurrentStartItem}
            changeMaxItem={setNextMaxItem}
            numbers={store[recordCollection].length / counter}
          />
        </div>
      )
  } else return <h1>No data</h1>
}

export default TableView

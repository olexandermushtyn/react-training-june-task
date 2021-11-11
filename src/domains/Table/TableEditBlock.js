import { ButtonGroup, Button, Form } from 'react-bootstrap'
import { useTableContext } from '../../Context'
import { useState, useRef, useEffect } from 'react'
import { FilterRulesList } from '../Filter'
import { useEditHandlers } from './hooks'
import TableUserInfo from './TableUserInfo'
import AddUser from '../User/AddUser'

const TableEditBlock = ({ setRecordCollection, setIsLoading }) => {
  const { store, fetchRecords, fetchFullRecords, filterRecords, clearFilters } =
    useTableContext()

  const { handleClearFilters, handleClearSort } = useEditHandlers()

  const [filterRules, setFilterRules] = useState([])
  const filterInput = useRef(null)

  useEffect(() => {
    if (filterRules.length > 0) filterRecords(filterRules)
  }, [filterRules])

  return (
    <div style={{ padding: '15px' }}>
      <ButtonGroup>
        <Button
          onClick={() => {
            setRecordCollection('records')
            setIsLoading(true)
            fetchRecords()
          }}
          variant="secondary">
          Get min data
        </Button>
        <Button
          onClick={() => {
            setRecordCollection('records')
            setIsLoading(true)
            fetchFullRecords()
          }}
          variant="primary">
          Get full data
        </Button>
        <AddUser />
      </ButtonGroup>
      <hr />
      <div style={{ marginTop: '10px' }}>
        <Button
          onClick={() =>
            handleClearSort(store, clearFilters, setRecordCollection)
          }
          variant="primary">
          Clear Sort
        </Button>
      </div>
      <hr />
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Sort params</Form.Label>
            <Form.Control
              ref={filterInput}
              type="text"
              placeholder="Enter filter rule"
            />
            <div style={{ marginTop: '15px' }}>
              <ButtonGroup>
                <Button
                  onClick={() => {
                    setFilterRules([...filterRules, filterInput.current.value])
                    handleClearSort(store, clearFilters, setRecordCollection)
                  }}
                  variant="primary">
                  Filter
                </Button>
                <Button
                  onClick={() => {
                    setFilterRules([])
                    handleClearFilters(store, clearFilters, setRecordCollection)
                    filterInput.current.value = ''
                  }}
                  variant="secondary">
                  Clear filters
                </Button>
              </ButtonGroup>
              <FilterRulesList rules={filterRules} />
            </div>
          </Form.Group>
        </Form>
      </div>
      <hr />
      <TableUserInfo />
    </div>
  )
}

export default TableEditBlock

import './App.css'
import { Container, Row, Col } from 'react-bootstrap'
import { TableEditBlock, TableView } from './domains/Table'
import { useState, useEffect } from 'react'
import { useTableContext } from './Context/hooks'

function App() {
  const [recordCollection, setRecordCollection] = useState('records')
  const [isLoading, setIsLoading] = useState(false)
  const { store } = useTableContext()

  useEffect(() => {
    if (store.records) setIsLoading(false)
  }, [store])

  if (isLoading)
    return (
      <Container fluid>
        <Row>
          <Col xxl="2">
            <TableEditBlock
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              recordCollection={recordCollection}
              setRecordCollection={setRecordCollection}
            />
          </Col>
          <Col xxl="10">
            <h1>Loading ...</h1>
          </Col>
        </Row>
      </Container>
    )
  else
    return (
      <div className="App">
        <Container fluid>
          <Row>
            <Col xxl="2">
              <TableEditBlock
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                recordCollection={recordCollection}
                setRecordCollection={setRecordCollection}
              />
            </Col>
            <Col xxl="10">
              <TableView
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                recordCollection={recordCollection}
                setRecordCollection={setRecordCollection}
              />
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default App

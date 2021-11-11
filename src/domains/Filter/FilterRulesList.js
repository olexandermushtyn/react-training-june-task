import { ListGroup } from 'react-bootstrap'

const FilterRulesList = ({ rules }) => {
  return (
    <ListGroup style={{ marginTop: '15px' }}>
      {rules.map((rule, index) => (
        <ListGroup.Item key={index}>{rule}</ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default FilterRulesList

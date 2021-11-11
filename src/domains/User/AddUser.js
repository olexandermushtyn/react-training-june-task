import { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { useTableContext } from '../../Context'
import User from '../../Models/User'
import useModalHandlers from './hooks/useModalHandlers'

const AddUser = () => {
  const { addUser } = useTableContext()
  const [user, setUser] = useState(User)

  const [show, setShow] = useState(false)
  const [error, setError] = useState('')

  const { handleClose, handleChange } = useModalHandlers()
  const handleShow = () => setShow(true)

  const onClose = () => handleClose(user, setShow, addUser, setUser, setError)
  const onChangeHandler = event => handleChange(event, user, setUser)

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <p style={{ color: 'red' }}>{error}</p>
            {Object.keys(user).map((item, index) => (
              <Form.Group key={item + index}>
                <Form.Label key={item}>{item}</Form.Label>
                <Form.Control
                  field={item}
                  key={index}
                  onChange={onChangeHandler}
                  type="text"
                  placeholder={`Enter ${item}`}
                />
              </Form.Group>
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShow(false)
              setUser(User)
              setError('')
            }}>
            Close
          </Button>
          <Button variant="primary" onClick={onClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddUser

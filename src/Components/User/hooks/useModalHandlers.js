const handleClose = (user, setShow, addUser, setUser, setError) => {
  let checked = true
  Object.values(user).map(field => {
    if (field.replace(' ').length === 0) checked = false
  })
  console.log(checked)
  if (checked) {
    setShow(false)
    addUser(user)
    setUser({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      description: '',
    })
    setError('')
  } else {
    setError('Enter all fields')
  }
}

const handleChange = (event, user, setUser) => {
  const field = event.currentTarget.getAttribute('field')
  const newUser = { ...user }
  newUser[field] = event.currentTarget.value
  setUser(newUser)
}

const useModalHandlers = () => {
  return { handleClose, handleChange }
}

export default useModalHandlers

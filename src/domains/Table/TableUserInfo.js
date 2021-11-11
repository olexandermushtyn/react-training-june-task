import { useTableContext } from '../../Context'

const TableUserInfo = () => {
  const { store } = useTableContext()
  const user = store.selectedUser || undefined

  if (user)
    return (
      <div>
        {Object.keys(user).map(key => {
          if (typeof user[key] === 'object') {
            return (
              <p>
                {key}:
                <b>
                  {Object.keys(user[key]).map(keyFields => {
                    console.log(user[key][keyFields])
                    return <span>{user[key][keyFields]}</span>
                  })}
                </b>
              </p>
            )
          } else
            return (
              <p>
                {key}: <b>{user[key].toString()}</b>
              </p>
            )
        })}
      </div>
    )
  else return <></>
}

export default TableUserInfo

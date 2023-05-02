import PropTypes from 'prop-types'
import React, {createContext, useState} from 'react'

export const AppContext = createContext({})

export default function ContextProvider({children}) {
  const [user, setUser] = useState()
  return (
    <AppContext.Provider value={{user, setUser}}>
      {children}
    </AppContext.Provider>
  )
}

ContextProvider.proptypes = {
  children: PropTypes.node,
}

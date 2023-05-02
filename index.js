import {registerRootComponent} from 'expo'
import React from 'react'

import ContextProvider from './src/contexts/app'
import Routes from './src/routes'

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
const App = () => {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  )
}

registerRootComponent(App)

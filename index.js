import {registerRootComponent} from 'expo'

import Feed from './src/pages/Feed'
import Home from './src/pages/Home'
import SignIn from './src/pages/SignIn'
import SignUp from './src/pages/SignUp'

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Feed)

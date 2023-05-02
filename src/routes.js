import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import {Title} from './Components'
import {Home, Feed, SignIn, SignUp} from './pages'
import Cart from './pages/Cart'
import Marketplace from './pages/Marketplace'
import Category from './pages/Marketplace/category'
import Product from './pages/Marketplace/product'
import Order from './pages/Order'
import {colors} from './Styles/theme.json'
import util from './util'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function CustomDrawerComponent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Title bold color="light" variant="big" hasPadding>
        LOOKAPP
      </Title>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

function DrawerComponent() {
  return (
    <Drawer.Navigator
      initialRouteName="Feed"
      drawerContent={props => <CustomDrawerComponent {...props} />}
      drawerContentOptions={{
        activeBackgroundColor: util.toAlpha(colors.primary, 60),
        activeTintColor: colors.light,
        inactiveTintColor: util.toAlpha(colors.light, 60),
        style: {
          backgroundColor: colors.black,
        },
      }}>
      <Drawer.Screen
        options={{
          drawerIcon: ({focused, color}) => (
            <Icon name="people" color={color} />
          ),
        }}
        name="Feed"
        component={Feed}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({focused, color}) => <Icon name="tag" color={color} />,
        }}
        name="Marketplace"
        component={Marketplace}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({focused, color}) => (
            <Icon name="basket" color={color} />
          ),
        }}
        name="Product"
        component={Product}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({focused, color}) => (
            <Icon name="basket" color={color} />
          ),
        }}
        name="Order"
        component={Order}
      />
    </Drawer.Navigator>
  )
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Feed"
          component={DrawerComponent}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Category"
          component={Category}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Product"
          component={Product}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Marketplace"
          component={DrawerComponent}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Cart"
          component={Cart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

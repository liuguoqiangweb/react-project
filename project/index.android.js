/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createStackNavigator } from 'react-navigation'
import LoginComponent from './app/components/login'
import MainComponent from './app/components/main'
import ProductListComponent from './app/components/productList'
import DetailComponent from './app/components/detail'
var myNavigator = createStackNavigator({
  main: {
    screen: MainComponent,
    navigationOptions: () => {
      return {
        headerTitle: '管理页面',
        headerTitleStyle: {
          color: 'red',
          textAlign: 'center',
          flex: 1
        }
      }
    }
  },
  product: {
    screen: ProductListComponent,
    navigationOptions: () => {
      return {
        headerTitle: '商品管理',
        headerTitleStyle: {
          color: 'red',
          textAlign: 'center',
          flex: 1
        }
      }
    }
  },
  detail: {
    screen: DetailComponent,
    navigationOptions: () => { 
      return {
        headerTitle: '商品详情',
        headerTitleStyle: {
          color: 'red',
          textAlign: 'center',
          flex:1
        }
      }
    }
  },
  login: {
    screen: LoginComponent,
    navigationOptions: () => { 
      return {
        headerTitle: '登录',
        headerTitleStyle: {
          color: 'red',
          textAlign: 'center',
          flex: 1
        }
      }
    }
  }
})

AppRegistry.registerComponent('myapp', () => myNavigator);

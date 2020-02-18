import React from 'react';
import { createStackNavigator, TransitionPresets, TransitionSpecs } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// ---------- screens ----------
import Home from '../screens/Home';
import Apartment from '../screens/Apartment';
import Settings from '../screens/Settings';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';
// ---------- footer component ----------
import FooterBar from '../components/FooterBar';
// --------------------------------------

const HomeScreens = createStackNavigator();
function HomeStack() {
  return (
    <HomeScreens.Navigator initialRouteName="Home" headerMode={"none"}>
      <HomeScreens.Screen name="Home" component={Home} />
      <HomeScreens.Screen
        name="Apartment"
        component={Apartment}
      />
    </HomeScreens.Navigator>
  );
}

const Footer = createBottomTabNavigator();
function MyFooter() {
  return (
    <Footer.Navigator tabBar={props => <FooterBar {...props} />}>
      <Footer.Screen name="Home" component={HomeStack} />
      <Footer.Screen name="Settings" component={Settings} />
      <Footer.Screen name="Notification" component={Notification} />
      <Footer.Screen name="Profile" component={Profile} />
    </Footer.Navigator>
  );
}


const Main = createStackNavigator();
function App() {
  return (
    <Main.Navigator headerMode={"none"}>
      <Main.Screen name="Footer" component={MyFooter} />
    </Main.Navigator>
  );
}

export default App;

import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";

import AuthScreen from "./src/screens/Auth/Auth";
import InputKaryawanScreen from "./src/screens/InputKaryawan/InputKaryawan";
import ListEmployeeScreen from "./src/screens/ListEmployee/ListEmployee";
import EmployeeDetailScreen from "./src/screens/EmployeeDetail/EmployeeDetail";
import SideDrawerScreen from "./src/screens/SideDrawer/SideDrawer";

const store = configureStore();

// Register Screens
Navigation.registerComponent(
  "jc8reactnative.AuthScreen",
  () => AuthScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "jc8reactnative.InputKaryawanScreen",
  () => InputKaryawanScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "jc8reactnative.ListEmployeeScreen",
  () => ListEmployeeScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "jc8reactnative.EmployeeDetailScreen",
  () => EmployeeDetailScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "jc8reactnative.SideDrawerScreen",
  () => SideDrawerScreen,
  store,
  Provider
);

// Start Screens
Navigation.startSingleScreenApp({
  screen: {
    screen: "jc8reactnative.AuthScreen",
    title: "Login"
  }
});

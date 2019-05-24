import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import EmployeeList from "../../components/EmployeeList/EmployeeList";

class ListEmployeeScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  };

  itemSelectedHandler = key => {
    // selPlace = {value, key, image}
    const employee = this.props.employees.find(emp => {
      return emp.key == key;
    });
    console.log(employee);
    this.props.navigator.push({
      screen: "jc8reactnative.EmployeeDetailScreen",
      title: employee.namaKaryawan,
      passProps: {
        selectedEmp: employee
      }
    });
  };

  render() {
    return (
      <View>
        <EmployeeList
          employees={this.props.employees}
          onItemSelected={this.itemSelectedHandler}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    employees: state.employees.employees
  };
};

export default connect(mapStateToProps)(ListEmployeeScreen);

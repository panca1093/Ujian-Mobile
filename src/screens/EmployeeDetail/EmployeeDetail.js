import React, { Component } from "react";
import { View, Image, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { deleteEmp } from "../../store/actions/index";
import { Fire } from "../../firebase/index";

class EmployeeDetailScreen extends Component {
  dataDeletedHandler = () => {
    var data = Fire.database().ref("karyawan");

    data.child(this.props.selectedEmp.key).remove();

    this.props.onDeleteData(this.props.selectedEmp.key);
    this.props.navigator.pop();
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.Image} source={this.props.selectedEmp.image} />
          <Text style={styles.Name}>
            Nama: {this.props.selectedEmp.namaKaryawan}
          </Text>
          <Text style={styles.Name}>Usia: {this.props.selectedEmp.usia}</Text>
          <Text style={styles.Name}>
            Jabatan: {this.props.selectedEmp.jabatan}
          </Text>
        </View>
        <Button title="Delete" color="red" onPress={this.dataDeletedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 22
  },
  Image: {
    width: "100%",
    height: 220
  },
  Name: {
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center"
  },
  button: {
    margin: 10
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeleteData: key => dispatch(deleteEmp(key))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EmployeeDetailScreen);

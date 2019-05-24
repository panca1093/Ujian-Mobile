import React, { Component } from "react";
import { View, Button, StyleSheet, ScrollView, Image } from "react-native";
import { connect } from "react-redux";

import { createData } from "../../store/actions/index";
import { Fire } from "../../firebase/index";

import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";

class InputKaryawanScreen extends Component {
  state = {
    namaKaryawan: "",
    usia: "",
    jabatan: ""
  };

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

  karyawanChangedHandler = () => {
    this.setState({
      namaKaryawan: nama,
      usia: usia
      // jabatan: val
    });
  };

  karyawanAddedHandler = () => {
    var data = Fire.database().ref("karyawan");

    data
      .push({
        namaKaryawan: this.state.namaKaryawan,
        usia: this.state.usia,
        jabatan: this.state.jabatan
      })
      .then(res => {
        // ambil semua data di firebase, lempar ke redux
        data.once("value", this.props.onCreateData, err => {
          console.log(err);
        });
      });
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Input Data Karyawan</HeadingText>
          </MainText>
          <DefaultInput
            placeholder="Nama Karyawan"
            onChangeText={i => {
              this.setState({ namaKaryawan: i });
            }}
          />
          <DefaultInput
            placeholder="Usia"
            onChangeText={i => {
              this.setState({ usia: i });
            }}
          />
          <DefaultInput
            placeholder="Jabatan"
            onChangeText={i => {
              this.setState({ jabatan: i });
            }}
          />
          <Button title="Input" onPress={this.karyawanAddedHandler} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
    margin: 8
  },
  previewImage: {
    width: "100%",
    height: "100%"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onCreateData: items => dispatch(createData(items))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(InputKaryawanScreen);

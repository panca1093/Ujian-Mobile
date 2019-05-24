import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../ListItem/ListItem";

const EmployeeList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.employees}
      renderItem={info => {
        return (
          <ListItem
            image={info.item.image}
            name={info.item.namaKaryawan}
            onPressItem={() => {
              props.onItemSelected(info.item.key);
            }}
          />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default EmployeeList;

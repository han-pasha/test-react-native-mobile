import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import backendService from "./backendService";

export default function App() {
  const [listStatus, setListStatus] = useState([]);

  useEffect(() => {
    backendService.getStatus().then((res) => {
      setListStatus(res.data);
    });
  }, []);

  const changeGender = (gender) => {
    switch (gender) {
      case 0:
        return "Before Migrating Data";
      case 1:
        return "Male";
      case 2:
        return "Female";
    }
  };

  const changeReligion = (religion) => {
    switch (religion) {
      case 0:
        return "Buddha";
      case 1:
        return "Hindu";
      case 2:
        return "Islam";
      case 3:
        return "Kristen";
      case 4:
        return "Protestan";
      case 5:
        return "Katolik";
      case 6:
        return "Konghucu";
      case 7:
        return "Lainnya";
    }
  };

  const changeMaritalStatus = (marital_status) => {
    switch (marital_status) {
      case 0:
        return "Single";
      case 1:
        return "Widow";
      case 2:
        return "Widower";
      case 3:
        return "Married";
    }
  };

  return (
    <View style={styles.container}>
      {console.log(listStatus)}
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      {/* {listStatus.map((status) => {
        <ListItem key={status.NIK} bottomDivider>
          <ListItem.Content>

          </ListItem.Content>
        </ListItem>
      })} */}
      {/* <SectionList
        sections={[listStatus]}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => index}
      /> */}
      <ScrollView>
        <FlatList
          data={listStatus}
          renderItem={({ item }) => (
            <>
              <Text style={styles.item}>ID :{item.m_dukcapil_data_id}</Text>
              <Text style={styles.item}>NIK :{item.nik}</Text>
              <Text style={styles.item}>Nama :{item.name}</Text>
              <Text style={styles.item}>Nama Keluarga :{item.maiden_name}</Text>
              <Text style={styles.item}>
                Gender :{changeGender(item.gender)}
              </Text>
              <Text style={styles.item}>
                Religion :{changeReligion(item.religion_id)}
              </Text>
              <Text style={styles.item}>
                Status :{changeMaritalStatus(item.marital_status)}
              </Text>
              <Text>==================================</Text>
            </>
          )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

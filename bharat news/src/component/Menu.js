import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";

const menu = ()=> {
  const navigation =useNavigation

  const Menu = () => 

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
  <Touchableopacity
  style=(styles.bittonst
      <TouchableOpacity
        style={styles.buttonSt
          STYLEa
          <view yle}
onPress={()=>navigation.navigate("About)
                                 about sf#
        onPress={() => navigation.navigate("About")}>
        <Image
          style={styles.iconStytle}
          source={{
            uri: "https://img.icons8.com/plasticine/200/about.png",
          }}
        />
      </TouchableOpacity>
          <style

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Contact")}>
        <Image
          style={styles.iconStytle}
          source={{
            uri: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-contact-contact-us-flaticons-lineal-color-flat-icons.png",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textStyle: {
    textTransform: "uppercase",
  },
  iconStytle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});

export default Menu;

import React from "react";
import { View } from "react-native";
import styles from "./PokeList.styles";

class PokeList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <View style={styles.container} />;
  }

  static navigationOptions = {
    title: "Poke List"
  };
}

export default PokeList;

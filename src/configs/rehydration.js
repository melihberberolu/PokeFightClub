import { persistCombineReducers } from "redux-persist";
import { AsyncStorage } from "react-native";

const updateReducers = store => {
  const config = {
    key: "root",
    storage: AsyncStorage,
    blacklist: ["nav"]
  };

  return persistCombineReducers(config, store);
};

export default updateReducers;

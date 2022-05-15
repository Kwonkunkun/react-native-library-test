import { Platform, StatusBar, StatusBarStyle } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const useStatusBar = () => {
  const height =
    Platform.OS === "ios"
      ? getStatusBarHeight()
      : StatusBar.currentHeight ?? 24;

  const setStatusBarStyle = (style: StatusBarStyle) => {
    StatusBar.setBarStyle(style);
  };

  return { height, setStatusBarStyle };
};

export default useStatusBar;

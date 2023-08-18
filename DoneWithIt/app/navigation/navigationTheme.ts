import { DefaultTheme } from "@react-navigation/native";
import defaultColors from "../config/colors";

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: defaultColors.primary,
    background: defaultColors.white,
  },
};

export default navigationTheme;

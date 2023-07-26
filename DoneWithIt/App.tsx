// 01 Fundamental Concepts
// import ComponentAndStylesheet from "./course/01FundamentalConcepts/ComponentAndStylesheet";

// 02 Layout
// import DimensionAndOrientation from "./course/02Layout/DimensionAndOrientation";
// import Flexbox from "./course/02Layout/Flexbox";

// 02 Exercise
// import WelcomeScreen from "./app/screens/WelcomeScreen";
// import ViewImageScreen from "./app/screens/ViewImageScreen";

// 03 Styling
// import Borders from "./course/03Styling/Borders";
// import Shadows from "./course/03Styling/Shadows";
// import PaddingAndMargin from "./course/03Styling/PaddingAndMargin";
// import StylingText from "./course/03Styling/StylingText";
// import Icons from "./course/03Styling/Icons";

// Imports
import { View } from "react-native";
import AppCard from "./app/components/AppCard";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        flex: 1,
        padding: 20,
        paddingTop: 100,
      }}
    >
      <AppCard
        title="Red jacket for sale!"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
}

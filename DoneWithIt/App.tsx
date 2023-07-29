// 01 Fundamental Concepts
// import ComponentAndStylesheet from "./course/01FundamentalConcepts/ComponentAndStylesheet";

// 02 Layout
// import DimensionAndOrientation from "./course/02Layout/DimensionAndOrientation";
// import Flexbox from "./course/02Layout/Flexbox";

// 03 Styling
// import Borders from "./course/03Styling/Borders";
// import Shadows from "./course/03Styling/Shadows";
// import PaddingAndMargin from "./course/03Styling/PaddingAndMargin";
// import StylingText from "./course/03Styling/StylingText";
// import Icons from "./course/03Styling/Icons";

// Imports
import AppIcon from "./app/components/AppIcon";
import Screen from "./app/screens/Screen";

export default function App() {
  return (
    <Screen>
      <AppIcon
        name="email"
        size={100}
        backgroundColor="dodgerblue"
        iconColor="white"
      />
    </Screen>
  );
}

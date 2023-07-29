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

// 04 Input Components
// import InputText from "./course/04InputComponents/TextInput";

// Imports
import { useState } from "react";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/screens/Screen";

function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <Screen>
      <AppTextInput
        placeholder="First name"
        icon="email"
        onChangeText={setFirstName}
        value={firstName}
      />
    </Screen>
  );
}

export default App;

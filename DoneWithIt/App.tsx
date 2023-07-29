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
// import SwitchComp from "./course/04InputComponents/Switch";

// Imports
import { useState } from "react";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/screens/Screen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

function App() {
  const [category, setCategory] = useState(null);

  return (
    <Screen style={{ paddingHorizontal: 20 }}>
      <AppPicker
        selectedItem={category}
        onSelectItem={setCategory}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}

export default App;

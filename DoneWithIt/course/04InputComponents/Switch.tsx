import React from "react";

import { Switch } from "react-native";
import Screen from "../../app/screens/Screen";
import { useState } from "react";

function SwitchComp() {
  const [isNew, setIsNew] = useState(false);

  return (
    <Screen>
      <Switch value={isNew} onValueChange={setIsNew} />
    </Screen>
  );
}

export default SwitchComp;

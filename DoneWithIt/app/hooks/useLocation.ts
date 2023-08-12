import * as Location from "expo-location";
import { useEffect, useState } from "react";

const useLocation = () => {
  const [location, setLocation] = useState({});

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") return;

      const location = await Location.getLastKnownPositionAsync();
      if (location) {
        const { latitude, longitude } = location?.coords;
        setLocation({ latitude, longitude });
      }
    } catch (error) {
      console.log("Error reading user's location", error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};

export default useLocation;

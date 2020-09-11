import { useState, useEffect } from "react";
import Api from "../api";

function useWeather() {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(null);
  const [geo, setGeo] = useState({ lat: "", long: "" });

  const getLocation = () => {
    const success = (event) => {
      const {
        coords: { latitude: lat, longitude: long },
      } = event;
      setGeo({ lat, long });
    };

    const onError = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };
    navigator.geolocation.getCurrentPosition(success, onError);
  };

  const updateWeather = async () => {
    if (geo.lat !== "" && geo.long !== "") {
      try {
        const { data } = await Api(geo.lat, geo.long);
        setWeather(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    getLocation();
  }, []);
  useEffect(() => {
    updateWeather();
  }, [geo]);

  return { loading, weather, error };
}

export default useWeather;

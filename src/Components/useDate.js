import { useState, useEffect } from "react";

function useDate() {
  const [time, setTime] = useState();
  const [date, setDate] = useState({ weekday: "", month: "", day: "" });

  const getDate = () => {
    const date = new window.Date();
    const time = date.toLocaleTimeString([], {
      hour12: true,
    });
    const weekday = date.toLocaleString("en-US", { weekday: "long" });
    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.toLocaleString("en-US", { day: "numeric" });

    setTime(time);
    setDate({ weekday, month, day });
  };
  useEffect(() => {
    setInterval(getDate, 1000);
  }, []);
  return { time, date };
}
export default useDate;

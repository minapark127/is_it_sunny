import { useState, useEffect } from "react";

function useDate() {
  const [time, setTime] = useState({ current: "", apm: "" });
  const [date, setDate] = useState({ weekday: "", month: "", day: "" });

  const getDate = () => {
    const date = new window.Date();
    const time = date
      .toLocaleTimeString([], {
        hour12: true,
      })
      .padStart(11, "0");
    const weekday = date.toLocaleString([], { weekday: "long" });
    const month = date.toLocaleString([], { month: "long" });
    const day = date.toLocaleString([], { day: "numeric" });

    setTime({ current: time.slice(0, 5), apm: time.slice(-2) });
    setDate({ weekday, month, day });
  };
  useEffect(() => {
    setInterval(getDate, 1000);
  }, []);
  return { time, date };
}
export default useDate;

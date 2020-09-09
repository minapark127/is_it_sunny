import { useState, useEffect } from "react";

function useDate() {
  const [time, setTime] = useState({ current: "", apm: "" });
  const [date, setDate] = useState({ weekday: "", month: "", day: "" });

  const getDate = () => {
    const date = new window.Date();
    const time = date.toLocaleTimeString([], {
      hour12: true,
    });

    const weekday = date.toLocaleString([], { weekday: "long" });
    const month = date.toLocaleString([], { month: "long" });
    const day = date.toLocaleString([], { day: "numeric" });

    setTime({
      current: `${time.split(":")[0]}:${time.split(":")[1]}`,
      apm: time.slice(-2),
    });
    setDate({ weekday, month, day });
  };
  useEffect(() => {
    setInterval(getDate, 1000);
  }, []);
  return { time, date };
}
export default useDate;

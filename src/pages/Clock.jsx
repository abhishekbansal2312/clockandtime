import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  // Use the current date for the day of the week, date, etc.
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  // Format the time
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const timeString = `${formattedHours}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;

  // Format the full date (e.g., "Thursday, 7 November, 2024")
  const formattedDate = time.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Get the time zone (e.g., IST)
  const timeZone = time
    .toLocaleTimeString("en-US", { timeZoneName: "short" })
    .split(" ")[2];

  // Dummy values for sunrise and sunset (you can replace this with actual API data)
  const sunrise = "06:20";
  const sunset = "17:35";
  const duration = "11h 15m";

  // Assuming a fixed time difference with Time.is for simplicity
  const timeDiff = "+0.015 seconds (±0.021 seconds)";

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-center text-white px-4">
          <h1 className="text-9xl font-bold mb-4">{timeString}</h1>
          <p className="text-4xl text-gray-400 mb-4">{formattedDate}</p>
        </div>
      </div>
    </>
  );
};

export default Clock;

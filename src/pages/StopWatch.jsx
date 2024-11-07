import { useState, useEffect } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0); // Time in milliseconds
  const [isRunning, setIsRunning] = useState(false); // State to control the stopwatch

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Increment by 10 milliseconds
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  // Calculate hours, minutes, seconds, and milliseconds
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10); // Convert to tenths of a second

  // Format time string
  const formattedTime = `${hours.toString().padStart(2, "0")} : ${minutes
    .toString()
    .padStart(2, "0")} : ${seconds.toString().padStart(2, "0")} : ${milliseconds
    .toString()
    .padStart(2, "0")}`; // Include milliseconds in the format

  // Start and stop functions
  const startStopwatch = () => setIsRunning(true);
  const stopStopwatch = () => setIsRunning(false);
  const resetStopwatch = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">
            {formattedTime}
          </h1>
          <div className="space-x-4 mt-4">
            {!isRunning ? (
              <button
                onClick={startStopwatch}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Start
              </button>
            ) : (
              <button
                onClick={stopStopwatch}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Stop
              </button>
            )}
            <button
              onClick={resetStopwatch}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StopWatch;

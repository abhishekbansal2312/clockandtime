import { useState, useRef } from "react";
import Modal from "../components/Modal";
import AddTimer from "../components/AddTimer";

const Clock = () => {
  const [initialTime, setInitialTime] = useState(300); // Set initial timer value (5 minutes)
  const [time, setTime] = useState(initialTime);
  const [showTimer, setShowTimer] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const audioRef = useRef(null); // Reference for the audio element

  function showAddTimer() {
    setShowTimer(true);
  }

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const secs = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  let timeString = formatTime(time);

  const startTimer = () => {
    if (intervalId) return; // Prevent multiple intervals
    const newIntervalId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(newIntervalId);
          setTime(initialTime); // Reset timer when it reaches zero
          setIntervalId(null); // Clear the interval ID
          audioRef.current.play(); // Play the alarm sound
          return 0; // Set time to 0
        }
        return prevTime - 1; // Decrease time by 1 second
      });
    }, 1000);
    setIntervalId(newIntervalId); // Store the interval ID
  };

  const resetTimer = () => {
    setTime(initialTime); // Reset time to initial value
    clearInterval(intervalId); // Clear the interval if running
    setIntervalId(null); // Clear the interval ID
  };

  const stopTimer = () => {
    clearInterval(intervalId); // Clear the interval
    setIntervalId(null); // Clear the interval ID
    setTime(initialTime); // Reset time to initial value when stopped
  };

  const updateTimeFromModal = (newTimeInSeconds) => {
    setInitialTime(newTimeInSeconds);
    setTime(newTimeInSeconds); // Reset timer to new time
    setShowTimer(false);
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-center">
          <button
            className="text-white bg-blue-500 px-4 py-2 rounded-lg mb-4"
            onClick={showAddTimer}
          >
            Add Timer
          </button>
          <Modal
            isOpen={showTimer}
            title={"Add Timer"}
            onClose={() => setShowTimer(false)}
          >
            <AddTimer
              onClose={() => setShowTimer(false)}
              setTimer={updateTimeFromModal}
            />
          </Modal>
          <h1 className="text-9xl font-bold text-white mb-4">{timeString}</h1>
          <div className="flex justify-center space-x-4 mt-4">
            {initialTime === time ? (
              <button
                onClick={startTimer}
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Start
              </button>
            ) : (
              <button
                onClick={stopTimer}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
              >
                Stop
              </button>
            )}

            <button
              onClick={resetTimer}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Audio element for alarm sound */}
      <audio
        ref={audioRef}
        src="mixkit-censorship-beep-long-1083.mp3"
        preload="auto"
      />
    </>
  );
};

export default Clock;

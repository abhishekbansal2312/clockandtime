import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const AddTimer = ({ onClose, setTimer }) => {
  const [newHours, setNewHours] = useState(0);
  const [newMinutes, setNewMinutes] = useState(0);
  const [newSeconds, setNewSeconds] = useState(0);

  const handleSubmit = () => {
    const totalTime = newHours * 3600 + newMinutes * 60 + newSeconds;
    setTimer(totalTime);
    onClose();
  };

  const handleIncreaseHours = () => {
    setNewHours((prev) => Math.min(prev + 1, 24));
  };

  const handleDecreaseHours = () => {
    setNewHours((prev) => Math.max(prev - 1, 0));
  };

  const handleIncreaseMinutes = () => {
    setNewMinutes((prev) => (prev < 59 ? prev + 1 : 0));
    if (newMinutes === 59) handleIncreaseHours();
  };

  const handleDecreaseMinutes = () => {
    setNewMinutes((prev) => Math.max(prev - 1, 0));
  };

  const handleIncreaseSeconds = () => {
    setNewSeconds((prev) => (prev < 59 ? prev + 1 : 0));
    if (newSeconds === 59) handleIncreaseMinutes();
  };

  const handleDecreaseSeconds = () => {
    setNewSeconds((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="p-8  rounded-lg text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Set Timer</h2>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Hours Input */}
        <div className="flex flex-col items-center">
          <label className="mb-2 text-lg font-semibold">Hours</label>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faArrowUp}
              className="text-2xl mb-2 cursor-pointer hover:text-blue-200 transition-all"
              onClick={handleIncreaseHours}
            />
            <input
              type="number"
              value={newHours}
              onChange={(e) =>
                setNewHours(Math.max(0, Math.min(Number(e.target.value), 24)))
              }
              className="w-20 text-center border border-gray-300 rounded-md bg-white text-gray-800 shadow-inner"
              min="0"
              max="24"
            />
            <FontAwesomeIcon
              icon={faArrowDown}
              className="text-2xl mt-2 cursor-pointer hover:text-red-300 transition-all"
              onClick={handleDecreaseHours}
            />
          </div>
        </div>
        {/* Minutes Input */}
        <div className="flex flex-col items-center">
          <label className="mb-2 text-lg font-semibold">Minutes</label>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faArrowUp}
              className="text-2xl mb-2 cursor-pointer hover:text-blue-200 transition-all"
              onClick={handleIncreaseMinutes}
            />
            <input
              type="number"
              value={newMinutes}
              onChange={(e) =>
                setNewMinutes(Math.max(0, Math.min(Number(e.target.value), 59)))
              }
              className="w-20 text-center border border-gray-300 rounded-md bg-white text-gray-800 shadow-inner"
              min="0"
              max="59"
            />
            <FontAwesomeIcon
              icon={faArrowDown}
              className="text-2xl mt-2 cursor-pointer hover:text-red-300 transition-all"
              onClick={handleDecreaseMinutes}
            />
          </div>
        </div>
        {/* Seconds Input */}
        <div className="flex flex-col items-center">
          <label className="mb-2 text-lg font-semibold">Seconds</label>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faArrowUp}
              className="text-2xl mb-2 cursor-pointer hover:text-blue-200 transition-all"
              onClick={handleIncreaseSeconds}
            />
            <input
              type="number"
              value={newSeconds}
              onChange={(e) =>
                setNewSeconds(Math.max(0, Math.min(Number(e.target.value), 59)))
              }
              className="w-20 text-center border border-gray-300 rounded-md bg-white text-gray-800 shadow-inner"
              min="0"
              max="59"
            />
            <FontAwesomeIcon
              icon={faArrowDown}
              className="text-2xl mt-2 cursor-pointer hover:text-red-300 transition-all"
              onClick={handleDecreaseSeconds}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-500 transition duration-300"
          onClick={handleSubmit}
        >
          Set Timer
        </button>
        <button
          className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-500 transition duration-300"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddTimer;

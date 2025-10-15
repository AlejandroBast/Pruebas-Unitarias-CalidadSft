// src/components/DigitalClock.tsx
import { useEffect, useState } from "react";

export default function DigitalClock() {
  const formatTime = (date: Date) => {
    const hh = String(date.getHours()).padStart(2, "0");
    const mm = String(date.getMinutes()).padStart(2, "0");
    const ss = String(date.getSeconds()).padStart(2, "0");
    return `${hh}:${mm}:${ss}`;
  };

  const [time, setTime] = useState<string>(() => formatTime(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(formatTime(now));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Reloj Digital</h1>
      <div className="bg-gray-900 text-green-400 font-mono text-4xl p-4 rounded-lg shadow-lg">
        {time}
      </div>
    </div>
  );
}

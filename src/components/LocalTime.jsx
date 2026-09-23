import { useEffect, useState } from 'react';

const formatLocalTime = () =>
  new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: '2-digit' }).format(new Date());

// Amal's current local time, refreshed every 30 seconds.
export default function LocalTime() {
  const [time, setTime] = useState(formatLocalTime);

  useEffect(() => {
    const id = setInterval(() => setTime(formatLocalTime()), 30000);
    return () => clearInterval(id);
  }, []);

  return <span className="tabular-nums">{time}</span>;
}

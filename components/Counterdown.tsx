import React, { useEffect, useState, useCallback } from "react";

interface CountdownProps {
  targetDate: string;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const [hasMounted, setHasMounted] = useState(false); // Prevent SSR mismatch

  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const difference = target - now;

    return {
      days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
      seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
    };
  }, [targetDate]);

  const animation = useCallback((unite: string) => {
    document.getElementById(unite)?.classList.add("swing-top-fwd");
    sleep(950).then(() =>
      document.getElementById(unite)?.classList.remove("swing-top-fwd")
    );
  }, []);

  useEffect(() => {
    setHasMounted(true); // Set to true after mounting to prevent SSR mismatch
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft, hasMounted]);

  useEffect(() => {
    /// seconds animation
    animation("seconds");

    /// minutes animation
    if (timeLeft.seconds === 59) {
      animation("minutes");
    }

    /// hours animation
    if (timeLeft.minutes === 59 && timeLeft.seconds === 59) {
      animation("hours");
    }

    /// days animation
    if (
      timeLeft.hours === 23 &&
      timeLeft.minutes === 59 &&
      timeLeft.seconds === 59
    ) {
      animation("days");
    }
  }, [timeLeft, animation]);

  // Render empty state until the component has mounted
  if (!hasMounted) {
    return null;
  }

  return (
    <div className="flex space-x-8 scale-[0.45] md:scale-75 lg:scale-100">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="flex flex-col items-center rounded-lg p-8 w-40 relative">
            {/* Counter card*/}
            <div className="flex flex-col items-center">
              {/* Card top */}
              <div className="absolute bg-darkDesaturatedBlue w-full h-1/2 top-0 -z-10 rounded-lg shadow-top" />
              <div className="absolute bg-black/20 w-full h-1/2 top-0 rounded-lg border-black/20 border-b-[1px]" />

              <span className="text-softRed text-[64px] font-bold">
                {value.toString().padStart(2, "0")}
              </span>

              {/* Card bottom */}
              <div className="absolute bottom-0 w-full h-1/2">
                <div className="bg-darkDesaturatedBlue w-full h-full relative -z-10 rounded-lg shadow-bottom" />
              </div>
            </div>

            {/* Counter card top animation */}
            <div
              id={unit}
              className="flex-col top-0 left-0 items-center w-full h-1/2 absolute"
            >
              {/* Front face */}
              <div className="absolute flex justify-center bg-[#2A2B40] w-40 h-full p-8 rounded-lg border-transparent border-b-[1px] overflow-hidden front-face">
                <span className="text-[#C94D6C] text-[64px] font-bold transform">
                  {value.toString().padStart(2, "0")}
                </span>
              </div>

              {/* Back face */}
              <div className="absolute flex justify-center bg-darkDesaturatedBlue w-40 h-full rounded-lg overflow-hidden back-face">
                <span className="text-softRed text-[64px] font-bold  transform -translate-y-[48px]">
                  {value.toString().padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
          <span className="text-grayishBlue text-[12px] tracking-[0.2em] uppercase mt-4">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
}

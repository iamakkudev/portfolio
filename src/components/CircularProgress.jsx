const CircularProgress = ({ value = 40 }) => {
  const radius = 90;
  const stroke = 12;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-46 h-46">
      <svg
        height="100%"
        width="100%"
        viewBox="0 0 200 200"
        className="-rotate-90"
      >
        {/* Background circle */}
        <circle
          stroke="#d0cb8fc7"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx="100"
          cy="100"
        />

        {/* Progress circle */}
        <circle
          stroke="#f0ec50"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx="100"
          cy="100"
          className="transition-all duration-700 ease-out"
        />
      </svg>

      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold">{value}%</span>
      </div>
    </div>
  );
};

export default CircularProgress;

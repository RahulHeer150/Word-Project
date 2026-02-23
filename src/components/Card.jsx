import React from "react";

const Card = ({ word, meaning, sentance }) => {
  return (
    <div className="bg-[#161B22] border border-[#30363D] rounded-xl p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#00FFF7] cursor-pointer">
      <h2 className="text-2xl font-bold text-[#00FFF7] mb-3 tracking-wide">
        {word}
      </h2>

      <p className="text-[#E6EDF3] mb-3 leading-relaxed">
        <span className="text-[#7C3AED] font-semibold">Meaning:</span> {meaning}
      </p>

      <p className="text-gray-400 italic leading-relaxed">
        <span className="text-[#7C3AED] font-semibold not-italic">
          Example:
        </span>{" "}
        "{sentance}"
      </p>
    </div>
  );
};

export default Card;

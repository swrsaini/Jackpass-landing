import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
export function InterestCategory({ icon, label }) {
  return (
    <div className="flex flex-col items-center w-32  px-0 py-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      <p className="text-3xl flex items-center justify-center mb-2">{icon}</p>
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </div>
  );
}

const categories = [
  {
    icon: "🧗‍♂️",
    label: "Adventure",
  },
  {
    icon: "🎨",
    label: "Arts",
  },
  {
    icon: "🏃‍♀️",
    label: "Fitness",
  },
  {
    icon: "🍕",
    label: "Food",
  },
  {
    icon: "♟️",
    label: "Indoors",
  },
  {
    icon: "💃",
    label: "Party",
  },
  {
    icon: "⚽",
    label: "Sports",
  },
  {
    icon: "🦄",
    label: "Startups",
  },
  {
    icon: "✈️",
    label: "Travel",
  },
];

export function InterestSection() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 285;
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="overflow-hidden drop-shadow-xl mx-3 my-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 ">
          Pick your interest
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((e, index) => {
            return (
              <div key={index}>
                <InterestCategory icon={e.icon} label={e.label} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

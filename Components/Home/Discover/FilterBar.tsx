import React from "react";

const FilterButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="py-3 lg:px-6 px-3 bg-gray-200 hover:bg-primary hover:text-white text-sm font-bold rounded-full">
      {children}
    </p>
  );
};
export const FilterBar = () => {
  const data = [
    "All Categories",
    "Art",
    "Celebrities",
    "Gaming",
    "Music",
    "Crypto",
  ];

  return (
    <div className="flex justify-between">
      <div>
        <ul className="flex gap-3 flex-wrap">
          {data.map((p) => (
            <>
              <FilterButton key={p}>{p}</FilterButton>
            </>
          ))}
        </ul>
      </div>
      <FilterButton>All filter</FilterButton>
    </div>
  );
};

import React from "react";

export default function Day({ day, holiday, dayOfWeek }) {
  return (
    <div className="flex border border-gray-200 flex-col w-44 h-36 items-center">
      <h1 className="text-md my-1 font-bold">
        {dayOfWeek.toUpperCase().replace(".", "")}
      </h1>
      <div className="flex flex-col  items-center justify-center">
        <p className="text-sm p-1 my-1 text-center">{day}</p>
        {holiday && <p className="text-sm p-1 my-1 text-center">{holiday}</p>}
      </div>
    </div>
  );
}

import React from "react";
import axios from "axios";
export default function Day({ day, holiday, dayOfWeek, month }) {
  const handleSubmit = async (day, month) => {
    axios
      .post("http://localhost:3333/generate-with-date", {
        day: day,
        month: month,
      })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Liturgia.pptx");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  };

  return (
    <button
      className="flex border border-gray-200 flex-col w-44 h-36 items-center"
      onClick={() => handleSubmit(day, month)}
    >
      <h1 className="text-md my-1 font-bold">
        {dayOfWeek.toUpperCase().replace(".", "")}
      </h1>
      <div className="flex flex-col  items-center justify-center">
        <p className="text-sm p-1 my-1 text-center">{day}</p>
        {holiday && <p className="text-sm p-1 my-1 text-center">{holiday}</p>}
      </div>
    </button>
  );
}

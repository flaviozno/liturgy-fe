import { daysOfMonth } from "./utils/index";
import Day from "./components/day/index";
import React, { useEffect, useState } from "react";
function App() {
  const [days, setDays] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await daysOfMonth();
        setDays(response);
      } catch (error) {
        console.error("Erro ao obter os dias do mês:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App h-screem w-fullflex justify-center  ">
      <div className="flex flex-wrap items-center">
        {days &&
          days.map((day, index) => (
            <Day
              key={index}
              day={day.date}
              holiday={day.holiday}
              dayOfWeek={day.dayOfWeek}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
